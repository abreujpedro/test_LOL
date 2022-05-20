import CreateUserUseCase from "./LoginUserUseCase";
import { Request, Response } from "express";

export default class CreateUserController {
  _useCase: CreateUserUseCase;
  constructor(useCase: CreateUserUseCase) {
    this._useCase = useCase;
  }
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
      const token = await this._useCase.execute({ email, password });
      return response.status(200).json(token);
    } catch (error) {
      return error;
    }
  }
}