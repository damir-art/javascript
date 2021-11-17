# Деструктуризация

## Объект
Деструктуризация свойств объекта:

    const people = {
        name: 'Петя',
        lastname: 'Петров',
        age: 27,
        programmer: true,
    }

    // const name = people.name
    // const lastname = people.lastname
    // const age = people.age
    // const programmer = people.programmer

    // Синтаксис деструктуризации
    const {name, lastname, age, programmer} = people // people - название переменной в которой хранится объект
    // в скобки {} записываем имена свойств которые хотим деструктурировать в переменные

    console.log(name)       // Петя
    console.log(lastname)   // Петров
    console.log(age)        // 27
    console.log(programmer) // true

Значение параметра по-умолчанию:

    const {name, lastname, age, programmer, car = 'bmw'} = people

## Объект как параметр
Деструктуризация объекта, который является параметром функции:

    function f (obj) {
        const { a, b } = obj
        // return obj.a + obj.b
        return a + b
    }

    или

    function f ({ a, b }) {
        return a + b
    }

Обычно деструктуризацию используют чтобы деструктурировать параметр, который является объектом или массивом.

## Массив
Порядок ключей важен.

    const arr = ['moskva', 'piter']
    const [one, two] = arr
    console.log(one) // moskva

## Строка

    const str = 'hello'
    const [one, two] = str
    console.log(one) // h