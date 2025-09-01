// 1. Дана некоторая строка со словами: 
// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 
// 'aaa ccc fff'

// const str = 'aaa bbb ccc eee fff';

// // Разбиваем строку на массив слов
// const words = str.split(' ');

// // Фильтруем каждое второе слово
// const result = words.filter((_, index) => index % 2 === 0);

// // Объединяем отфильтрованные слова обратно в строку
// const finalStr = result.join(' ');

// console.log(finalStr); // Вывод: 'aaa ccc fff'


// 2. Дано некоторое слово: 
// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны. 
// const str = 'abcba';
// const checkPalindrom = (str) => {
//   if (str == str.split('').reverse().join('')) {
//     return true
//   }
//   return false;
// }
// console.log(checkPalindrom(str));


// 3. Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'. 
