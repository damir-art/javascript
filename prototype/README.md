# Прототипы в JavaScript

## Что такое объект и как он работает?
В JavaScript, всё является объектом. Например, если создать переменную с типом данных string, то у этой переменной можно вызывать методы объекта String.

    // Типы данных:
    // number, string, boolean, null, undefined - примитивы
    // object - объекты

    new Date() // объект, получить текущую дату
    new Date().getFullYear() // получить текущий год
    
    // {} быстрое создание объекта
    var car = {
        name: 'Ford',
        year: 1999
    }
    console.log(car) // см __proto__: Object
    car.name
    car['name']
    
    // проверяет свойство на наличие
    car.hasOwnProperty('age') // false
    car.hasOwnProperty('name') // true

    hasOwnProperty() - это метод родительского объекта

    car.toString() // [object Object]

## Что такое прототип?
JavaScript - прототипный язык программирования. Всё построено на прототипах определенных объектов.

    __proto__ // ссылка на прототип родителя, есть у любого объекта

Object - глобальный объект JavaScript, самый верхний "класс", основа для всех объектов.<br />
Object.prototype - прототип общего класса Object (самый верхний прототип, у потомков `объект.__proto__`)

    На этом построено всё наследование объектов в JavaScript
    car.__proto__ ссылается на Object.prototype
    car.__proto__ === Object.prototype // вернет true

Если создать массив, то данный массив через `__proto__` будет иметь методы Array и методы Object. Array через `__proto__` имеет методы Object.

### Как работает прототип в JavaScripte
