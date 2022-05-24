import UserRepository from "../../repositories/implementations/DDDRepository";
import GetPricesController from "./GetPricesController";
import GetPricesUseCase from "./GetPricesUseCase";

const getPricesFactory = () => {
  const userRepo = new UserRepository();
  const getPricesUseCase = new GetPricesUseCase(userRepo);
  const getPricesController = new GetPricesController(getPricesUseCase);
  return getPricesController;
};

export default getPricesFactory;
