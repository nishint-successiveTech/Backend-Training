const lh = require("lodash");

const add = (num1, num2) => {
  return lh.add(num1, num2);
};
const sub = (num1, num2) => {
  return lh.subtract(num1, num2);
};
const multi = (num1, num2) => {
  return lh.multiply(num1, num2);
};
const div = (num1, num2) => {
  if (num2 == 0) {
    throw new Error("NUM2 IS ZERO ,DIVISION IS NOT ALLOWED BY ZERO");
  }
  return lh.divide(num1, num2);
};

module.exports={ 
    add,sub,multi,div
};
