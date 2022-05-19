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
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = __importDefault(require("./config/db"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./documentation/swagger.json"));
const CustomError_1 = __importDefault(require("./util/error/CustomError"));
require("express-async-errors");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(user_routes_1.default);
app.use((error, req, res, next) => {
    if (error instanceof CustomError_1.default) {
        return res.status(error.code).json({ error: error.message });
    }
    return res
        .status(500)
        .json({ status: 500, message: "internal server error" });
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const port = process.env.PORT || 3000;
        yield db_1.default.sync();
        app.listen(port, () => {
            console.log("server on port ", port);
        });
    }
    catch (error) {
        console.log(error);
    }
}))();
