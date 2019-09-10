# Прототипы в JavaScript

## Что такое объект и как он работает?
    // Типы данных:
    // number, string, boolean, null, undefined - примитивы
    // object - объекты

## Что такое прототип и как он работает?
В JavaScript, всё является объектом. Например, если создать переменную с типом данных string, то у этой переменной можно вызывать методы объекта String.

    new Date() // объект, получить текущую дату
    new Date().getFullYear() // получить текущий год
    
    // {} быстрое создание объекта
    var car = {
        name: 'Ford',
        year: 1999
    }
    console.log(car) // см __proto__
    car.name
    car['name']
    
    // проверяет свойство на наличие
    car.hasOwnProperty('age') // false
    car.hasOwnProperty('name') // true

    hasOwnProperty() - это метод родительского объекта/класса?
