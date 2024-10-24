import CustomError from "../../../../util/error/CustomError";
import GetAllDDDUseCase from "./GetAllDDDUseCase";
import { Request, Response } from "express";

export default class GetAllDDDController {
  _useCase: GetAllDDDUseCase;
  constructor(useCase: GetAllDDDUseCase) {
    this._useCase = useCase;
  }
  async handle(request: Request, response: Response) {
    try {
      const allDD = await this._useCase.execute();
      return response.status(201).json(allDD);
    } catch (error) {
      if (error instanceof CustomError) {
        return response.status(error.code).json({ error: error.message });
      }
      return response.status(500);
    }
  }
}
