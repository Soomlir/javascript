// 1. Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// const arr = [1, 3, 4, 5, 6, 7, 9];
// const result = arr.map((element) => element * element);
// console.log(result);
// let sum = 0;
// for (let i = 0; i < result.length; i++) {
//   sum += result[i];
// }
// console.log(sum);

// 2. Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// const arr = [9, 25, 100];
// const result = arr.map((element) => Math.sqrt(element));
// let sum = 0;
// for (let i = 0; i < result.length; i++) {
//   sum += result[i];
// }
// console.log(sum);

// 3. Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const arr = [-100, -20, 10, 20];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// 4. Дан массив с числами.
// Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
// const arr = [-10, -4, 0, 3, 4, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0 && arr[i] < 10) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// 5. Дана строка: 'abcde'. Получите массив букв этой строки.
// const string = 'abcde';
// console.log(string.split(''));

// 6. Дано некоторое число: 12345. Получите массив цифр этого числа.
// const num3 = 12345;
// console.log(Array.from(String(num3), Number));

// 7. Дано некоторое число: 12345. Переверните его: 54321
// const num4 = 12345;
// console.log(Array.from(String(num4), Number).reverse())

// 8. Дано некоторое число: 12345. Найдите сумму цифр этого числа.
// const num5 = 12345;
// const numArray = Array.from(String(num5), Number);
// let sum = 0;
// for (let i = 0; i < numArray.length; i++) {
//   sum += numArray[i];
// }
// console.log(sum);

// 9. Заполните массив целыми числами от 1 до 10.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr[i] = i + 1;
// }
// console.log(arr);

// 10. Заполните массив четными числами из промежутка от 1 до 100.
// let arr = [];
// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// 11. Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] 
// Округлите эти дроби до одного знака в дробной части. 
// let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// let result = arr.map((element) => Number(element.toFixed(1)));
// console.log(result);

// 12. Дан массив со строками. Оставьте в этом массиве только те строки,
// которые начинаются на http://
// let arr = [
//   'http://ya.ru',
//   'apple',
//   'http://some.ru',
//   'banana'
// ];

// for (let i = 0; i < arr.length; i++) {
//   if (!arr[i].startsWith('http://')) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// 13. Дан массив со строками. 
// Оставьте в этом массиве только те строки, которые заканчиваются на .html 
// let arr = [
//   'ya.html',
//   'you.html',
//   'potato',
//   'cherry'
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (!arr[i].endsWith('.html')) {
//     arr.splice(i);
//   }
// }
// console.log(arr);

// 14. Дан массив с числами. Увеличьте каждое число из массива на 10 процентов. 
// let arr = [2, 4, 7, 10];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] / 100 * 10 + arr[i];
// }
// console.log(arr)

// 15. Заполните массив случайными числами из промежутка от 1 до 100.
// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr[i] = Math.floor(Math.random() * 100);
// }
// console.log(arr);

// 16. Дано некоторое число: 12345. Выведите в консоль все его символы с конца. 
// let num = 12345;
// num = Array.from(String(num), Number);
// for (let i = num.length; i >= 0; i--) {
//   console.log(num[i]);
// }

// 17. Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива: 
// [1, 2]
// [3, 4]
// [5, 6]
// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i += 2) {
//   let subArray = arr.slice(i, i + 2);
//   console.log(subArray);
// }

// 18. Даны два массива: 
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив: 
// [1, 2, 3, 4, 5, 6]
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// arr1.push(...arr2);
// console.log(arr1);
