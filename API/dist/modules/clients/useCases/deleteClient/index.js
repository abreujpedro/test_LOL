"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRepository_1 = __importDefault(require("../../repositories/implementations/ClientRepository"));
const DeleteClientController_1 = __importDefault(require("./DeleteClientController"));
const DeleteClientUseCase_1 = __importDefault(require("./DeleteClientUseCase"));
const deleteClientFactory = () => {
    const clientRepo = new ClientRepository_1.default();
    const deleteClientUseCase = new DeleteClientUseCase_1.default(clientRepo);
    const deleteClientController = new DeleteClientController_1.default(deleteClientUseCase);
    return deleteClientController;
};
exports.default = deleteClientFactory;
