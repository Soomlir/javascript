# Fetch

## Что такое API в веб-разработке?
API (`Application Programming Interface`) в контексте веб-разработки — это набор правил, протоколов и инструментов, которые позволяют разным приложениям или системам взаимодействовать друг с другом. Веб-API чаще всего работает через HTTP и позволяет клиентским приложениям отправлять запросы и получать ответы от серверов, например, получать данные о погоде, пользователях или выполнять операции на сервере.

## Как работать с fetch в JavaScript?
`fetch` — это современный способ отправки HTTP-запросов в JavaScript, который является заменой устаревшего `XMLHttpRequest`. Он использует промисы (Promises) для асинхронной работы с запросами.

```js
fetch('https://example.com/api/data')  // Отправляем GET-запрос
  .then(response => response.json())  // Преобразуем ответ в JSON
  .then(data => console.log(data))  // Обрабатываем полученные данные
  .catch(error => console.error('Ошибка:', error));  // Обрабатываем ошибку
```

## Как манипулировать со строкой, передаваемой в fetch, с помощью интерполяции строки и new URL?
1. Интерполяция строки (Template Strings): Это удобный способ включать переменные в строку.
```js
const userId = 123;
const url = `https://example.com/api/user/${userId}`;
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
```

2. Использование new URL для построения URL: Метод new URL() используется для более безопасного и правильного построения URL, особенно когда нужно добавить параметры запроса.
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

## Какие есть тонкости при работе с fetch?
1. Обработка ошибок: fetch не считает ошибкой ответы с кодами состояния 4xx или 5xx, то есть если сервер вернул ошибку (например, 404 или 500), это не вызовет исключение. Нужно вручную проверять response.ok или статус ответа.
```js
fetch('https://example.com/api/user')
  .then(response => {
    if (!response.ok) {  // Проверяем статус ответа
      throw new Error('Ошибка сети');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
```

2. Корректная работа с CORS (`Cross-Origin Resource Sharing`): Если ваш фронтенд и бэкенд находятся на разных доменах, сервер должен поддерживать CORS-запросы. Если этого не сделано, браузер заблокирует запросы.

3. Тайм-ауты и отмена запроса: fetch не имеет встроенной функции для отмены запросов, но можно использовать AbortController для управления отменой.
```js
const controller = new AbortController();
const signal = controller.signal;

fetch('https://example.com/api/user', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Запрос был отменен');
    } else {
      console.error('Ошибка:', error);
    }
  });

// Отменяем запрос через 3 секунды
setTimeout(() => controller.abort(), 3000);
```

4. Отправка больших данных: Для отправки больших файлов или данных можно использовать FormData, что позволяет удобно отправлять формы с файлами.
```js
const formData = new FormData();
formData.append('file', fileInput.files[0]);  // fileInput — это элемент <input type="file">

fetch('https://example.com/upload', {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
```

## Что нужно знать при работе с fetch?
1. `Асинхронность и промисы`: Важно понимать работу с промисами. Все запросы, выполненные через fetch, возвращают промисы, и необходимо правильно работать с .then() и .catch(), либо использовать async/await для более чистого синтаксиса.

2. `Работа с JSON`: Часто данные, передаваемые с сервера, имеют формат JSON. Важно уметь работать с ним, используя response.json() для обработки ответа.

3. `Оптимизация запросов`: Нужно следить за количеством и частотой запросов, чтобы избежать излишней нагрузки на сервер и задержек в работе приложения.

4. `Безопасность`: Важно понимать, как работают заголовки, куки и авторизация при отправке запросов. Работа с токенами и заголовками авторизации является важной частью при отправке защищенных запросов.

5. `Ошибки сети`: Необходимо правильно обрабатывать ошибки сети, например, потерю соединения, неправильные URL, проблемы с CORS и т. д.

6. `Тестирование`: Для тестирования запросов можно использовать различные инструменты, такие как Postman, или писать юнит-тесты с использованием моков (например, через библиотеку jest).
