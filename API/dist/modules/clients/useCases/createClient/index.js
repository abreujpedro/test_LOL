"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRepository_1 = __importDefault(require("../../repositories/implementations/ClientRepository"));
const CreateClientController_1 = __importDefault(require("./CreateClientController"));
const CreateClientUseCase_1 = __importDefault(require("./CreateClientUseCase"));
const createClientFactory = () => {
    const clientRepo = new ClientRepository_1.default();
    const createClientUseCase = new CreateClientUseCase_1.default(clientRepo);
    const createClientController = new CreateClientController_1.default(createClientUseCase);
    return createClientController;
};
exports.default = createClientFactory;
