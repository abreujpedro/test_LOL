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
const axios_1 = __importDefault(require("axios"));
const takeGeoPosition = ({ address_name, city, number }) => __awaiter(void 0, void 0, void 0, function* () {
    const addressToSearch = address_name + " " + number;
    const url = 'http://api.positionstack.com/v1/forward';
    const params = {
        access_key: process.env.GEO_ACCESS_KEY,
        query: addressToSearch,
        region: city,
        limit: "1"
    };
    try {
        const response = yield axios_1.default.get(url, { params });
        const { latitude, longitude } = response.data.data[0];
        return { latitude, longitude };
    }
    catch (error) {
        return { latitude: null, longitude: null };
    }
});
exports.default = takeGeoPosition;
