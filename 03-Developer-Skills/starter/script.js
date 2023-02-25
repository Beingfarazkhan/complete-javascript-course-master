// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let maxTemp = temp[0];
// let minTemp = temp[0];
// const calcTempAmplitude = function (temps) {
//   for (let i = 1; i < temps.length; i++) {
//     if (temps[i] > maxTemp) {
//       maxTemp = temps[i];
//     }
//     if (temps[i] < minTemp) {
//       minTemp = temps[i];
//     }
//   }
// // };
// calcTempAmplitude(temp);
// console.log(maxTemp);
// console.log(minTemp);
// const tempAmplitude = maxTemp - minTemp;
// console.log(tempAmplitude);

// const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let maxTemp = temp[0];
// let minTemp = temp[0];
// const calcTempAmplitude = function (temps) {
//   for (let i = 1; i < temps.length; i++) {
//     if (temps[i] > maxTemp) {
//       maxTemp = temps[i];
//     }
//     if (temps[i] < minTemp) {
//       minTemp = temps[i];
//     }
//   }
//   const tempAmplitude = maxTemp - minTemp;
//   return tempAmplitude;
// };
// const tempAmplitude = calcTempAmplitude(temp);
// console.log(maxTemp);
// console.log(minTemp);
// console.log(tempAmplitude);

//PROBLEM 2
// const temp1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temp2 = [5, -7, -8, -10, "error", 19, 23, 27, 25, 24, 29, 25];
// function mergArr(arr1, arr2) {
//   let arr3 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     arr3[i] = arr1[i];
//   }
//   for (let j = arr3.length; j < arr2.length + arr3.length; j++) {
//     arr3[j] = arr2[j];
//   }
//   return arr3;
// }
// const mergedArray = [...temp1, ...temp2];
// console.log(mergedArray);

// let maxTemp = mergedArray[0];
// let minTemp = mergedArray[0];
// const calcTempAmplitude = function (temps) {
//   for (let i = 1; i < temps.length; i++) {
//     if (temps[i] > maxTemp) {
//       maxTemp = temps[i];
//     }
//     if (temps[i] < minTemp) {
//       minTemp = temps[i];
//     }
//   }
//   const tempAmplitude = maxTemp - minTemp;
//   return tempAmplitude;
// };
// const tempAmplitude = calcTempAmplitude(mergedArray);
// console.log(maxTemp);
// console.log(minTemp);
// console.log(tempAmplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Degree Celsius "),
//   };
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

//////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(arr) {
  let finalData = ``;
  for (let i = 0; i < arr.length; i++) {
    finalData += ` ... ${arr[i]}ºC in ${i + 1} days `;
  }
  return finalData;
}
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
