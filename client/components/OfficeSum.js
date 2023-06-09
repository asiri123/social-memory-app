import React from "react";

const OfficeSum = () => {
  const arr = ["$50", "-$20", "$10", "-$15"];

  const calculatedExpenses = (arr) => {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      const calculatedSum = parseFloat(arr[i].replace(/[^0-9.-]+/g, "")) || 0;
      sum += calculatedSum;
      
    }
  };

  let sum = calculatedExpenses(arr);
  let length = arr
  

  return (
    <div></div>
  )
};

export default OfficeSum;
