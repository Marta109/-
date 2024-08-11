//!-------  16_Gg. Количество единиц-2   --------------------
// let arr = [
//   [2, 1, 1, 1, 1],
//   [1, 0, 1, 1, 0],
//   [1, 0, 0, 0, 3],
//   [7, 0, 0, 0, 1],
//   [1, 1, 4, 1, 1],
// ];

// let r = 2,
//   c = 4,
//   k = 2;

// let counter = 0;
// for (let i = k - r; i < k; i++) {
//   for (let j = c - r; j < c; j++) {
//     if (arr[i][j] === 1) counter++;
//   }
// }

// console.log(counter);

//!-------  11_Gs8. Сумма положительных  --------------------
// const arr = [
//   [1, 2, 3],
//   [4, -5, 6],
//   [-7, -8, -9],
// ];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] > 0) sum += arr[i][j];
//   }
// }

// console.log(sum);

//!-------  16_Gs. Симметричность матрицы-2 --------------------
// const arr = [
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 4, 4],
// ];

// const arr = [
//   [1, 2, 3, 4],
//   [1, 2, 3, 5],
//   [1, 2, 3, 4],
// ];

// let n1 = 1,
//   n2 = 2;
// n1--;
// n2--;

// let sum = 0;
// let flag = true;
// for (let i = 0; i < arr[0].length; i++) {
//   if (arr[n1][i] === arr[n2][i]) {
//     sum += arr[n1][i];
//   } else {
//     flag = false;
//     sum += arr[n2][i];
//   }
// }
// console.log(flag ? "Yes " + sum : "NO " + sum);

//!-------  12_Gs. Max + Min в 2D --------------------
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 0, 9],
// ];

// let min = 0,
//   max = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] > max) max = arr[i][j];
//     if (arr[i][j] < min) min = arr[i][j];
//   }
// }

// console.log(min + max);

//!-------  11_Gg8. Максимум в строке  --------------------
// const arr = [
//   [1, 2, 3, 3],
//   [4, -5, 6, 2],
//   [-7, -8, -9, -1],
// ];

// for (let i = 0; i < arr.length; i++) {
//   let max = -Infinity;
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] > max) max = arr[i][j];
//   }
//   console.log(max);
// }

//  todo ----------- or --------------
// for (let i = 0; i < arr.length; i++) {
//   console.log(Math.max(...arr[0]));
// }

//!-------  15_Gg. Максимальная сумма  --------------------
// const arr = [
//   [1, 5, 6, 2, 2, 3],
//   [1, 1, 1, 1, 4, 7],
//   [1, 3, 4, 4, 4, 2],
// ];

// let maxSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
//   if (sum > maxSum) maxSum = sum;
// }

// console.log(maxSum);

//!-------  13_Gg9. Числа Z  --------------------
// const arr = [
//   [1, 2, 3],
//   [4, 2, 2],
//   [16, 8, 9],
// ];

// let z = 2;
// for (let i = 0; i < arr.length; i++) {
//   let counter = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] === z) counter++;
// }
//   console.log(counter);
// }

//!-------  14_Gg. Суммы по столбцам   --------------------
// const arr = [
//   [4, 0, 3, 8],
//   [2, 1, 0, 2],
//   [3, 2, 0, 3],
//   [1, 3, 4, 2],
//   [1, 2, 1, 5],
// ];

// let dictionary = {};
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     dictionary[j] !== undefined
//       ? (dictionary[j] += arr[i][j])
//       : (dictionary[j] = arr[i][j]);
//   }
// }

// console.log(...Object.values(dictionary));

//  todo ----------- or --------------
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     result[j] ? (result[j] += arr[i][j]) : (result[j] = arr[i][j]);
//   }
// }

// console.log(...result);

//!-------  15_Go9. Количество отрицательных в строке   --------------------
// const arr = [
//   [-1, 0, 1, 0, 1],
//   [2, -2, 0, 2, 2],
//   [0, -2, 2, 0, -2],
//   [1, -1, 8, 1, 1],
//   [-1, 1, 1, 0, 1],
// ];

// let n = 3;
// n--;
// console.log(arr[n].reduce((count, el) => (el < 0 ? ++count : count), 0));

//  todo ----------- or --------------
// let counter = 0;
// for (let i = 0; i < arr[n].length; i++) {
//   if (arr[n][i] < 0) counter++;
// }
// console.log(counter);

//!-------  14_Go9. Положительная сумма  --------------------
// const arr = [
//   [0, 0, 1, 0, 1, 0, 0],
//   [1, 2, 3, -1, -2, -3, -1],
//   [2, 2, 2, -2, -2, -1, -1],
// ];

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
//   if (sum > 0) count++;
// }

// console.log(count);

//!-------  14_Gs. Строка с максимальной суммой   --------------------
// const arr = [
//   [5, 2, 1, 5],
//   [2, 0, 1, 5],
//   [3, 4, 7, 8],
//   [1, 2, 1, 3],
// ];

// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
//   if (!result[1] || result[1] < sum) {
//     result[0] = i;
//     result[1] = sum;
//   }
// }

// console.log(result[0] + 1);
// console.log(...arr[result[0]]);

//!-------  11_Gs. Столбцы   --------------------
// const arr = [
//   [4, 2, 6, 2],
//   [2, 1, 2, 3],
//   [-1, -8, -9, -1],
// ];

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (!result[j] || result[j] < arr[i][j]) {
//       result[j] = arr[i][j];
//     }
//   }
// }

// console.log(...result);

//!-------  15_Gg9. Минимумы по столбцам   --------------------
// const arr = [
//   [1, 4, 7, 5],
//   [1, 3, 7, 5],
//   [2, 3, 2, 1],
//   [6, 7, 8, 9]
// ];

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (!result[j] || result[j] > arr[i][j]) {
//       result[j] = arr[i][j];
//     }
//   }
// }

// console.log(...result);

//!-------  12_Gg9. Матрикс    --------------------
// const arr = [
//   [3, 2, 2],
//   [1, 2, 1],
//   [1, 1, 1],
// ];

// let result = [];
// let m = 1;
// for (let i = 0; i < arr.length; i++) {
//   if (!arr[i].includes(m)) result.push(0);
//   else {
//     result.push(arr[i].reduce((c, el) => (el === m ? ++c : c), 0));
//   }
// }

// console.log(...result);

//!-------  14_Gg9. Сложная задача    --------------------
// const arr = [
//   [4, -5, 6],
//   [1, 2, 3],
//   [-7, -8 - 9],
// ];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i].reduce((s, el) => (el > 0 ? s + el : s), 0);
// }

// console.log(sum);

// !-------  12_Go9. Количество странных чисел 2    --------------------
// const arr = [
//   [3, 2, 2],
//   [1, 2, 1],
//   [1, 1, 1],
// ];

// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(
//     arr[i].reduce((c, el) => (el % 3 === 0 && el % 4 !== 0 ? ++c : c), 0)
//   );
// }

// console.log(...result);

// !-------  14_Gs9. Минимакс    --------------------
// const arr = [
//   [7, 8, 9],
//   [3, 2, 1],
//   [4, 5, 6],
// ];

// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(Math.max(...arr[i]));
// }
// console.log(Math.min(...result));

// !-------  10_Gg. Двумерный массив   --------------------
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
//   let sum = arr[i].reduce((s, el) => s + el, 0);
//   if (sum % 2 === 0) console.log(...arr[i]);
// }

// !-------  13_Go9. Неотрицательные строки  --------------------
// const arr = [
//   [-98, 51, 78, -12],
//   [-73, -2, 86, -26],
//   [-91, -55, 0, 95],
//   [9, 13, 13, -37],
//   [-22, -50, -9, -33],
// ];

// let counter = 0;
// for (let i = 0; i < arr.length; i++) {
//   let sum = arr[i].reduce((s, el) => s + el, 0);
//   if (sum > 0) counter++;
// }
// console.log(counter);

// !-------  11_Gg. Сортировка матрицы   --------------------
// const arr = [
//   [1, 2, 3, 4],
//   [4, 3, 2, 1],
//   [4, 1, 3, 2],
// ];

// for (let i = 0; i < arr.length; i++) {
//   arr[i].sort((a, b) => a - b);
//   console.log(...arr[i]);
// }

