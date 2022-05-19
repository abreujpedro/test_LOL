"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createClient_1 = __importDefault(require("../modules/clients/useCases/createClient"));
const deleteClient_1 = __importDefault(require("../modules/clients/useCases/deleteClient"));
const getClient_1 = __importDefault(require("../modules/clients/useCases/getClient"));
const updateNameClient_1 = __importDefault(require("../modules/clients/useCases/updateNameClient"));
const clientRoutes = (0, express_1.Router)();
const createClientController = (0, createClient_1.default)();
const getClientController = (0, getClient_1.default)();
const deleteClientController = (0, deleteClient_1.default)();
const updateNameClientController = (0, updateNameClient_1.default)();
clientRoutes.get("/client", (req, res) => getClientController.handle(req, res));
clientRoutes.post("/client", (req, res) => createClientController.handle(req, res));
clientRoutes.delete("/client", (req, res) => deleteClientController.handle(req, res));
clientRoutes.patch("/client", (req, res) => updateNameClientController.handle(req, res));
exports.default = clientRoutes;
