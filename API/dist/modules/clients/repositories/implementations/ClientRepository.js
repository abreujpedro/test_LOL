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
const addressModel_1 = __importDefault(require("../../../address/model/addressModel"));
const clientModel_1 = __importDefault(require("../../model/clientModel"));
class ClientRepository {
    createClient({ name, cnpj, corporate_name, phone, address_name, cep, city, district, number, state, latitude, longitude, option, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield clientModel_1.default.create({ name, cnpj, corporate_name, phone });
            yield addressModel_1.default.create({
                name: address_name,
                cep,
                city,
                district,
                number,
                state,
                latitude,
                longitude,
                option,
                client_id: client.getDataValue("id"),
            });
        });
    }
    getClientByCNPJ(cnpj) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield clientModel_1.default.findOne({
                where: { cnpj },
                include: [{ model: addressModel_1.default }],
            });
            return client;
        });
    }
    getAllClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield clientModel_1.default.findAll({
                include: [{ model: addressModel_1.default }],
            });
            return client;
        });
    }
    deleteClientByCNPJ(cnpj) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield clientModel_1.default.findOne({
                where: {
                    cnpj
                },
            });
            yield (client === null || client === void 0 ? void 0 : client.destroy());
        });
    }
    updateClientName(cnpj, name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield clientModel_1.default.update({ name }, { where: { cnpj } });
        });
    }
}
exports.default = ClientRepository;
