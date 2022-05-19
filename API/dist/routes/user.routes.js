"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../modules/user/useCases/createUser"));
const userRoutes = (0, express_1.Router)();
const createClientController = (0, createUser_1.default)();
userRoutes.post("/user", (req, res) => createClientController.handle(req, res));
exports.default = userRoutes;
