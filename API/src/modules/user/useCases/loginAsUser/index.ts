import UserRepository from "../../repositories/implementations/UserRepository";
import LoginUserController from "./LoginUserController";
import LoginUserUseCase from "./LoginUserUseCase";

const loginUserFactory = () => {
  const userRepo = new UserRepository();
  const loginUserUseCase = new LoginUserUseCase(userRepo);
  const loginUserController = new LoginUserController(loginUserUseCase);
  return loginUserController;
};

export default loginUserFactory;