# typeof
## Выясняем тип данных переменной

Чтобы выяснить тип данных у переменной используют оператор `typeof`.

Создадим несколько переменных и выясним их тип данных.

    let a = 'apple'
    let b = 35
    let c = true
    let d = []
    let e = {}
    let f = null
    let g = NaN
    let h = Infinity
    let i = function() {}

    console.log(typeof a) // 'string'
    console.log(typeof b) // 'number'
    console.log(typeof c) // 'boolean'
    console.log(typeof d) // 'object'
    console.log(typeof e) // 'object'
    console.log(typeof f) // 'object'
    console.log(typeof g) // 'number'
    console.log(typeof h) // 'number'
    console.log(typeof i) // 'function'

В JavaScript, есть много странностей, которые просто нужно запомнить, например у массива, тип данных `object`, функция в JavaScipt тоже является объектом, но оператор `typeof` показывает `function`.

## PS
По идее каких бы типов данных в JavaScript не существовало, в нём всё является объектом, даже функции.
