"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRepository_1 = __importDefault(require("../../repositories/implementations/ClientRepository"));
const UpdateNameClientController_1 = __importDefault(require("./UpdateNameClientController"));
const UpdateNameClientUseCase_1 = __importDefault(require("./UpdateNameClientUseCase"));
const updateNameClientFactory = () => {
    const clientRepo = new ClientRepository_1.default();
    const updateNameClientUseCase = new UpdateNameClientUseCase_1.default(clientRepo);
    const updateNameClientController = new UpdateNameClientController_1.default(updateNameClientUseCase);
    return updateNameClientController;
};
exports.default = updateNameClientFactory;
