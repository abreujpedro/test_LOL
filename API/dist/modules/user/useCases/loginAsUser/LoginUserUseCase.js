"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Encrypt_1 = __importDefault(require("../../../../util/encrypt/Encrypt"));
const CustomError_1 = __importDefault(require("../../../../util/error/CustomError"));
const Token_1 = __importDefault(require("../../../../util/Token/Token"));
class CreateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new CustomError_1.default("Email incorrect", 400);
            }
            const userAlreadyExists = yield this.repository.getUSerByEmail(email);
            if (!userAlreadyExists) {
                throw new CustomError_1.default("Email or password incorrect", 400);
            }
            try {
                const userPassword = yield this.repository.getUserPasswordByEmail(email);
                const isCorrect = yield Encrypt_1.default.compareData(password, userPassword);
                if (isCorrect) {
                    const token = Token_1.default.createToken({ email });
                    return { token };
                }
                else {
                    throw new CustomError_1.default("Email or password incorrect", 401);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = CreateUserUseCase;
