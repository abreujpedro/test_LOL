"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../../repositories/implementations/UserRepository"));
const CreateUserController_1 = __importDefault(require("./CreateUserController"));
const CreateUserUseCase_1 = __importDefault(require("./CreateUserUseCase"));
const createUserFactory = () => {
    const userRepo = new UserRepository_1.default();
    const createUserUseCase = new CreateUserUseCase_1.default(userRepo);
    const createUserController = new CreateUserController_1.default(createUserUseCase);
    return createUserController;
};
exports.default = createUserFactory;
