"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredLength = exports.requiredDatas = void 0;
const CustomError_1 = __importDefault(require("../../../util/error/CustomError"));
const requiredDatas = (data) => {
    data.forEach(element => {
        if (!element) {
            throw new CustomError_1.default(`Invalid null elements`, 400);
        }
    });
};
exports.requiredDatas = requiredDatas;
const requiredLength = (data, length) => {
    if (data.length !== length) {
        throw new CustomError_1.default(`Ivalid element length`, 400);
    }
};
exports.requiredLength = requiredLength;
