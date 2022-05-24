import UserRepository from "../../repositories/implementations/DDDRepository";
import GetAllDDDController from "./GetAllDDDController";
import GetAllDDDUseCase from "./GetAllDDDUseCase";

const getAllDDDFactory = () => {
  const userRepo = new UserRepository();
  const getAllDDDUseCase = new GetAllDDDUseCase(userRepo);
  const getAllDDDController = new GetAllDDDController(getAllDDDUseCase);
  return getAllDDDController;
};

export default getAllDDDFactory;
