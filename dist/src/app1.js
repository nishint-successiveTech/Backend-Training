"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performMathOperation = performMathOperation;
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
const math_1 = require("../lib/math");
function performMathOperation() {
    const takeInput = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    takeInput.question("ENTER FIRST NUMBER ", (n1) => {
        takeInput.question("ENTER SECOND NUMBER ", (n2) => {
            const firstNum = parseInt(n1);
            const secondNum = parseInt(n2);
            const ansAdd = (0, math_1.add)(firstNum, secondNum);
            const ansMulti = (0, math_1.multi)(firstNum, secondNum);
            const ansSub = (0, math_1.sub)(firstNum, secondNum);
            let ansDiv;
            try {
                ansDiv = (0, math_1.div)(firstNum, secondNum);
            }
            catch (e) {
                ansDiv = e.message;
                console.error(e.message);
            }
            console.log(`Addition of ${firstNum} and ${secondNum} is ${ansAdd}`);
            console.log(`Subtraction of ${firstNum} and ${secondNum} is ${ansSub}`);
            console.log(`Multiplication of ${firstNum} and ${secondNum} is ${ansMulti}`);
            console.log(`Division  of ${firstNum} and ${secondNum} is ${ansDiv}`);
            const dataCsv = `Operation,Result
Addition,${ansAdd}
Subtraction,${ansSub}
Multiplication,${ansMulti}
Division,${ansDiv}
`;
            fs_1.default.writeFileSync("result.csv", dataCsv);
            console.log("SAVED SUCCESSFULLY IN CSV");
            takeInput.close();
        });
    });
}
//# sourceMappingURL=app1.js.map