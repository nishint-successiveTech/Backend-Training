const readline = require("readline");
const fs = require("fs");
const obj = require("./lib/math");

const takeInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

takeInput.question("ENTER FIRST NUMBER ", (n1) => {
  takeInput.question("ENTER SECOND NUMBER ", (n2) => {
    const firstNum = parseInt(n1);
    const secondNum = parseInt(n2);

    const ansAdd = obj.add(firstNum, secondNum);
    const ansMulti = obj.multi(firstNum, secondNum);
    const ansSub = obj.sub(firstNum, secondNum);
    let ansDiv;

    try {
      ansDiv = obj.div(firstNum, secondNum);
    } catch (e) {
      ansDiv = console.error(e.message);
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
