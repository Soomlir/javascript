// 1. Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
for (let i = 10; i < 1000; i++) {
  const firstDigit = Math.floor(i / 10);
  const secondDigit = i % 10;
  if (firstDigit + secondDigit === 5) {
    // console.log(i);
  }
}

// 2. Дан массив. Удалите из него элементы с заданным значением.
const arr = [1, 2, 3, 4, 5, 6, 7];
const resultArr = arr.filter((element) => element !== 4);
// console.log(resultArr);

// 3. Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
const arr2 = [1, 2, 3, 4, 5, 6];
const resultArr2 = arr2
  .slice(0, arr2.length / 2)
  .reduce((acc, element) => acc + element);
// console.log(resultArr2);

// 4. Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
const arr3 = [1, -1, -2, 4, -4, 5, 10, 11];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < 0) {
    sum += arr3[i];
  }
}
// console.log(sum);

// 5. Дан массив с числами. Оставьте в нем только положительные числа.
const arr4 = [1, -1, -2, 4, -4, 5, 10, 11];
const resultArr4 = arr4.filter((element) => element > 0);
// console.log(resultArr4);

// 6. Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
const arr5 = [1, 2, 3, 4, 5, 6];
let leftItems = arr5.slice(0, arr5.length / 2);
let rightItems = arr5.slice(arr5.length / 2);
const leftItemsSum = leftItems.reduce((acc, item) => acc + item);
const rightItemsSum = rightItems.reduce((acc, item) => acc + item);
const result5 = leftItemsSum / rightItemsSum;
// console.log(leftItems)
// console.log(rightItems)
// console.log(result5);

// 7. Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
const arr6 = [1, 2, 3, 4, 5, 6];
const evenSum = arr6.reduce((acc, item, index) => {
  if (index % 2 == 0) {
    acc += item;
  }
  return acc;
}, 0);
const oddSum = arr6.reduce((acc, item, index) => {
  if (index % 2 !== 0) {
    acc += item;
  }

  return acc;
}, 0);
const result6 = evenSum / oddSum;
// console.log(result6);


// 8. Дан массив с некоторыми числами, например, вот такой: 
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]
const arr7 = [123, 456, 789];
const result7 = arr7.map((item) => {
  return parseInt(item.toString().split('').reverse().join(''));
})
console.log(result7);

// 9. Дан некоторый массив с числами, например, вот такой: 
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе: [12, 34, 56]
const arr8 = [1, 2, 3, 4, 5, 6];
const result9 = [];
for (let i = 0; i < arr8.length; i+= 2) {
  result9.push(parseInt((arr8[i].toString() + arr8[i + 1])));
}
console.log(result9);

// 10. Даны два массива: 
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом: 
// [1, 2, 'a', 'b', 'c', 3]
let arr10 = [1, 2, 3];
let arr11 = ['a', 'b', 'c'];
let partArr10 = arr10.slice(0, 2);
console.log(partArr10)
const resultArr10 = [...partArr10, ...arr11, arr10[arr10.length - 1]];
console.log(resultArr10)


// 11. Дан массив с числами: 
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке. 
const arr13 = [1, 2, 3, 4, 5];
for (let i = arr13.length; i >= 0; i--) {
  console.log(arr13[i]);
}

// 12. Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
const arr14 = [1, 2, 3, 3, 4, 5];
let found = false;

for (let i = 0; i < arr14.length - 1; i++) {
    if (arr14[i] === arr14[i + 1]) {
        found = true;
        break;
    }
}

if (found) {
    console.log('Два одинаковых элемента найдены подряд.');
} else {
    console.log('Два одинаковых элемента не найдены подряд.');
}
