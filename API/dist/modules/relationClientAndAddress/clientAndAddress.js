"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addressModel_1 = __importDefault(require("../address/model/addressModel"));
const clientModel_1 = __importDefault(require("../clients/model/clientModel"));
const handleDb = () => {
    clientModel_1.default.hasMany(addressModel_1.default, { foreignKey: "client_id", onDelete: 'cascade', hooks: true });
    addressModel_1.default.belongsTo(clientModel_1.default, {
        foreignKey: "client_id",
    });
};
exports.default = handleDb;
