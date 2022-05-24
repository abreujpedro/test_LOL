import GetPricesUseCase from "./GetPricesUseCase";
import { Request, Response } from "express";

export default class GetPricesController {
  _useCase: GetPricesUseCase;
  constructor(useCase: GetPricesUseCase) {
    this._useCase = useCase;
  }
  async handle(request: Request, response: Response) {
    const { dddOrigin, dddToCall, minutes, planMinutes } = request.body;
    try {
      const prices = await this._useCase.execute({
        dddOrigin,
        dddToCall,
        minutes,
        planMinutes,
      });
      return response.status(201).json(prices);
    } catch (error) {
      return error;
    }
  }
}
