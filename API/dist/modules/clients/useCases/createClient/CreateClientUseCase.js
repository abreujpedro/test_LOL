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
const geoAPI_1 = __importDefault(require("../../../../externalAPIs/geoAPI/geoAPI"));
const CustomError_1 = __importDefault(require("../../../../util/error/CustomError"));
const checkData_1 = require("../../services/checkData");
const checkUserExists_1 = __importDefault(require("../../services/checkUserExists"));
class CreateClientUserCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute({ name, cnpj, corporate_name, phone, address_name, cep, city, district, number, state, option }) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checkData_1.requiredDatas)([name,
                cnpj,
                corporate_name,
                phone,
                address_name,
                cep,
                city,
                district,
                number,
                state,]);
            (0, checkData_1.requiredLength)(cnpj, 14);
            (0, checkData_1.requiredLength)(cep, 8);
            const userAlreadyExists = yield (0, checkUserExists_1.default)(this.repository, cnpj);
            if (userAlreadyExists) {
                throw new CustomError_1.default("Client Already Exists", 400);
            }
            try {
                const { latitude, longitude } = yield (0, geoAPI_1.default)({ address_name, city, number });
                this.repository.createClient({
                    name,
                    cnpj,
                    corporate_name,
                    phone,
                    address_name,
                    cep,
                    city,
                    district,
                    number,
                    state,
                    latitude,
                    longitude,
                    option
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = CreateClientUserCase;
