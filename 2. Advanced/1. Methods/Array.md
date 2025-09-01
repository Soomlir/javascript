# Методы массивов

## 1. `join`
`.join()` приводит все элементы массива к строке и конкатенирует их в одну итоговую строку, разделяя переданным символом — разделителем.

```js
let arr = [1, 2, 3, 4];
let result = arr.join('-');  // '1-2-3-4'
console.log(result);
```

Если разделитель не указан, то будет использована запятая:
```js
let arr = [1, 2, 3, 4];
let result = arr.join();  // '1,2,3,4'
console.log(result);
```

Также можно использовать пустую строку как разделитель, что приведет к конкатенации элементов без промежутков:
```js
let arr = ['a', 'b', 'c'];
let result = arr.join('');  // 'abc'
console.log(result);
```

## 2. `substring`
`.substring(start, end)`
- Возвращает часть строки от индекса start до индекса end (не включая end).
- Если start больше end, то метод меняет их местами.
- Если один из индексов меньше нуля, он будет интерпретироваться как 0.
```js
let str = "Hello, world!";
let result = str.substring(0, 5);  // "Hello"
console.log(result);
```

## 3. `substr`
`.substr(start, length)`
- Возвращает подстроку, начиная с позиции start и длиной length.
- Если length не указан, метод вернет строку от позиции start до конца строки.
- Важно: substr считается устаревшим и не рекомендуется к использованию в новых проектах, так как может быть удален в будущих версиях.
```js
let str = "Hello, world!";
let result = str.substr(7, 5);  // "world"
console.log(result);
```

## 4. `slice`
`.slice(start, end)`
- Очень похож на substring, но отличается тем, что может принимать отрицательные значения для start и end, что позволяет отсчитывать индексы с конца строки.
- Если start больше end, метод просто возвращает пустую строку.
```js
let str = "Hello, world!";
let result = str.slice(7, 12);  // "world"
console.log(result);

// Использование отрицательных индексов
let resultNegative = str.slice(-6, -1);  // "world"
console.log(resultNegative);
```

## 5. `splice`
`.splice()` — это действительно "швейцарский нож" для работы с массивами. Он позволяет:
- Удалять элементы из массива.
- Добавлять элементы в любой позиции.
- Заменять элементы в массиве.
```js
array.splice(start, deleteCount, item1, item2, ...)
```
- start — индекс, с которого начинается изменение.
- deleteCount — количество элементов, которые нужно удалить (необязательный параметр).
- item1, item2, ... — элементы, которые нужно добавить в массив, начиная с позиции start.

Удаление элементов:
```js
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2);  // Удаляет элементы с индекса 2, 2 элемента
console.log(arr);  // [1, 2, 5]
```

Добавление элементов:
```js
let arr = [1, 2, 3, 4];
arr.splice(2, 0, 'a', 'b');  // Вставляет 'a' и 'b' на позицию 2
console.log(arr);  // [1, 2, 'a', 'b', 3, 4]
```

Замена элементов:
```js
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 'x', 'y');  // Заменяет 2 элемента с индекса 1 на 'x' и 'y'
console.log(arr);  // [1, 'x', 'y', 4]
```

## 6. `concat`
`.concat()` – Объединяет два или более массивов в один.
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);  // [1, 2, 3, 4]
```

## 7. `includes`
`.includes()` проверяет, содержит ли массив или строка определённый элемент. Возвращает true, если элемент найден, и false, если нет.
- Массивы: проверяет наличие элемента в массиве.
- Строки: проверяет наличие подстроки в строке.
```js
array.includes(element, start)
```

```js
// Массив
let arr = [1, 2, 3, 4];
console.log(arr.includes(3));  // true
console.log(arr.includes(5));  // false

// Строка
let str = "Hello, world!";
console.log(str.includes("world"));  // true
console.log(str.includes("hi"));  // false
```

## 8. `indexOf`
`.indexOf()` возвращает индекс первого вхождения элемента в массиве или строке. Если элемент не найден, возвращается -1. По умолчанию поиск начинается с первого элемента, но можно указать начальный индекс.
```js
array.indexOf(element, start)
```

```js
// Массив
let arr = [1, 2, 3, 4];
console.log(arr.indexOf(3));  // 2
console.log(arr.indexOf(5));  // -1

// Строка
let str = "Hello, world!";
console.log(str.indexOf("world"));  // 7
console.log(str.indexOf("hi"));  // -1
```

## Итого:
- Для добавления и извлечения элементов: `unshift(), push(), shift(), pop(), splice()`.
- Для формирования новых массивов на основе существующих: `slice(), concat(), filter(), map()`.
- Для проверок и итераций по массиву: `forEach(), every(), some()`.
- Для поиска элементов и индексов в массиве: `indexOf(), lastIndexOf(), includes(), find()`.
- Для преобразования массивов: `sort(), reverse(), reduce()`.
