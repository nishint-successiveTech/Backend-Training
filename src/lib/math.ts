import lh from "lodash";

const add = (num1: number, num2: number) => {
  return lh.add(num1, num2);
};
const sub = (num1: number, num2: number) => {
  return lh.subtract(num1, num2);
};
const multi = (num1: number, num2: number) => {
  return lh.multiply(num1, num2);
};
const div = (num1: number, num2: number) => {
  if (num2 == 0) {
    throw new Error("NUM2 IS ZERO ,DIVISION IS NOT ALLOWED BY ZERO");
  }
  return lh.divide(num1, num2);
};

export { add, sub, multi, div };
