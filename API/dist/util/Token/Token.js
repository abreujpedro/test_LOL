"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
class Token {
    static createToken({ email }) {
        if (process.env.JWT_SECRET) {
            const token = (0, jsonwebtoken_1.sign)({
                user: {
                    email
                }
            }, process.env.JWT_SECRET, { expiresIn: '1d' });
            return token;
        }
    }
    compareToken(token) {
        if (process.env.JWT_SECRET) {
            (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        }
    }
}
exports.default = Token;
