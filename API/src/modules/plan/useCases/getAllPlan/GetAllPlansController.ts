import CustomError from "../../../../util/error/CustomError";
import GetAllPlansUseCase from "./GetAllPlansUseCase";
import { Request, Response } from "express";

export default class GetAllPlansController {
  _useCase: GetAllPlansUseCase;
  constructor(useCase: GetAllPlansUseCase) {
    this._useCase = useCase;
  }
  async handle(request: Request, response: Response) {
    try {
      const allPlans = await this._useCase.execute();
      return response.status(201).json(allPlans);
    } catch (error) {
      if (error instanceof CustomError) {
        return response.status(error.code).json({ error: error.message });
      }
      return response.status(500);
    }
  }
}
