import readline from "readline";
import fs from "fs";
import { add, sub, multi, div } from "../lib/math";

export function performMathOperation(): void {
  const takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  takeInput.question("ENTER FIRST NUMBER ", (num1: string) => {
    takeInput.question("ENTER SECOND NUMBER ", (num2: string) => {
      const firstNum: number = parseInt(num1);
      const secondNum: number = parseInt(num2);

      const ansAdd: number = add(firstNum, secondNum);
      const ansMulti: number = multi(firstNum, secondNum);
      const ansSub: number = sub(firstNum, secondNum);
      let ansDiv: number | string;

      try {
        ansDiv = div(firstNum, secondNum);
      } catch (e: any) {
        ansDiv = e.message;
        console.error(e.message);
      }

      console.log(`Addition of ${firstNum} and ${secondNum} is ${ansAdd}`);
      console.log(`Subtraction of ${firstNum} and ${secondNum} is ${ansSub}`);
      console.log(
        `Multiplication of ${firstNum} and ${secondNum} is ${ansMulti}`
      );
      console.log(`Division  of ${firstNum} and ${secondNum} is ${ansDiv}`);

      const dataCsv: string = `Operation,Result
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
}
