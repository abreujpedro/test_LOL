import UserRepository from "../../repositories/implementations/UserRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

const createUserFactory = () => {
  const userRepo = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepo);
  const createUserController = new CreateUserController(createUserUseCase);
  return createUserController;
};

export default createUserFactory;