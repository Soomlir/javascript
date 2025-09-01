// 1. Дана дата в следующем формате: 
// '2025-12-31'
// Преобразуйте эту дату в следующий объект: 
// {
//	year: '2025',
//	month: '12',
//	day: '31',
// }
const dateItem = '2025-12-31';
const itemsDateItem = dateItem.split('-');
console.log(itemsDateItem);
const obj = {
  year: itemsDateItem[0],
  month: itemsDateItem[1],
  day: itemsDateItem[2]
}
console.log(obj);

// const dateString = '2025-12-31';
// const [year, month, day] = dateString.split('-');

// const dateObject = {
//   year: year,
//   month: month,
//   day: day
// };

// console.log(dateObject);

// 2. Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения. 
const obj2 = {
  name: 'Katya',
  age: 30,
  isProgrammer: false,
}

const firstObj = Object.keys(obj2);
console.log(firstObj);
const secondObj = Object.values(obj2);
console.log(secondObj);