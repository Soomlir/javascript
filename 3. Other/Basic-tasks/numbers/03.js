// 1. Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
// const num = 12345;
// const resultArr = String(num).split("");

// const checkup = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] >= arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkup(resultArr));

// 2. Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
// for (let i = 10; i <= 1000; i++) {
//   // Получаем предпоследнюю цифру числа
//   let secondLastDigit = Math.floor((i % 100) / 10);

//   // Проверяем, является ли предпоследняя цифра четной
//   if (secondLastDigit % 2 === 0) {
//       console.log(i);
//   }
// }

// 3. Дана некоторая переменная с числом:
// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// '00000'
// let num = 5;
// let resultStr = ''
// for (let i = 1; i <= num; i++) {
//   resultStr += '0';
// }
// console.log(resultStr);

// 4. Дано некоторое число:
// 1357
// Проверьте, что все цифры этого числа являются нечетными.
// const num = 1357;
// const result = String(num).split("");

// const checkOdd = (arr) => {
//   for (let item of arr) {
//     if (item % 2 == 0) {
//       return false
//     }
//   }
//   return true;
// };
// console.log(checkOdd(result));

// 5. Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная. 
for (let i = 10; i < 1000; i++) {
  const firstDigit = Math.floor(i / 10 ** (String(i).length - 1)); // Получаем первую цифру
  if (firstDigit % 2 === 0) { // Проверяем, четная ли первая цифра
      console.log(i);
  }
}

