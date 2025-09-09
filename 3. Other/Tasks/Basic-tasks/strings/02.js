// 1. Дана некоторая строка. Найдите позицию первого нуля в строке.
const string = "Apple0Banana0";
const position = string.indexOf("0");

console.log(position); // Выведет 5

// 2. Дана строка. Удалите предпоследний символ из этой строки.
const string2 = "banana";
const resultStr = string2.slice(0, -2) + string2.slice(-1);
console.log(resultStr);

// 3. Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
const word1 = "apple";
const word2 = "element";
const result2 = word2.startsWith(word1[word1.length - 1]);
console.log(result2);

// 4. Дана некоторая строка. Найдите позицию третьего нуля в строке.
const words = "aba0lo0we0";
let count = 0;
let position2 = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "0") {
    count++;
    if (count === 3) {
      position2 = i;
      break;
    }
  }
}
// console.log(position2);

// 5. Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
const str = "qwe1few3232";
const firstDigitPosition = str.search(/\d/);
// console.log(firstDigitPosition);

// 6. Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'
const str2 = "abcde";
let str3 = str2
  .split("")
  .map((ch, i) => (i % 2 ? ch.toLowerCase() : ch.toUpperCase()))
  .join("");

// console.log(str3);

// 7. Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'
const str4 = "aaa bbb ccc";
const resultStr2 = str4
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
// console.log(resultStr2);

// 8. Дана некоторая строка, например, вот такая: 
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке. 
const str5 = '023m0df0dfg0';
const zeroPositions = [];
for (let i = 0; i < str5.length; i++) {
    if (str5[i] === '0') {
        zeroPositions.push(i);
    }
}
// console.log(zeroPositions);

// 9. Дана некоторая строка: 
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 
// 'abdeg'
const str6 = 'abcdefg';
let result = '';
for (let i = 0; i < str6.length; i++) {
    if ((i + 1) % 3 !== 0) {
        result += str6[i];
    }
}
// console.log(result);

// 10. Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки. 
const str7 = 'fewf32few23few3223ew';
let arrResult = [];

for (let i = 0; i < str7.length; i++) {
  if (!isNaN(parseInt(str7[i]))) {
    arrResult.push(i);
  }
}
// console.log(arrResult);

// 11. Дана некоторая строка: 
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 
// 'aBcDe'
const str8 = 'AbCdE';
let result8 = '';

for (let i = 0; i < str8.length; i++) {
  if (str8[i] === str8[i].toUpperCase()) {
    result8 += str8[i].toLowerCase();
  } else {
    result8 += str8[i].toUpperCase();
  }
}
// console.log(result8);

// 12. Дана некоторая строка со словами: 
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 
// 'aaa Bbb ccc Eee fff'
const str9 = 'aaa bbb ccc eee fff';
const result9 = str9.split(' ');
let res = [];
for (let i = 0; i < result9.length; i++) {
  if (i % 2 !== 0) {
    res.push(result9[i].charAt(0).toUpperCase() + result9[i].slice(1));
  } else {
    res.push(result9[i]);
  }
}
// console.log(res);

// 13. Дана некоторая строка: 
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, 
// в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 
// 'A BC DEF ghij'
const str10 = 'a bc def ghij';
let arr = str10.split(' ');
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length <= 3) {
    arr[i] = arr[i].toUpperCase();
  } else {
    arr[i] = arr[i];
  }
}
console.log(arr);

// 14. Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
const symbol = 'A';
if (symbol === symbol.toUpperCase()) {
  console.log(symbol, 'в верхнем регистре')
} else {
  console.log(symbol, 'в нижнем регистре')
}

// 14. Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
const str11 = 'ffewAfewWB';
let result11 = str11.split('');
let count2 = 0;
for (let i = 0; i < result11.length; i++) {
  if (result11[i] === result11[i].toUpperCase()) {
    count2++;
  }
}
// console.log(count);

// 15. Дана некоторая строка: 
// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: 
// '1 22 333 22 1'
const str12 = '1 22 333 4444 22 5555 1';
let result12 = str12.split(' ').filter((item) => {
  return item.length <= 3;
});
console.log(result12.join(' '));

// 16. Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв. 
const str13 = 'fewf32';
let letterCount = 0;

for (let i = 0; i < str13.length; i++) {
  if (/[a-zA-Z]/.test(str13[i])) {
    letterCount++;
    if (letterCount > 3) {
      console.log('В строке больше трех букв');
      break;
    }
  }
}

if (letterCount <= 3) {
  console.log('В строке не более трех букв');
}

// 17. Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!': 
// '!bcde !bcde !bcde'
const str14 = 'abcde abcde abcde';
const result14 = str14.split(' ').map(word => '!' + word.slice(1)).join(' ');
console.log(result14); // Выведет: '!bcde !bcde !bcde'
