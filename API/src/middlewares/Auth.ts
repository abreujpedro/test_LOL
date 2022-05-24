import { Request, Response, NextFunction } from "express";
import Token from "../util/Token/Token";
import CustomError from "../util/error/CustomError";

abstract class Auth {
  static ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
      throw new CustomError("Token inválido", 401);
    }

    const [, token] = authToken.split(" ");

    try {
      Token.compareToken(token);
      next();
    } catch (err) {
      throw new CustomError("Token inválido", 401);
    }
  }
}
