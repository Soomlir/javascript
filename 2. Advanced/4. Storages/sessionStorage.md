# sessionStorage
## Что такое `sessionStorage`?
`sessionStorage` — это объект в JavaScript, который позволяет хранить данные для текущей сессии браузера. Эти данные сохраняются в памяти только на время активной сессии браузера (пока окно или вкладка открыты). Когда вкладка или окно браузера закрываются, все данные, сохраненные в sessionStorage, исчезают.

## Зачем нужно `sessionStorage`?
`sessionStorage` используется для хранения данных, которые должны быть доступны только на протяжении одной сессии пользователя. Это может быть полезно в случаях, когда нужно сохранить информацию о текущем состоянии страницы или временные данные, которые не должны сохраняться после закрытия вкладки.

Примеры применения:
- Сохранение состояния формы (например, чтобы после перезагрузки страницы данные не исчезли).
- Временные настройки, такие как фильтры поиска или параметры сортировки, которые должны быть доступны на протяжении сессии.
- Хранение информации о пользователе (например, данные о авторизации или сеансе).

## Как с этим работать?
API `sessionStorage` довольно простое. Вот основные методы и примеры работы с ним.

Основные методы:
1. `sessionStorage.setItem(key, value)`
Сохраняет данные в хранилище. Ключ (key) должен быть строкой, а значение (value) также должно быть строкой.
```js
sessionStorage.setItem('username', 'JohnDoe');
```

2. `sessionStorage.getItem(key)`
Получает значение по ключу. Возвращает `null`, если такого ключа нет.
```js
let username = sessionStorage.getItem('username');
console.log(username); // "JohnDoe"
```

3. `sessionStorage.removeItem(key)`
Удаляет элемент по ключу.
```js
sessionStorage.removeItem('username');
```

4. `sessionStorage.clear()`
Очищает все данные в `sessionStorage`.
```js
sessionStorage.clear();
```

5. `sessionStorage.length`
Возвращает количество элементов в `sessionStorage`.
```js
console.log(sessionStorage.length); // 1 (если один элемент сохранен)
```

6. `sessionStorage.key(index)`
Получает ключ по индексу.
```js
let key = sessionStorage.key(0);
console.log(key); // "username"
```

Пример использования:
```js
// Сохраняем данные о пользователе
sessionStorage.setItem('username', 'Alice');
sessionStorage.setItem('isLoggedIn', 'true');

// Получаем данные
let username = sessionStorage.getItem('username');
let isLoggedIn = sessionStorage.getItem('isLoggedIn');

console.log(username); // "Alice"
console.log(isLoggedIn); // "true"

// Удаляем данные
sessionStorage.removeItem('isLoggedIn');

// Очищаем все данные
sessionStorage.clear();
```

### Пример с объектом:
```js
// Преобразуем объект в строку
let user = { name: 'Alice', age: 25 };
sessionStorage.setItem('user', JSON.stringify(user));

// Получаем объект обратно
let retrievedUser = JSON.parse(sessionStorage.getItem('user'));
console.log(retrievedUser); // { name: 'Alice', age: 25 }
```
