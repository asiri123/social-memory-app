import React, { useState } from "react";

const acenturaexmp = (arr) => {
  //const [expenseSum, setExpenseSum] = useState(0);

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const numericValues = parseFloat(arr[i].replace(/[^0-9.-]+/g, "")) || 0;

    sum += numericValues;
    // setExpenseSum(expenseSum += numericValues)
  }
  return sum;

  
};

const dataSet = ["$10", "-20", "+30.5", "-$5.2"];
const result = acenturaexmp(dataSet);
console.log(result, "resultresultresult");


export default acenturaexmp;
