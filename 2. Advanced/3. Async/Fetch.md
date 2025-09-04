# Fetch
## Что такое асинхронность?
Когда мы говорим об асинхронности в контексте JavaScript, мы имеем в виду выполнение операций, которые не блокируют главный поток выполнения программы (так называемый `event loop` (цикл событий)). То есть, JavaScript может продолжать выполнение других задач, пока одна операция выполняется в фоновом режиме. (Например запрос на сервер для получения данных).

Для работы с асинхронным кодом в JS используются `колбэки, промисы, async - await`.

## Что такое API в веб-разработке?
API (`Application Programming Interface`) в контексте веб-разработки — это набор правил, протоколов и инструментов, которые позволяют разным приложениям или системам взаимодействовать друг с другом. Веб-API чаще всего работает через HTTP.

## Как работать с fetch в JavaScript?
`fetch` — это современный способ отправки HTTP-запросов в JavaScript, который является заменой устаревшего `XMLHttpRequest`. Он использует промисы (Promises) для асинхронной работы с запросами.

```js
fetch('https://example.com/api/data')  // Отправляем GET-запрос
  .then(response => response.json())  // Преобразуем ответ в JSON
  .then(data => console.log(data))  // Обрабатываем полученные данные
  .catch(error => console.error('Ошибка:', error));  // Обрабатываем ошибку
```

## Интерполяция строки и new URL
1. Интерполяция строки (Template Strings).
```js
const userId = 123;
const url = `https://example.com/api/user/${userId}`;
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
```

2. Метод `new URL()` используется для более безопасного и правильного построения URL, особенно когда нужно добавить параметры запроса.
```js
const baseUrl = 'https://example.com/api/user';
const userId = 123;
const url = new URL(baseUrl);
url.searchParams.append('id', userId);  // Добавляем параметр запроса

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
```

## Как отправлять данные с помощью fetch на сервер?
Чтобы отправить данные на сервер с помощью `fetch`, нужно указать метод запроса (например, POST), а также передать тело запроса, которое может быть в формате `JSON` или других данных.

Пример отправки `JSON` данных с помощью `POST`:
```js
const data = { name: 'John', age: 30 };

fetch('https://example.com/api/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',  // Указываем формат данных
  },
  body: JSON.stringify(data)  // Преобразуем объект в строку JSON
})
  .then(response => response.json())  // Получаем ответ от сервера
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
```
