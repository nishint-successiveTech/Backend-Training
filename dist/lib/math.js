"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.multi = exports.sub = exports.add = void 0;
const lodash_1 = __importDefault(require("lodash"));
const add = (num1, num2) => {
    return lodash_1.default.add(num1, num2);
};
exports.add = add;
const sub = (num1, num2) => {
    return lodash_1.default.subtract(num1, num2);
};
exports.sub = sub;
const multi = (num1, num2) => {
    return lodash_1.default.multiply(num1, num2);
};
exports.multi = multi;
const div = (num1, num2) => {
    if (num2 == 0) {
        throw new Error("NUM2 IS ZERO ,DIVISION IS NOT ALLOWED BY ZERO");
    }
    return lodash_1.default.divide(num1, num2);
};
exports.div = div;
//# sourceMappingURL=math.js.map