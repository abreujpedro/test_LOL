import Encrypt from "../../../../util/encrypt/encrypt";
import CustomError from "../../../../util/error/CustomError";
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
      throw new CustomError("Email incorrect", 400);
    }
    const userAlreadyExists = await this.repository.getUSerByEmail(email);
    if (userAlreadyExists) {
      throw new CustomError("User Already Exists", 400);
    }
    try {
      const passwordHash = await Encrypt.encryptData(password);
      this.repository.createUser({
        name,
        email,
        password: passwordHash,
      });
    } catch (error: any) {
      throw error;
    }
  }
}
