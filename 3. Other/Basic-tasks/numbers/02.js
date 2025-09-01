// 1. Даны числа, разделенные запятыми: 
// '12,34,56'
const numbers = '12,34,56';
const result = numbers.split(',').reduce((acc, item) => acc + parseInt(item), 0);
console.log(result)

// 2. Дано число. Выведите в консоль количество четных цифр в этом числе. 
const num = 123456;
let result2 = num.toString();
let count = 0;

for (let i = 0; i < result2.length; i++) {
  if (parseInt(result2[i]) % 2 === 0) {
    count++;
  }
}
console.log(count);

// 3. Дана некоторая строка с числом: 
// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: 
// '1 234 567'
const num2 = '1234567';
let result3 = '';
const calcString = num2.split('').reverse().map((item, index) => {
  if ((index + 1) % 3 === 0 && index !== num2.length - 1) {
    result3 = ' ' + item + result3;
  } else {
    result3 = item + result3;
  }
});
console.log(result3);

// 4. Дано некоторое число, например, такое: 
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 
// 28
const num3 = 123789;
let resultNum = num3.toString().split('').filter((item) => {
  if (parseInt(item) % 2 === 0) {
    return true; // Оставляем только четные цифры
  }
  return false; // Фильтруем нечетные цифры
});

resultNum = parseInt(resultNum.join('')); // Преобразуем массив обратно в число
console.log(resultNum);

// 5. Дано некоторое число: 
// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 
// 12 + 34 + 56
const num4 = 123456;
let num4Arr = num4.toString().split('');
let resultArr = []
for (let i = 0; i < num4Arr.length; i += 2) {
  resultArr.push(num4Arr[i].toString() + num4Arr[i + 1]); 
}
const resultSum = resultArr.reduce((acc, element) => {
  return acc += parseInt(element);
}, 0);
console.log(resultSum);

// 6. Дано число. Получите первую четную цифру с конца этого числа. 
const num5 = 1234;
const result13 = num5.toString().split('');
let numSearch = null;

for (let i = result13.length - 1; i >= 0; i--) {
  if (!isNaN(parseInt(result13[i])) && parseInt(result13[i]) % 2 === 0) {
    numSearch = parseInt(result13[i]);
    break; // Найдя первую четную цифру, можно завершить цикл
  }
}

console.log(numSearch); // Выведет 4
