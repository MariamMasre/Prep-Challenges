"use strict";

// --------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array.
//  Without using build-in methods.
//
//  Input: [12, 32, 22, 45, 78, 12, 50]
//  Output: 78

const findMax = (arr) => {
  let max = arr[0];
  // write your code here
  
  for (let i = 0; i< arr.length; i++) {
    const eleme = arr[i];
    if (eleme > max) {
      max = eleme
    }
    
  }
  return max;
};

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an array and returns the sum of the numeric values.
//  Inside the array (there could be strings), without using built-in methods (You can use `typeof`)
//
//  Input: [20, '234', 'car', 41, 20, 'chair']
//  Output: 81
const sumNums = (arr) => {
  let sum=0;
  // write your code here
  for (let i = 0; i< arr.length; i++) {
    const eleme = arr[i];
   if (typeof eleme =='number')
      sum=sum+eleme;
  }

  return sum;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };