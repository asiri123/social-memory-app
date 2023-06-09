// import React from "react";

// function SumComponent() {
//   const arr = ["$10", "-20", "+40.5", "-$5.2"];

//   const getSumFunction = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       const calculatedSum = parseFloat(arr[i].replace(/[^0-9.-]+/g, "")) || 0;

//       sum += calculatedSum;
//     }
//     return sum;
//   };

//   let sum = getSumFunction(arr);
//   let length = arr.length;

//   return <div>{length}</div>;
// }

// export default SumComponent;
