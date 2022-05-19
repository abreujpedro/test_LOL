import User from "../../model/UserModel";
import IUserRepository, { ICreateUserDTO } from "../IUserRepository";

export default class UserRepository implements IUserRepository {
  async createUser({ name, password, email }: ICreateUserDTO) {
    await User.create({ name, password, email });
  }
  async getUSerByEmail(email: String) {
    const user = await User.findOne({ where: { email } });
    return user;
  }
}