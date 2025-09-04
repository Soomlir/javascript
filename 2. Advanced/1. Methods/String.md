# Методы строк

## 1. `charAt()`
Описание: Возвращает символ на указанной позиции.
```js
let str = "Hello";
console.log(str.charAt(1)); // "e"
```

## 2. `trim()`
Описание: Удаляет пробелы с обеих сторон строки.
```js
let str = "   Hello, World!   ";
console.log(str.trim()); // "Hello, World!"
```

## 3. `replace()`
Описание: Заменяет часть строки на другую строку. Можно использовать регулярные выражения.
```js
let str = "Hello, World!";
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
```

## 4. `startsWith() / endsWith()`
Описание: Проверяют, начинается или заканчивается ли строка с указанной подстроки.
```js
let str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
```

## 5. `repeat()`
Описание: Повторяет строку указанное количество раз.
```js
let str = "Hello!";
console.log(str.repeat(3)); // "Hello!Hello!Hello!"
```

## 6. `toUpperCase() / toLowerCase()`
Описание: Преобразует строку в верхний или нижний регистр.
```js
let str = "Hello";
console.log(str.toUpperCase()); // "HELLO"
console.log(str.toLowerCase()); // "hello"
```
