# Объекты в JavaScript
## Что такое объект и как он работает?
В JavaScript, всё является объектом (переменные, массивы, функции, объекты). Например, если создать переменную с типом данных `string`, то у этой переменной можно вызывать методы объекта `String`.

### Типый данных
Типы данных: number, string, boolean, null, undefined - примитивы<br />
object, array, function - комплексные

    new Date() // объект, получить текущую дату
    new Date().getFullYear() // получить текущий год

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
    
Проверяем свойства на наличие `hasOwnProperty()`:

    car.hasOwnProperty('age') // false
    car.hasOwnProperty('name') // true

    hasOwnProperty() - это метод родительского объекта

    car.toString() // [object Object]
