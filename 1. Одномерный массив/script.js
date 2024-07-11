//!-------  16_Gg. Неровный забор-2   --------------------
// const f = (arr) => {
//   if (arr.length !== n || !arr || !Array.isArray(arr)) return false;

//   let counter = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] + 10 < arr[i]) counter++;
//   }

//   return counter;
// };

// console.log(f([15, 30, 25, 30, 40, 29, 21])); //1

//!-------  16_Gs. Граница слева, граница справа   --------------------
// const f = (arr) => {
//   if (arr.length === 0 || !arr || !Array.isArray(arr)) return false;

//   const result = {};

//   for (const el of arr) {
//     result[el] = [el, arr.indexOf(el) + 1, arr.lastIndexOf(el) + 1];
//   }

//   return Object.values(result);
// };

// console.log(f([3, 0, 1, 0]));
// 0 2 4
// 1 3 3
// 3 1 1

//!-------  16_Go9. Переключаем лампочки   --------------------
// const f = (k) => {
//   const startArr = [0, 0, 0, 0];
//   const result = [];
//   for (const arr of k) {
//     if (arr[0] === 0) {
//       for (let i = arr[1]; i <= arr[2]; i++) {
//         startArr[i-1] = startArr[i-1] === 0 ? "*" : 0;
//       }
//     } else {
//       let counter = 0;
//       for (let i = arr[1]; i <= arr[2]; i++) {
//         if (startArr[i-1] === "*") counter++;
//       }
//       if (counter > 0) {
//         result.push(counter);
//       }
//     }
//     console.log(startArr);
//   }
//   return result;
// };
// console.log(
//   f([
//     [0, 1, 2],
//     [0, 2, 4],
//     [1, 2, 3],
//     [0, 2, 4],
//     [1, 1, 4],
//   ])
// ); // 1,2

//!-------  16_Gg9. Локальные максимумы   --------------------
// const localMax = (n, arr) => {
//   if (arr.length !== n || !arr || !Array.isArray(arr)) return false;

//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0 && arr[i] >= arr[i + 1]) {
//       result.push(i + 1);
//     } else if (i === arr.length - 1 && arr[i] >= arr[i - 1]) {
//       result.push(i + 1);
//     } else if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
//       result.push(i + 1);
//     }
//   }
//   return result;
// };

// console.log(localMax(9, [1, 2, 5, 4, 3, 3, 6, 6, 2])); // 3,7,8

//!-------  16_Gs9. Различные числа   --------------------
// const deferentNum = (n, arr) => {
//   if (arr.length !== n || !arr || !Array.isArray(arr)) return false;

//   const result = [];

//   for (const el of arr) {
//     result.includes(el) ? "" : result.push(el);
//   }

//   return {
//     length: result.length,
//     result,
//   };
// };

// console.log(deferentNum(4, [3, 0, 6, 0])); // 3, [3,0,6]

//!-------  15_Gg - Условно минимальный   --------------------
// const returnMin = (n, k) => {
//     let arr = [];
//     let flag = true;
//     let index = 0;
//     for (let i = 1; i <= n; i++) {
//       arr.push(i);
//       if (i > k && flag) {
//         flag = false;
//         index = i - 1;
//       }
//     }
//     return {n, k, arr, index};
//   };
// console.log(returnMin(4, 2)); //2

//!------- 15_Gs. Квадраты средних  --------------------
// const f = (n) => {
//   if ((n + "").length !== 4 || !n) return false;

//   let arr = [n];
//   for (let i = 0; i < arr.length; i++) {
//     let str = arr[i] + "";
//     let newNumber =
//       str.length === 4
//         ? str[1] + str[2]
//         : str.length === 3
//         ? str[0] + str[1]
//         : str[0];
//     let pow = Number(newNumber) ** 2;
//     if (!arr.includes(pow)) {
//       arr.push(pow);
//     } else {
//       return arr.length;
//     }
//   }

//   return arr.length;
// };

// console.log(f(7339)); //6
// console.log(f(2245)); //3

//!------- 15_Go9. Удвоенная сумма положительных чисел  --------------------
// const doubleSum = (arr) => {
//   let sum = 0;
//   for (let i of arr) {
//     if (i > 0) {
//       sum += i;
//     }
//   }
//   return sum * 2;
// };

// console.log(doubleSum([-3, 5, -10, 8, -2]));

//! **********   15_Gg9. Разность суммы и минимума ***************************************
// const f = (arr) => {
//   if (!arr || !Array.isArray(arr) || arr.length === 0) return false;

//   let sum = arr.reduce((sum, el) => sum + el, 0);
//   let min = Math.min(...arr);

//   return sum - min;
// };

// console.log(f([1, 100])); //100
// console.log(f([4, 2, 5, 7])); //16
// console.log(f([9, 12, 8, 10, 11, 20, 15])); //77

//! **********   15_Gs9. Лучшие тройки ***************************************
// const f = (arr1, arr2) => {
//   if (
//     !Array.isArray(arr1) ||
//     !Array.isArray(arr2) ||
//     arr1.length === 0 ||
//     arr2.length === 0 ||
//     arr1.length !== arr2.length;
//   )
//     return false;

//   let result = {};

//   for (let i = 0; i < arr2.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr2[i].length; j++) {
//       sum += arr2[i][j] * arr1[j];
//     }
//     result[i+1] = sum;
//   }

//   result = Object.entries(result);
//   result.sort((a, b) => b[1] - a[1]);
//   console.log(result);
//   return [result[0][0], result[1][0], result[2][0]];
// };

// console.log(
//   f(
//     [10, 10, 10],
//     [
//       [1, 1, 1],
//       [10, 1, 1],
//       [1, 10, 1],
//       [1, 1, 10],
//     ]
//   )
// ); // 2,3,4

// console.log(
//   f(
//     [2, 3, 2],
//     [
//       [3, 1, 4],
//       [5, 1, 1],
//       [2, 3, 2],
//       [3, 2, 3],
//       [2, 3, 2],
//       [1, 4, 1],
//     ]
//   )
// ); // 3,5,4
// console.log(
//   f(
//     [5, 3, 4],
//     [
//       [2, 7, 12],
//       [13, 10, 15],
//       [6, 7, 5],
//       [1, 1, 20],
//       [8, 2, 14],
//       [3, 21, 4],
//       [7, 9, 8],
//     ]
//   )
// ); // 7,2,5

//! **********   14_Gg - Разность максимума и минимума ***************************************
// const maxMin = (arr) => {
//   if (!arr || arr.length === 0) return false;
//   return Math.max(...arr) - Math.min(...arr);
// };
// console.log(maxMin([2, 7])); //5
// console.log(maxMin([4, 2, 7, 9, 5])); //7
// console.log(maxMin([3, 3, 3, 3])); //0

//!------- 14_Gs. Минимум интервалов -------------------------
// const f = (arr) => {
//   if (!arr || arr.length === 0 || !Array.isArray(arr)) return false;

//   const collection = {
//     zero: 0,
//     one: 0,
//   };

//   let car = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (car !== arr[i]) {
//       car === 0
//         ? (collection.zero = collection.zero + 1)
//         : (collection.one = collection.one + 1);
//       car = car === 0 ? 1 : 0;
//     }
//   }

//   car === 0
//     ? (collection.zero = collection.zero + 1)
//     : (collection.one = collection.one + 1);

//   return Math.min(...Object.values(collection));
// };

// console.log(f([1, 1, 1, 1, 1])); //0
// console.log(f([0, 1, 1, 0, 0, 1])); //2
// console.log(f([1, 0, 1, 0, 1, 0, 0])); //3

//!------- 14_Go9. Решето -------------------------
// const f = (n, k, arr) => {
//   if (!arr || arr.length !== n || !k || !Array.isArray(arr)) return false;
//   return arr.filter((el) => el >= k);
// };

// console.log(
//   f(
//     20,
//     32,
//     [
//       50, 54, 71, 43, 26, 8, 11, 92, 16, 93, 31, 4, 8, 47, 75, 36, 22, 95,
//       79, 100,
//     ]
//   )
// ); //[50 54 71 43 92 93 47 75 36 95 79 100]
//!------- 14_Gg9. Сумма произведений -------------------------
// const returnSum = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   let sum = 0;
//   let end = arr.length / 2;
//   let j = arr.length - 1;
//   for (let i = 0; i < end; i++) {
//     sum += arr[i] * arr[j];
//     j--;
//   }
//   return sum;
// };

// console.log(returnSum([-42, -61, 6, -48, -83, 49, 61, 95, 93, 92]));

//!------- 14_Gs9. Наибольшая сумма --------------------
// let f = (arr) => {
//   if (!arr || arr.length === 0 || !Array.isArray(arr)) return false;

//   let max1 = Math.max(...arr);
//   let max1Index = arr.indexOf(max1);
//   arr[max1Index] = 0;
//   let max2 = Math.max(...arr);
//   return max1 + max2;
// };

// console.log(f([5, 0, 31, 861, 202, 272])); //1133

//todo ------------- or -----------------
// let f = (arr) => {
//   if (!arr || arr.length === 0 || !Array.isArray(arr)) return false;

//   arr.sort((a, b) => b - a);
//   return arr[0] + arr[1];
// };

// console.log(f([5, 0, 31, 861, 202, 272])); //1133

//!------- 13_Gg. Расстояния в массиве --------------------
// const minMaxDistance = (n, arr) => {
//   if (!arr || arr.length < n || arr.length > n) return false;
//   const minVal = Math.min(...arr);
//   const maxVal = Math.max(...arr);
//   const minIndex = arr.indexOf(minVal);
//   const maxIndex = arr.indexOf(maxVal);
//   let result = maxIndex - minIndex - 1;
//   return result > 0 ? result : result * -1;
// };
// console.log(minMaxDistance(10, [3, 2, 1, 4, 5, 6, 7, 10, 8, 9])); // 4

//!------- 13_Gs. Веселые Массивы -------------------------
// const funArr = (n, arr) => {
//   if (!arr || arr.length != n) return false;

//   let min = Math.min(...arr);
//   let max = Math.max(...arr);

//   return arr.map((el) => {
//     return el % 2 === 0 ? el + max : el - min;
//   });
// };

// console.log(funArr(5, [1, 2, 3, 4, 5]));

//todo ------------- or -----------------
// const funArr2 = (n, arr) => {
//   if (!arr || arr.length != n) return false;

//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   const result = [];
//   for (let el of arr) {
//     el = el % 2 === 0 ? el + max : el - min;
//     result.push(el);
//   }

//   return result;
// };

// console.log(funArr2(5, [1, 2, 3, 4, 5]));

//todo ------------- or -----------------
// const funArr3 = (n, arr) => {
//   if (!arr || arr.length != n) return false;

//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   const result = [];

//   return arr.reduce((result, current) => {
//     current = current % 2 === 0 ? current + max : current - min;
//     result.push(current);
//     return result;
//   }, []);
// };

// console.log(funArr3(5, [1, 2, 3, 4, 5]));

//! ******************** 13_Go9. Сумма N ***************************************
// const f = (arr, k) => {
//   if (!arr || !k || arr.length === 0 || !Array.isArray(arr) || k <= 0)
//     return false;
//   let sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += arr[i] < k ? arr[i] : 0;
//   }
//   return sum;
// };

// console.log(f([1, 4, 3, 3], 4)); //7

//todo ------------- or -----------------
// const f = (arr, k) => {
//   if (!arr || !k || arr.length === 0 || !Array.isArray(arr) || k <= 0)
//     return false;

//   arr = arr.filter((el) => el < k);
//   return arr.reduce((sum, el) => sum + el, 0);
// };

// console.log(f([1, 4, 3, 3], 4)); //7

//! ******************** 13_Gg9. Сумма K ***************************************
// const f = (arr, k) => {
//   if (!arr || !k || arr.length === 0 || !Array.isArray(arr) || k <= 0)
//     return false;
//   let sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(f([4, 3, 5, 6, 99], 2)); //7

//! ******************** 13_Gs9. Кучка монет ***************************************
// const BunchOfCoins = (arr) => {
//   if (!arr || arr.length === 0) return false;
//   n.sort((a, b) => b - a);
//   return n[0] + n[1] + n[2];
// };

// console.log(BunchOfCoins([9, 2, 1, 6, 2, 7, 1, 6, 9, 7]));

//! ******************** 12_Gg. Послежинки ***************************************
// const poslejniki = (arr) => {
//   if (!arr || arr.length < 10) return false;

//   return arr.reduce((sum, el) => (sum += el > 5 ? el : 0), 0);
// };
// console.log(poslejniki([2, 4, 7, 9, 1, 4, 5, 1, 8, 2]));

// todo------------------_or_------------------
// const poslejniki2 = (...arr) => {
//   if (!arr || arr.length < 10) return false;
//   let sum = 0;
//   for (const el of arr) {
//     if (el > 5) sum += el;
//   }
//   return sum;
// };
// console.log(poslejniki2(2, 4, 7, 9, 1, 4, 5, 1, 8, 2));

// todo------------------_or_------------------
// const poslejniki3 = (...arr) => {
//   if (!arr || arr.length < 10) return false;
//   let sum = 0;
//   arr.forEach((el) => (sum += el > 5 ? el : 0));
//   return sum;
// };
// console.log(poslejniki3(2, 4, 7, 9, 1, 4, 5, 1, 8, 2));

//! ******************** 12_Gs - Круглые числа ***************************************
// const roundNumber = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   return arr.filter((el) => el % 100 === 0).length;
// };
// console.log(roundNumber([1, 200, 3, 400, 500, 600, 7, 8, 9, 1000]));

// todo------------------_or_------------------
// const roundNumber2 = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let counter = 0;
//   for (const el of arr) {
//     if (el % 100 === 0) counter++;
//   }
//   return counter;
// };
// console.log(roundNumber2([1, 200, 3, 400, 500, 600, 7, 8, 9, 1000]));

// todo------------------_or_------------------
// const roundNumber3 = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let counter = 0;
//   arr.forEach((el) => {
//     if (el % 100 === 0) counter++;
//   });
//   return counter;
// };
// console.log(roundNumber3([1, 200, 3, 400, 500, 600, 7, 8, 9, 1000]));

//! ********** 12_Go9. SumMax ***************************************
// const maxSum = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let max = Math.max(...arr);
//   let maxCount = arr.filter((num) => num === max).length;
//   return max * maxCount;
// };
// console.log(maxSum([9, 2, 1, 6, 2, 7, 1, 6, 9, 7])); //18

// todo------------------_or_------------------
// const maxSum2 = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let max = Math.max(...arr);
//   let sum = 0;
//   for (const el of arr) {
//     if (el === max) sum += el;
//   }
//   return sum;
// };
// console.log(maxSum2([9, 2, 1, 6, 2, 7, 1, 6, 9, 7]));

// todo------------------_or_------------------
// const maxSum3 = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let max = Math.max(...arr);
//   return arr.reduce((sum, el) => (el === max ? sum + el :sum + 0), 0);
// };
// console.log(maxSum3([9, 2, 1, 6, 2, 7, 1, 6, 9, 7]));

//! **********  12_Gg9 - Максимально четный***************************************
// const maxEvenNumber = (arr) => {
//   if (!arr || arr.length === 0) return false;
//   let flag = false;
//   while (!flag) {
//     let max = Math.max(...arr);
//     if (max % 2 == 0) return max;
//     let index = arr.indexOf(max);
//     arr[index] = 0;
//     if (max === 0) return false;
//   }
// };
// console.log(maxEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 11, 10])); //10

//! ********** 12_Gs9. Количество странных чисел  ***************************************
// const returnStrangeNumbers = (arr) => {
//   if (!arr || arr.length === 0) return false;
//   return arr.reduce((counter, el) => {
//     if (el % 3 == 0 && el % 4 != 0) counter++;
//     return counter;
//   }, 0);
// };
// console.log(returnStrangeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 11, 10])); //2

// todo------------------_or_------------------
// const returnStrangeNumbers2 = (arr) => {
//   if (!arr || arr.length === 0) return false;
//   let counter = 0;
//   arr.forEach((el) => {
//     if (el % 3 == 0 && el % 4 != 0) counter++;
//   });
//   return counter;
// };
// console.log(returnStrangeNumbers2([1, 2, 3, 4, 5, 6, 7, 8, 11, 10]));

// todo------------------_or_------------------
// const returnStrangeNumbers3 = (arr) => {
//   if (!arr || arr.length === 0) return false;
//   let counter = 0;
//   for (const el of arr) {
//     counter += el % 3 == 0 && el % 4 != 0 ? 1 : 0;
//   }
//   return counter;
// };
// console.log(returnStrangeNumbers3([1, 2, 3, 4, 5, 6, 7, 8, 11, 10]));

//! ******************** 11_Gg. Положительные эмоции ***************************************
// const positiveEmotionsNumber = (arr) => {
//   if (!arr || arr.length === 0) return false;
//   return arr.filter((el) => el > 0).length;
// };
// console.log(positiveEmotionsNumber([3, 4, -2, 5, -10, 2, 3, -1, -1, 45]));

// todo------------------_or_------------------
// const positiveEmotionsNumber2 = (arr) => {
//   const dayArr = [];
//   for (let day = 0; day < 10; day++) {
//     let randomDay = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
//     dayArr.push(randomDay);
//   }
//   return dayArr.filter((el) => el > 0).length;
// };
// console.log(positiveEmotionsNumber2());

// todo------------------_or_------------------
// const positiveEmotionsNumber3 = (arr) => {
//   if (!arr || arr.length === 0) return false;
//   let counter = 0;
//   for (const i of arr) {
//     counter += i > 0 ? 1 : 0;
//   }
//   return counter;
// };
// console.log(positiveEmotionsNumber3([1, -1, 5, 10 - 45 - 7, 0, 8, 9, 10, 8]));

//! **********  11_Gs. Подарки  ***************************************
// const presents = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);

//   let minCount = arr.filter((num) => num === min).length;
//   let maxCount = arr.filter((num) => num === max).length;
//   return {minCount, maxCount, all: minCount + maxCount};
// };
// console.log(presents([9, 2, 1, 6, 2, 7, 1, 6, 8, 7])); //3

// todo------------------_or_------------------
// const presents2 = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);

//   let minCount = 0;
//   let maxCount = 0;

//   arr.forEach((num) => {
//     if (num === min) minCount++;
//     if (num === max) maxCount++;
//   });

//   return {minCount, maxCount, all: minCount + maxCount};
// };
// console.log(presents2([9, 2, 1, 6, 2, 7, 1, 6, 8, 7])); //3

// todo------------------_or_------------------
// const presents3 = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);

//   let minCount = 0;
//   let maxCount = 0;

//   for (const num of arr) {
//     if (num === min) minCount++;
//     if (num === max) maxCount++;
//   }

//   return {minCount, maxCount, all: minCount + maxCount};
// };
// console.log(presents3([9, 2, 1, 6, 2, 7, 1, 6, 8, 7])); //3

//! **********  11_Gs8o. Различные числа ***************************************
// const f = (n, arr) => {
//   if (!arr || !Array.isArray(arr) || arr.length !== n) return false;

//   const collection = {};
//   for (const el of arr) {
//     collection[el] = collection[el] ? collection[el] + 1 : 1;
//   }

//   return {length: Object.keys(collection).length, collection};
// };

// console.log(f(4, [3, 0, 6, 0])); //3, {3:1,0:2,6:1}

//! **********  11_Go8. Самый - самый ***************************************
// const returnMinIndex = (arr) => {
//   if (!arr || !Array.isArray(arr) || arr.length === 0) return false;

//   let min = Math.min(...arr);
//   return arr.lastIndexOf(min) + 1;
// };

// console.log(returnMinIndex([3, 4, 2, 5, 10, 2, 3, 1, 1, 45])); //9

//! **********  11_Gg8. Подсчёт-Пересчёт ***************************************
// const countingRecounting = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let num = 8 % 3;
//   return arr.filter((el) => el === num).length;
// };
// console.log(countingRecounting([3, 4, 2, 5, 10, 2, 3, 1, 1, 45])); //2

// todo------------------_or_------------------
// const countingRecounting2 = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let num = 8 % 3;
//   return arr.reduce(
//     (counter, el) => (el === num ? counter + 1 : counter + 0),
//     0
//   );
// };
// console.log(countingRecounting2([3, 4, 2, 5, 10, 2, 3, 1, 1, 45]));

// todo------------------_or_------------------
// const countingRecounting3 = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let counter = 0;
//   let num = 8 % 3;
//   arr.forEach((el) => {
//     if (el === num) counter++;
//   });
//   return counter;
// };
// console.log(countingRecounting3([3, 4, 2, 5, 10, 2, 3, 1, 1, 45]));

//! ******************** 11_Gs8. Min+Max ***************************************
// const maxMinSum = (...arr) => {
//   if (!arr || arr.length < 10) return false;
//   return Math.max(...arr) + Math.min(...arr);
// };
// console.log(maxMinSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// todo------------------_or_------------------
// const maxMinSum2 = (...arr) => {
//   if (!arr || arr.length < 10) return false;
//   let max = -Infinity;
//   let min = +Infinity;
//   for (const el of arr) {
//     if (el > max) max = el;
//     if (el < min) min = el;
//   }
//   return max + min;
// };
// console.log(maxMinSum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// todo------------------_or_------------------
// const maxMinSum3 = (arr) => {
//   if (!arr || arr.length < 10) return false;
//   let max = -Infinity;
//   let min = +Infinity;
//   arr.forEach((el) => {
//     if (el > max) max = el;
//     if (el < min) min = el;
//   });
//   return max + min;
// };
// console.log(maxMinSum3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//!------- 10_Gg. Пары Весельчака -------------------------
// const f = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   let sum = 0;
//   let end = arr.length / 2;
//   let j = arr.length - 1;
//   for (let i = 0; i < end; i++) {
//     sum += arr[i] * arr[j];
//     j--;
//   }
//   return sum;
// };

// console.log(f([-98, 64, -65, -90, 95, -42, -84, 11, -34, 4])); //287

//!------- 10_Gs. Квадрат Шутника -------------------------
// const f = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   arr = arr.filter((el) => el < 0);

//   let min = Math.max(...arr);
//   if (min >= 0) return false;

//   return min ** 2;
// };

// console.log(f([3, 4, 2, 5, -10, 2, -3, -2, 1, 45])); //4

//!------- 10_Go8. Хитрое сложение -------------------------
// const additionTricky = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   return arr.reduce((sum, el, i) => {
//     return (sum += i % 3 === 0 && i >= 3 ? el : 0);
//   }, 0);
// };

// console.log(additionTricky([7, 1, 2, 3, 4, 5, 6, 7]));

//todo ------------- or -----------------
// const additionTricky2 = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   let sum = 0;
//   arr.forEach((el, i) => {
//     sum += i % 3 === 0 && i >= 3 ? el : 0;
//   });
//   return sum;
// };

// console.log(additionTricky2([7, 1, 2, 3, 4, 5, 6, 7]));

//todo ------------- or -----------------
// const additionTricky3 = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += i % 3 === 0 && i >= 3 ? arr[i] : 0;
//   }
//   return sum;
// };

// console.log(additionTricky3([7, 1, 2, 3, 4, 5, 6, 7]));

//!------- 10_Go8з. Дендик -------------------------
// const dendik = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   return arr.reduce((sum, el, i) => sum + el * 8 ** i, 0);
// };

// console.log(dendik([1, 1, 0, 0, 0])); //9

//todo ------------- or -----------------

// const dendik2 = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   arr = arr.reverse().join("");
//   return parseInt(arr, 8);
// };

// console.log(dendik2([1, 1, 0, 0, 0]));

//!------- 10_Gg8. Шарики -------------------------
// const balls = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   let max1 = Math.max(...arr);
//   let max1Index = arr.indexOf(max1);
//   arr[max1Index] = 0;
//   let max2 = Math.max(...arr);
//   return max1 + max2;
// };

// console.log(balls([5, 1, 6, 3, 4, 5])); //11

//!------- 10_Gs8. Считака -------------------------
// const recital = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   let min = Math.min(...arr);
//   let sum = arr.reduce((sum, el) => sum + el, 0);
//   return sum - min;
// };

// console.log(recital([5, 8, 1, 4, 7, 4, 1, 8]));

//todo ------------- or -----------------
// const recital2 = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   let min = Math.min(...arr);
//   let sum = 0;
//   arr.forEach((el) => (sum += el));
//   return sum - min;
// };

// console.log(recital2([5, 8, 1, 4, 7, 4, 1, 8]));

//todo ------------- or -----------------
// const recital3 = (arr) => {
//   if (!arr || arr.length === 0) return false;

//   let min = Math.min(...arr);
//   let sum = 0;
//   for (const el of arr) {
//     sum += el;
//   }
//   return sum - min;
// };

// console.log(recital3([5, 8, 1, 4, 7, 4, 1, 8]));
