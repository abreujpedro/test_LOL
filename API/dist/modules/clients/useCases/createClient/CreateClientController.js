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
class CreateClientController {
    constructor(useCase) {
        this._useCase = useCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, cnpj, corporate_name, phone, address_name, cep, city, district, number, state, latitude, longitude, option, } = request.body;
            yield this._useCase.execute({
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
                option,
            });
            return response.status(201).end();
        });
    }
}
exports.default = CreateClientController;
