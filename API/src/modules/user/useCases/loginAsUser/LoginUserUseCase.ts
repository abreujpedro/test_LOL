import Encrypt from "../../../../util/encrypt/Encrypt";
import CustomError from "../../../../util/error/CustomError";
import Token from "../../../../util/Token/Token";
import IUserRepository from "../../repositories/IUserRepository";

interface IRequestLogin {
  email: string;
  password: string;
}

export default class CreateUserUseCase {
  repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute({ email, password }: IRequestLogin) {
    if (!email) {
      throw new CustomError("Email incorrect", 400);
    }
    const userAlreadyExists = await this.repository.getUSerByEmail(email);
    if (!userAlreadyExists) {
      throw new CustomError("Email or password incorrect", 400);
    }
    try {
      const userPassword = await this.repository.getUserPasswordByEmail(email)
      const isCorrect = await Encrypt.compareData(password, userPassword);

      if(isCorrect) {
        const token = Token.createToken({email})
        return {token}
      } else {
        throw new CustomError("Email or password incorrect", 401);
      }
    } catch (error: any) {
      throw error;
    }
  }
}