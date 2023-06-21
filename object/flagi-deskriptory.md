# Флаги и дескрипторы
Флаги и дескрипторы свойств объекта.

## Флаги
Флаги свойств объекта:
- `value` - значение свойства,
- `writable` - если `true`, то свойство можно изменять, иначе только для чтения,
- `enumerable` - если `true`, то свойство может участвовать в циклах, иначе циклы игнорируют,
- `configurable` - если `true`, то свойство можно удалить, а флаги менять, иначе нет.

По-умолчанию у всех `true`.

## Object.getOwnPropertyDescriptor()
`Object.getOwnPropertyDescriptor()` - полная информация о свойстве объекта.

    const user = {
      name: 'Ivan'
    }

    let desc = Object.getOwnPropertyDescriptor(user, 'name');
    console.log( desc ); // Object { value: "Ivan", writable: true, enumerable: true, configurable: true }

`desc` - хранит информацию о свойстве.

Выводим информацию в консоль в удобочитаемом виде (2 это отступ):

    console.log( JSON.stringify(desc, null, 2) )

## Object.defineProperty()
`Object.defineProperty()` - изменяет флаги свойств объекта.

    Object.defineProperty(user, 'name', {
      value: 'Ivan',
    })

Если в объекте `user` нет свойства `name: 'Ivan'` то оно создастся, но все флаги будут со значением `false` (флаги можно указать принудительно).

## writable
Ошибку покажет при `'use strict'`. Без него ошибку не покажет, но всё равно не изменит.

    const user = { 
      name: 'Ivan'
    }

    Object.defineProperty(user, 'name', {
      writable: false
    })

    console.log(user.name) // читать можно
    user.name = 'Petr'     // изменять нельзя
    console.log(user.name) // Ivan

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

    console.log( JSON.stringify(desc, null, 2) )

    {
      "value": 3.141592653589793,
      "writable": false,
      "enumerable": false,
      "configurable": false
    }

По-умолчанию встроенное свойство `число пи` нельзя изменять и удалять.

    Math.PI = 4 // ошибка

Если флаг `configurable: false` то его уже не изменить, на `true`.

## Методы
- `Object.defineProperties()` - Позволяет определять сразу множество свойств.
- `Object.getOwnPropertyDescriptors()` - Получить все дескрипторы свойств сразу. Позволяет клонировать объекты вместе с флагами.
