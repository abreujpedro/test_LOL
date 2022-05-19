export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export default interface IUserRepository {
  createUser: (userDetails: ICreateUserDTO) => Promise<unknown>;
  getUSerByEmail: (email: String) => Promise<unknown>;
}