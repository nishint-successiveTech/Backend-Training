import readline from "readline";
import fs from "fs";
import { add, sub, multi, div } from "./lib/math.js";
const takeInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
takeInput.question("ENTER FIRST NUMBER ", (n1) => {
  takeInput.question("ENTER SECOND NUMBER ", (n2) => {
    const firstNum = parseInt(n1);
    const secondNum = parseInt(n2);
    const ansAdd = add(firstNum, secondNum);
    const ansMulti = multi(firstNum, secondNum);
    const ansSub = sub(firstNum, secondNum);
    let ansDiv;
    try {
      ansDiv = div(firstNum, secondNum);
    } catch (e) {
      ansDiv = e.message;
      console.error(e.message);
    }
    console.log(`Addition of ${firstNum} and ${secondNum} is ${ansAdd}`);
    console.log(`Subtraction of ${firstNum} and ${secondNum} is ${ansSub}`);
    console.log(
      `Multiplication of ${firstNum} and ${secondNum} is ${ansMulti}`
    );
    console.log(`Division  of ${firstNum} and ${secondNum} is ${ansDiv}`);
    const dataCsv = `Operation,Result
Addition,${ansAdd}
Subtraction,${ansSub}
Multiplication,${ansMulti}
Division,${ansDiv}
`;
    fs.writeFileSync("result.csv", dataCsv);
    console.log("SAVED SUCCESSFULLY IN CSV");
    takeInput.close();
  });
});
//# sourceMappingURL=index.js.map
