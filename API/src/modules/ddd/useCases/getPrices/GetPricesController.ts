import GetPricesUseCase from "./GetPricesUseCase";
import { Request, Response } from "express";

export default class GetPricesController {
  _useCase: GetPricesUseCase;
  constructor(useCase: GetPricesUseCase) {
    this._useCase = useCase;
  }
  async handle(request: Request, response: Response) {
    const { dddOrigin, dddToCall, minutes, planMinutes } = request.query;
    try {
      if (dddOrigin && dddToCall && minutes && planMinutes) {
        const dddOriginNumber = Number(dddOrigin);
        const dddToCallNumber = Number(dddToCall);
        const minutesNumber = Number(minutes);
        const planMinutes = Number(minutesNumber);
        const prices = await this._useCase.execute({
          dddOrigin: dddOriginNumber,
          dddToCall: dddToCallNumber,
          minutes: minutesNumber,
          planMinutes: planMinutes,
        });
        return response.status(201).json(prices);
      }
    } catch (error) {
      return error;
    }
  }
}
