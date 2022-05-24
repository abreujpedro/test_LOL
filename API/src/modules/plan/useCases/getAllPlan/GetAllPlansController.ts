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
      return error;
    }
  }
}
