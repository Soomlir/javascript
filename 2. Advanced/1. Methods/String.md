# Методы строк

## 1. `length`
Описание: Возвращает длину строки.
```js
let str = "Hello, World!";
console.log(str.length); // 13
```

## 2. `charAt()`
Описание: Возвращает символ на указанной позиции.
```js
let str = "Hello";
console.log(str.charAt(1)); // "e"
```

## 3. `indexOf()`
Описание: Возвращает индекс первого вхождения подстроки. Если подстрока не найдена, возвращает -1.
```js
let str = "Hello, World!";
console.log(str.indexOf("World")); // 7
console.log(str.indexOf("world")); // -1 (регистр важен)
```

## 4. `substring() / slice()`
Описание: Возвращает подстроку из строки.
- substring(start, end) — извлекает символы от start до end (не включая end).
- slice(start, end) — работает аналогично, но может принимать отрицательные индексы.
```js
let str = "Hello, World!";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.slice(-6, -1));   // "World"
```

## 5. `toUpperCase() / toLowerCase()`
Описание: Преобразует строку в верхний или нижний регистр.
```js
let str = "Hello";
console.log(str.toUpperCase()); // "HELLO"
console.log(str.toLowerCase()); // "hello"
```

## 6. `trim()`
Описание: Удаляет пробелы с обеих сторон строки.
```js
let str = "   Hello, World!   ";
console.log(str.trim()); // "Hello, World!"
```

## 7. `replace()`
Описание: Заменяет часть строки на другую строку. Можно использовать регулярные выражения.
```js
let str = "Hello, World!";
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
```

## 8. `split()`
Описание: Разделяет строку на массив подстрок, используя указанный разделитель.
```js
let str = "apple,banana,cherry";
let arr = str.split(",");
console.log(arr); // ["apple", "banana", "cherry"]
```

## 9. `includes()`
Описание: Проверяет, содержится ли подстрока в строке.
```js
let str = "Hello, World!";
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false
```

## 10. `startsWith() / endsWith()`
Описание: Проверяют, начинается или заканчивается ли строка с указанной подстроки.
```js
let str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
```

## 11. `concat()`
Описание: Соединяет две или более строк.
```js
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"
```

## 12. `repeat()`
Описание: Повторяет строку указанное количество раз.
```js
let str = "Hello!";
console.log(str.repeat(3)); // "Hello!Hello!Hello!"
```
