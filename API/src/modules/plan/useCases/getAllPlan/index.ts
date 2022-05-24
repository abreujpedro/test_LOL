import UserRepository from "../../repositories/implementations/DDDRepository";
import GetAllPlansController from "./GetAllPlansController";
import GetAllPlansUseCase from "./GetAllPlansUseCase";

const getAllPlansFactory = () => {
  const userRepo = new UserRepository();
  const getAllPlansUseCase = new GetAllPlansUseCase(userRepo);
  const getAllPlansController = new GetAllPlansController(getAllPlansUseCase);
  return getAllPlansController;
};

export default getAllPlansFactory;
