import CreateUserUseCase from "./CreateUserUseCase";
import { Request, Response } from "express";

export default class CreateUserController {
  _useCase: CreateUserUseCase;
  constructor(useCase: CreateUserUseCase) {
    this._useCase = useCase;
  }
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    try {
      await this._useCase.execute({ name, email, password });
      return response.status(201).end();
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}