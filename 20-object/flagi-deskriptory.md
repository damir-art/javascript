# Флаги и дескрипторы
Флаги и дескрипторы свойств объекта.

## Флаги
Флаги свойств объектов.

- `value` - значение свойства
- `writable` - если true, то свойство можно изменять, иначе только для чтения
- `enumerable` - если true, то свойство может участвовать в циклах, иначе циклы игнорируют
- `configurable` - если true, то свойство можно удалить, а флаги менять, иначе нет

По-умолчанию у всех `true`.

## Object.getOwnPropertyDescriptor()
`Object.getOwnPropertyDescriptor()` - полная информация о свойстве объекта.

    const user = { 
        name: 'Ivan'
    }

    let desc = Object.getOwnPropertyDescriptor(user, 'name')

`desc` - хранит информацию о свойстве

Выводим информацию в консоль:

    console.log( JSON.stringify(desc, null, 4) )

## Object.defineProperty()
`Object.defineProperty()` - изменяет флаги свойств объекта.

    Object.defineProperty(user, 'name', {
        value: 'Ivan'
    })

Если в объекте `user` нет свойства `name: 'Ivan'` то оно создастся но все флаги будут со значением `false` (флаги можно указать принудительно).

## writable

    const user = { 
        name: 'Ivan'
    }

    Object.defineProperty(user, 'name', {
        writable: false
    })

    console.log(user.name) // читать можно
    user.name = 'Petr' // изменять нельзя

Ошибку покажет при `'use strict'`. Без него ошибку не покажет, но всё равно не изменит.

## enumerable
Если `false`, то свойство не будет видно в цикле например в `for...in` или `Object.keys()`.

    const user = { 
        name: 'Ivan',
        age: 21
    }

    Object.defineProperty(user, 'name', {
        enumerable: false
    })

    console.log(Object.keys(user)) // Array [ "age" ]

## configurable

    let desc = Object.getOwnPropertyDescriptor(Math, 'PI')

    console.log( JSON.stringify(desc, null, 4) )

    {
        "value": 3.141592653589793,
        "writable": false,
        "enumerable": false,
        "configurable": false
    }

По-умолчанию встроенное свойство `число пи` нельзя изменять и удалять.

    Math.PI = 4 // ошибка

Если флаг `configurable: false` то его уже не изменить, на `true`.

## Object.defineProperties()
Позволяет определять сразу множество свойств.

## Object.getOwnPropertyDescriptors()
Получить все дескрипторы свойств сразу. Позволяет клонироваться объекты вместе с флагами.
