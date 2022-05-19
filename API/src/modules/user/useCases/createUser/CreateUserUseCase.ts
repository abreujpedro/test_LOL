import encrypt from "../../../../util/encrypt/encrypt";
import IUserRepository from "../../repositories/IUserRepository";

interface IRequestCreateUser {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserUseCase {
  repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute({ name, email, password }: IRequestCreateUser) {
    if (!email) {
      throw "Email incorrect";
    }
    const userAlreadyExists = await this.repository.getUSerByEmail(email);
    if (userAlreadyExists) {
      throw "User Already Exists";
    }
    try {
      const passwordHash = await encrypt(password);
      this.repository.createUser({
        name,
        email,
        password: passwordHash,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}