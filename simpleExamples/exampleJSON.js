/**
 * ----------------------- ПРИМЕР -------------------------- *
 *                         JSON
 * -------------- -- парсинг и обратно --------------------- *
 */
// пример формат json обьекта который приходит с сервера
const someJSON = `
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
}
`

const someData = {
  name: 'Test',
  age: 22,
  phone: '000-000-0'
}
// приведение объекта к json строке
JSON.stringify(someData) // '{"name":"Test","age":22,"phone":"000-000-0"}'
// парсинг json-строки
JSON.parse('{"name":"Test","age":22,"phone":"000-000-0"}')
// получаем объект
// {
//   name: 'Test', 
//   age: 22, 
//   phone: '000-000-0'
// }