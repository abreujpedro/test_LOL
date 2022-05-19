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
const CustomError_1 = __importDefault(require("../../../../util/error/CustomError"));
const checkUserExists_1 = __importDefault(require("../../services/checkUserExists"));
class GetClientUserCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(cnpj) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!cnpj) {
                try {
                    const clients = yield this.repository.getAllClient();
                    return clients;
                }
                catch (error) {
                    throw new Error(error);
                }
            }
            const userAlreadyExists = yield (0, checkUserExists_1.default)(this.repository, cnpj);
            if (!userAlreadyExists) {
                throw new CustomError_1.default(`There is no client with CNPJ:${cnpj}`, 400);
            }
            try {
                const client = yield this.repository.getClientByCNPJ(cnpj);
                return client;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = GetClientUserCase;
