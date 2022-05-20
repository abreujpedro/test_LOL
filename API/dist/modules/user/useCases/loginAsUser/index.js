"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../../repositories/implementations/UserRepository"));
const LoginUserController_1 = __importDefault(require("./LoginUserController"));
const LoginUserUseCase_1 = __importDefault(require("./LoginUserUseCase"));
const loginUserFactory = () => {
    const userRepo = new UserRepository_1.default();
    const loginUserUseCase = new LoginUserUseCase_1.default(userRepo);
    const loginUserController = new LoginUserController_1.default(loginUserUseCase);
    return loginUserController;
};
exports.default = loginUserFactory;
