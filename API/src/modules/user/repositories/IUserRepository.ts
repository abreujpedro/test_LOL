import { Model } from "sequelize/types";

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export default interface IUserRepository {
  createUser: (userDetails: ICreateUserDTO) => void;
  getUSerByEmail: (email: string) => Promise<Model<any, any> | null>;
  getUserPasswordByEmail:(email: string) => any;
}