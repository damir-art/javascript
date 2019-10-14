# Объекты в JavaScript
## Что такое объект и как он работает?
В JavaScript, всё является объектом (переменные, массивы, функции, объекты). Например, если создать переменную с типом данных `string`, то у этой переменной можно вызывать методы объекта `String`.

### Типый данных
Типы данных: number, string, boolean, null, undefined - примитивы<br />
object, array, function - комплексные

Вводим в консоли:
    new Date() // Mon Oct 14 2019 12:02:27 GMT+0300 (Москва, стандартное время)
    new Date().getFullYear() // 2019

## Создание объекта `{ }`
Быстрое создание объекта через фигурные скобки `{ }`

    var car = {
        name: 'Ford',
        year: 1999
    }
    console.log(car) // см __proto__: Object
    
    // Доступ к свойствам
    car.name
    car['name']

## `__proto__: Object`
Используем методы которые не задавали при создании объекта. Проверяем свойства на наличие, через метод `hasOwnProperty()`:

    car.hasOwnProperty('age')  // false
    car.hasOwnProperty('name') // true

`car.hasOwnProperty()` и другие, например `car.toString()` - это методы родительского объекта в нашем случае `Object`.
