"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRepository_1 = __importDefault(require("../../repositories/implementations/ClientRepository"));
const GetClientController_1 = __importDefault(require("./GetClientController"));
const GetClientUseCase_1 = __importDefault(require("./GetClientUseCase"));
const getClientFactory = () => {
    const clientRepo = new ClientRepository_1.default();
    const getClientUseCase = new GetClientUseCase_1.default(clientRepo);
    const getClientController = new GetClientController_1.default(getClientUseCase);
    return getClientController;
};
exports.default = getClientFactory;
