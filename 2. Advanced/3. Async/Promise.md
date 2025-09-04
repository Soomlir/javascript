# `Promise`
Промисы придумали, чтобы организовывать асинхронный код последовательно.
Асинхронные функции — функции, которые возвращают промисы.

## Что такое Промисы (`Promise`)?
`Промис (Promise)` — это объект в JavaScript, который представляет собой завершение асинхронной операции, а также позволяет обработать успешный результат или ошибку этой операции, когда она завершится.

Структура Промиса:
Промис может находиться в одном из следующих состояний:
- `Pending` (ожидание): Операция ещё не завершена.
- `Resolved` (Fulfilled) (выполнено): Операция завершена успешно.
- `Rejected` (отклонено): Операция завершена с ошибкой.

Промис предоставляет два основных метода для работы с результатами:
- `then()` — вызывается, когда промис выполняется успешно.
- `catch()` — вызывается, если промис завершён с ошибкой.

Пример использования промиса:
```js
let promise = new Promise((resolve, reject) => {
  let success = true; // Давайте предположим, что операция успешна
  setTimeout(() => {
    if (success) {
      resolve('Data fetched successfully');
    } else {
      reject('Error fetching data');
    }
  }, 2000);
});

promise
  .then(result => {
    console.log(result); // 'Data fetched successfully'
  })
  .catch(error => {
    console.error(error); // Если ошибка, то 'Error fetching data'
  });
```

## Как с этим работать?
Промис можно создать с помощью конструктора `new Promise()`. Внутри передаётся функция с двумя параметрами: `resolve` и `reject`.
- `resolve(value)` — вызывает промис с успешным результатом.
- `reject(error)` — вызывает промис с ошибкой.

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data fetched');
      } else {
        reject('Error occurred');
      }
    }, 2000);
  });
}

fetchData()
  .then(data => console.log(data))  // 'Data fetched'
  .catch(error => console.log(error));  // 'Error occurred'
```

## Асинхронные функции (`Async/Await`)
`Асинхронные функции` — это синтаксический сахар для работы с промисами. Они позволяют писать асинхронный код, который выглядит как синхронный, что делает код чище и понятнее.

Что такое `async` и `await`?
- `async` — ключевое слово, которое используется перед функцией, чтобы она всегда возвращала промис.
- `await` — ключевое слово, которое используется внутри асинхронной функции для ожидания выполнения промиса, не блокируя основной поток.

Преимущества использования `async/await`:
- Более читаемый и линейный код.
- Меньше вложенных колбеков, что позволяет избежать callback hell.
- Исключение необходимости работы с `.then()` и `.catch()` для обработки промисов.

Пример:
```js
async function fetchData() {
  let data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 2000);
  });
  
  console.log(data);  // 'Data fetched'
}

fetchData();
```

Здесь `await` заставляет JavaScript подождать выполнения промиса, прежде чем продолжить выполнение кода.

## Обработка ошибок
Промисы позволяют обработать ошибку с помощью метода `.catch()`.
```js
let promise = new Promise((resolve, reject) => {
  let success = false;  // Ошибка
  if (success) {
    resolve('Data fetched');
  } else {
    reject('Error occurred');
  }
});

promise
  .then(data => console.log(data))
  .catch(error => console.error(error));  // 'Error occurred'
```

Асинхронные функции:
В асинхронных функциях ошибки можно обработать с помощью `try...catch`.
```js
async function fetchData() {
  try {
    let data = await new Promise((resolve, reject) => {
      let success = false;  // Ошибка
      if (success) {
        resolve('Data fetched');
      } else {
        reject('Error occurred');
      }
    });
    console.log(data);
  } catch (error) {
    console.error(error);  // 'Error occurred'
  }
}

fetchData();
```

## Цепочка промисов
Можно создавать цепочку промисов, где каждый промис зависит от предыдущего. Это удобно для последовательных асинхронных операций.
```js
function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('First task completed'), 1000);
  });
}

function secondTask() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Second task completed'), 1000);
  });
}

firstTask()
  .then(result => {
    console.log(result);  // 'First task completed'
    return secondTask();  // Возвращаем второй промис
  })
  .then(result => {
    console.log(result);  // 'Second task completed'
  })
  .catch(error => console.error(error));  // Обработка ошибок
```

## Параллельные операции
Если вам нужно запустить несколько асинхронных операций одновременно и дождаться их завершения, используйте `Promise.all()`.
```js
let promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Task 1 completed'));
let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Task 2 completed'));

Promise.all([promise1, promise2])
  .then(results => {
    console.log(results);  // ['Task 1 completed', 'Task 2 completed']
  })
  .catch(error => console.error(error));
```

`Promise.all()` ждёт завершения всех переданных промисов. Если один из промисов завершается с ошибкой, то `catch` сработает немедленно.

# .finally(), Promise.allSettled(), Promise.any(), Promise.race() 
## `.finally()`
Метод .finally() позволяет выполнить код после завершения промиса, независимо от того, завершился ли он успешно или с ошибкой. Этот метод полезен для выполнения операций очистки, например, закрытия соединений, скрытия индикаторов загрузки и т. д.

- `.finally()` выполняется после того, как промис завершён, но до того, как будет возвращён результат из `.then()` или `.catch()`.

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success'), 1000);
});

promise
  .then(result => {
    console.log(result);  // 'Success'
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('Cleanup operations');  // Этот код выполнится в любом случае
  });
```

Когда использовать `.finally()`?
Используйте `.finally()` для выполнения действий, которые должны быть выполнены после завершения асинхронной операции, независимо от того, завершилась ли она с ошибкой или успешно. Например, это может быть полезно для очистки ресурсов (например, скрытие индикаторов загрузки) или выполнения действий, которые не зависят от результата промиса.

## `Promise.allSettled()`
`Promise.allSettled()` — это метод, который принимает массив промисов и возвращает новый промис, который завершится, когда все переданные промисы будут завершены (независимо от того, успешны они были или завершились с ошибкой). В отличие от `Promise.all()`, который отклоняется при первой же ошибке, `Promise.allSettled()` ждёт завершения всех промисов и всегда возвращает результат.

Как работает `Promise.allSettled()`?
- Метод возвращает новый промис, который всегда резолвится.
- Когда все промисы завершены, возвращается массив объектов, где каждый объект имеет два свойства:
  * `status`: строка, которая может быть `"fulfilled"` (если промис был выполнен успешно) или `"rejected"` (если промис завершился с ошибкой).
  * `value`: значение, если промис был выполнен успешно, или `reason` (причина ошибки), если промис завершился с ошибкой.

```js 
let promise1 = Promise.resolve(3);
let promise2 = Promise.reject('Error');
let promise3 = new Promise(resolve => setTimeout(resolve, 1000, 'Success'));

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Fulfilled:', result.value);
      } else {
        console.log('Rejected:', result.reason);
      }
    });
  });
```

Когда использовать Promise.allSettled()?
Этот метод полезен, когда вы хотите дождаться завершения всех промисов, независимо от того, завершатся ли они с ошибкой или успешно. Например, если вы запускаете несколько параллельных запросов, и вам нужно обработать результаты всех из них (даже если один из запросов не удался).

## `Promise.any()`
`Promise.any()` — это метод, который принимает массив промисов и возвращает новый промис, который завершится, как только любой из переданных промисов будет выполнен успешно (то есть, первым будет успешным тот промис, который завершится первым). Если все промисы завершаются с ошибкой, то результатом будет отклонение с ошибкой.
- Метод возвращает первый успешный результат.
- Если все промисы отклонены, возвращается ошибка с типом `AggregateError`, которая содержит массив причин ошибок.

```js
let promise1 = new Promise((_, reject) => setTimeout(reject, 1000, 'Error 1'));
let promise2 = new Promise((_, reject) => setTimeout(reject, 2000, 'Error 2'));
let promise3 = new Promise(resolve => setTimeout(resolve, 500, 'Success'));

Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log(result);  // 'Success' (промис 3 завершился первым)
  })
  .catch(error => {
    console.log(error);  // Если все промисы отклонены, выведется ошибка
  });
```

Когда использовать Promise.any()?
`Promise.any()` полезен, если вам нужно получить результат от первого успешного промиса, например, при выполнении параллельных запросов, и вам нужно продолжить выполнение, как только один из них удастся, не дожидаясь остальных.

## `Promise.race()`
`Promise.race()` — это метод, который принимает массив промисов и возвращает новый промис, который завершится сразу после того, как завершится первый из переданных промисов (независимо от того, был ли он успешным или завершился с ошибкой).
- Результат этого промиса будет результатом первого завершённого промиса (как успешного, так и с ошибкой).
- Если первый промис отклонён, то результатом будет ошибка.

```js
let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'First'));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Second'));
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1500, 'Third'));

Promise.race([promise1, promise2, promise3])
  .then(result => {
    console.log(result);  // 'Second' (промис 2 завершился первым)
  })
  .catch(error => {
    console.log(error);
  });
```
Когда использовать Promise.race()?
`Promise.race()` полезен, когда вам нужно дождаться первого завершённого промиса (успешного или неуспешного). Например, вы можете использовать его для реализации тайм-аута или в случае, когда вам нужно обработать только первый завершённый ответ, а остальные можно игнорировать.
