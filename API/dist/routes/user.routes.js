"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../modules/user/useCases/createUser"));
const loginAsUser_1 = __importDefault(require("../modules/user/useCases/loginAsUser"));
const userRoutes = (0, express_1.Router)();
const createUserController = (0, createUser_1.default)();
const loginUserController = (0, loginAsUser_1.default)();
userRoutes.post("/user", (req, res) => createUserController.handle(req, res));
userRoutes.post("/login", (req, res) => loginUserController.handle(req, res));
exports.default = userRoutes;
