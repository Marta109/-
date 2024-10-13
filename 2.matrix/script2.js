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

// let min = arr[0][0],
//   max = arr[0][0];
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
//   let max = arr[i][0];
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
//   [6, 7, 8, 9],
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
//     result.push(arr[i].reduce((c, el) => (el === m ? ++c : c), 0));
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

// todo ------------or ------------
// const arr = [
//   [3, 2, 2],
//   [1, 2, 1],
//   [1, 1, 1],
// ];

// let result = [];
// for (let i = 0; i < arr.length; i++) {

//   result.push())
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

// !-------  11_Go8. Крестики-Нолики   --------------------
// const arr = [
//   ["x", ".", "o"],
//   [".", ".", "."],
//   ["o", ".", "x"],
// ];

// let countX = 0,
//   countY = 0,
//   countZ = 0;

// for (const item of arr) {
//   for (const el of item) {
//     el === "x" ? (++countX ? el === "y" : ++countY) : ++countZ;
//   }
// }

// console.log(
//   countX > countY && countX > countZ
//     ? "RK"
//     : countY > countX && countY > countZ
//     ? "SV"
//     : "VT"
// );

//todo ------------------------ or -----------------------------------
// let dictionary = {};
// for (const item of arr) {
//   for (const el of item) {
//     dictionary[el] = dictionary[el] ? ++dictionary[el] : 1;
//   }
// }
// dictionary = Object.entries(dictionary).sort((a, b) => b[1] - a[1]);

// console.log(
//   dictionary[0] === "x" ? "RK" : dictionary[0] === "Y" ? "SV" : "VT"
// );

// !-------  12_Gg. Квадратные числа   --------------------
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [16, 8, 9],
// ];

// for (const item of arr) {
//   let counter = 0;
//   for (const el of item) {
//     if (Number.isInteger(Math.sqrt(el))) counter++;
//   }
//   console.log(counter);
// }

// !-------  13_Gs9. Строкомаксия    --------------------
// const arr = [
//   [4, 2, 6, 2],
//   [2, 1, 2, 3],
//   [-1, -8, -9, -1],
// ];

// for (const items of arr) {
//   let max = Math.max(...items);
//   let result = [];
//   for (const el of items) {
//     result.push(max + el);
//   }
//   console.log(...result);
// }

// //todo ------------------------ or -----------------------------------

// for (const items of arr) {
//   let max = Math.max(...items);
//   console.log(...items.reduce((r, el) => r.push(el + max) && r, []));
// }

// !-------  10_Gs. Магазины    --------------------
// const arr = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, -1, -1, -1, -1],
//   [2, 1, 1, -1, -1, -1, -1],
// ];

// let counter = 0;
// for (const items of arr) {
//   let sum = items.reduce((s, el) => s + el, 0);
//   if (sum > 0) counter++;
// }

// console.log(counter);

// !-------  15_Gs9. Номер столбца с максимальной суммой  --------------------
// const arr = [
//   [4, 0, 3, 8],
//   [2, 1, 0, 2],
//   [3, 2, 0, 3],
//   [1, 3, 4, 2],
//   [1, 2, 1, 5],
// ];

// let counter = {};
// for (const item of arr) {
//   for (let i = 0; i < item.length; i++) {
//     counter[i + 1]
//       ? (counter[i + 1] += item[i])
//       : (counter[i + 1] = item[i]);
//   }
// }
// counter = Object.entries(counter).sort((a, b) => b[1] - a[1]);
// console.log(counter[0][0]);

// //todo ------------------------ or -----------------------------------
// let maxSum = arr[0][0];
// let index = 1;
// for (let i = 0; i < arr[0].length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr.length; j++) {
//     sum += arr[j][i];
//   }
//   if (sum > maxSum) {
//     maxSum = sum;
//     index = i + 1;
//   }
// }
// console.log(index);

// !-------  13_Gg. Сумма в треугольнике  --------------------
// const arr = [
//   [0, 0, 2, 0, 0],
//   [1, 0, 2, 0, 1],
//   [3, 0, 3, 0, 3],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
// ];

// let sum = 0;
// for (let i = 0; i < arr.length / 2; i++) {
//   for (let j = i + 1; j < arr.length - i - 1; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);

// !-------  10_Gs8. Замечательная игра   --------------------
// const arr = [
//   [0, 1, 2, 3, 4, 5, 6],
//   [7, 7, 7, 7, 7, 7, 7],
//   [0, 1, 2, 3, 3, 2, 10],
// ];

// for (const el of arr) {
//   let result = el.reduce((s, el) => (el > 3 ? s + el : s), 0);
//   if (result > 0) console.log(result);
// }

// !-------  10_Gg8. Пересчитал   --------------------
// const arr = [
//   [1, 0, 3, 2, 3],
//   [3, 2, 0, 2, 3],
//   [0, 1, 0, 3, 1],
//   [0, 0, 2, 3, 0],
//   [3, 3, 3, 3, 1],
// ];

// let result = [];
// for (let i = 0; i < arr[0].length; i++) {
//   let counter = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j][i] === 0) counter++;
//   }
//   result.push(counter);
// }
// console.log(...result);

// !-------  11_Gs8o. Квадратная клумба   --------------------
// const arr = [
//   [3, 9, 9, 9, 9],
//   [2, 5, 1, 4, 9],
//   [1, 9, 9, 3, 9],
//   [3, 9, 9, 9, 1],
// ];

// let l = 4,
//   i0 = 1,
//   j0 = 2;

// i0--;
// j0--;

// let isNotNineCount = 0;

// for (let i = i0; i < l; i++) {
//   for (let j = j0; j <= l; j++) {
//     if (i === i0 || i === l - 1 || j === j0 || j === l) {
//       if (arr[i][j] !== 9) isNotNineCount++;
//     }
//   }
// }

// console.log(
//   isNotNineCount > 0 ? `No ${isNotNineCount}` : `Yes ${4 * (l - 1)}`
// );

// !-------  13_Gs. Транспонирование    --------------------
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = arr[0].length - 1; i >= 0; i--) {
//   let result = [];
//   for (let j = 0; j < arr.length; j++) {
//     result.push(arr[j][i]);
//   }
//   console.log(...result);
// }

// !-------  16_Go9. Локальные минимумы    --------------------
// const arr = [
//   [2, 3, 4, 5, 7],
//   [7, 1, 8, 9, 10],
//   [8, 1, 3, 2, 8],
//   [9, 9, 9, 9, 9],
// ];

// let count = 0;
// for (const el of arr) {
//   let min = Math.min(...el);
//   if (min !== el[0] || min !== el[el.length - 1]) count++;
// }

// console.log(count);

// !-------  10_Go8. Махшаты    --------------------
// const arr = [
//   [1, 3],
//   [5, 2],
// ];
// let sum1 = 0,
//   sum2 = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if ((i + j) % 2 === 0) sum1 += arr[i][j];
//     else sum2 += arr[i][j];
//   }
// }
// console.log(Math.min(sum1, sum2));

// !-------  10_Go8з. Дартс New Edition     --------------------
// const arr = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 8, 1],
//   [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// ];

// const sums = [0, 0, 0, 0];

// const dividerX = arr.length / 2;
// const dividerY = arr[0].length / 2;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (i < dividerX) {
//       if (j < dividerY) {
//         sums[0] += arr[i][j];
//       } else sums[1] += arr[i][j];
//     } else {
//       if (j < dividerY) {
//         sums[2] += arr[i][j];
//       } else sums[3] += arr[i][j];
//     }
//   }
// }
// let value = Math.max(...sums);
// console.log(sums.indexOf(value) + 1);

// !------- 15_Gs. Спираль      --------------------
// const steps = ["right", "down", "left", "up"];
// let n = 4;
// // let n = 3;
// const arr = Array(n)
//   .fill("")
//   .map(() => Array(n).fill("0"));

// let el = 1;
// let step = 0;
// let i = 0;
// let j = 0;
// while (el <= n ** 2) {
//   if (step >= n) step = 0;

//   if (steps[step] === "right") {
//     if (j < n && arr[i][j] === "0") {
//       arr[i][j] = el;
//       el++;
//       j++;
//     } else {
//       step++;
//       i++;
//       j--;
//     }
//   } else if (steps[step] === "down") {
//     if (i < n && arr[i][j] === "0") {
//       arr[i][j] = el;
//       el++;
//       i++;
//     } else {
//       step++;
//       i--;
//       j--;
//     }
//   } else if (steps[step] === "left") {
//     if (j >= 0 && arr[i][j] === "0") {
//       arr[i][j] = el;
//       el++;
//       j--;
//     } else {
//       step++;
//       i--;
//       j++;
//     }
//   } else if (steps[step] === "up") {
//     if (i > 0 && arr[i][j] === "0") {
//       arr[i][j] = el;
//       el++;
//       i--;
//     } else {
//       step++;
//       i++;
//       j++;
//     }
//   }
// }

// console.log("n=", n);
// console.log(arr);

// 1  2  3  4
// 12 13 14  5
// 11 16 15  6
// 10  9  8  7

// -----or----
// 1  2  3
// 8  9  4
// 7  6  5

// !------- 12_Gs9. Квадрики --------------------
// const arr = [
//   [4, 2, 6, 2],
//   [2, 1, 2, 3],
//   [-1, -8, -9, -1],
// ];

// let count = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr[i].length - 1; j++) {
//     let a = arr[i][j] !== arr[i][j + 1];
//     let b = arr[i + 1][j] !== arr[i + 1][j + 1];

//     let c = arr[i + 1].indexOf(arr[i][j], j) === -1;
//     let d = arr[i + 1].indexOf(arr[i][j + 1], j) === -1;
//     if (a && b && c && d) count++;
//   }
// }
// console.log(count);

// !------- 16_Gs9. Наилучший подквадрат  --------------------
// const arr = [
//   [5, 6, 7, 4, 6],
//   [7, 7, 8, 6, 5],
//   [9, 9, 8, 3, 5],
//   [8, 8, 7, 6, 4],
//   [4, 5, 2, 4, 5],
//   [3, 4, 2, 3, 4],
// ];

// let maxSum = 0;
// let index = "";
// for (let i = 0; i < arr.length - 3; i++) {
//   for (let j = 0; j < arr[i].length - 3; j++) {
//     let column = i;
//     let sum = 0;
//     loop: while (column < i + 3) {
//       for (let row = j; row < j + 3; row++) {
//         if (
//           !arr[column][row] &&
//           column === arr.length &&
//           row === arr[i].length
//         ) {
//           sum = 0;
//           break loop;
//         } else {
//           sum += arr[column][row];
//         }
//       }
//       column++;
//     }
//     if (sum > maxSum) {
//       maxSum = sum;
//       index = `\n${i + 1} ${j + 1}`;
//     }
//   }
// }

// console.log(maxSum, index);

// !------- 11_Gs8o. Reverse 2D, упрощенная  --------------------
//  example *******1
// const arr = [
//   [1, 2, 3, 4, 5, 21],
//   [20, 7, 8, 9, 10, 22],
//   [19, 6, 1, 2, 11, 23],
//   [18, 5, 4, 3, 12, 24],
//   [17, 16, 15, 14, 13, 25],
// ];

// const steps = [
//   ['H', 2, 2, 4, 5],
//   ['V', 1, 3, 5, 5],
// ];

// example ******2
// const arr = [
//   [1, 3, 2, 1],
//   [4, 1, 5, 2],
//   [7, 4, 9, 3],
//   [6, 5, 1, 8],
//   [8, 2, 7, 3],
// ];
// const steps = [
//   ['H', 1, 1, 1, 1],
//   ['V', 4, 4, 5, 4],
//   ['H', 1, 2, 4, 4],
//   ['V', 1, 2, 5, 3],
//   ['H', 3, 1, 5, 4],
//   ['H', 2, 3, 3, 5],
// ];

// for (const el of steps) {
//   let [operation, i0, j0, i1, j1] = el;
//   i0--, j0--, i1--, j1--;

//   if (operation === 'H') {
//     for (let i = i0; i <= i1; i++) {
//       for (let j = j0; j <= (j1 + j0) / 2; j++) {
//         if (arr[i][j] && arr[i][j1 - (j - j0)]) {
//           [arr[i][j], arr[i][j1 - (j - j0)]] = [
//             arr[i][j1 - (j - j0)],
//             arr[i][j],
//           ];
//         }
//       }
//     }
//   } else {
//     for (let j = j0; j <= j1; j++) {
//       for (let i = i0; i <= (i0 + i1) / 2; i++) {
//         if (arr[i][j] && arr[i1 - (i - i0)][j]) {
//           [arr[i][j], arr[i1 - (i - i0)][j]] = [
//             arr[i1 - (i - i0)][j],
//             arr[i][j],
//           ];
//         }
//       }
//     }
//   }
// }

// console.log(arr);

// 1 2 15 14 13 21
// 20 10 3 4 5 22   //result for 1
// 19 11 2 1 6 23
// 18 12 9 8 7 24
// 17 16 3 4 5 25

// 1 2 7 3
// 4 3 1 1
// 4 9 7 3   //result for 2
// 5 5 2 6
// 8 2 1 8
