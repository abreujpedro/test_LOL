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
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute({ name, email, picture, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw "Email incorrect";
            }
            const userAlreadyExists = yield this.repository.getUSerByEmail(email);
            if (userAlreadyExists) {
                throw "User Already Exists";
            }
            try {
                this.repository.createUser({ name, email, picture, password });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.default = CreateUserUseCase;
