# typeof
typeof - оператор с помощью которого можно выяснить тип данных (хоть и не всегда).

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

    typeof undefined    // 'undefined'
    typeof 10n          // 'bigint'
    typeof Symbol("id") // 'symbol'
    typeof Math         // 'object'
    typeof null         // 'object'
    typeof alert        // 'function'

Сначала может показаться что в JavaScript, есть много странностей, когда например у массива тип данных `object` или функция в JavaScipt являясь объектом, в операторе `typeof` показывается как `function`. Однако со временем углубившись в язык все эти *странности* станут ясны.

## PS
- По идее каких бы типов данных в JavaScript не существовало, в нём всё является объектом, даже функции.
- `typeof(a)`, можно записывать и со скобками
- `null` - не является объектом, это специальное значение с отдельным типом
- в языке JavaScript, нету типа данных `function`
