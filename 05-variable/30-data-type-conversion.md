# Выясняем тип данных
Чтобы выяснить тип данных, который хранится в переменной, нужно воспользоваться оператором `typeof`

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
    console.log(typeof c) // 'boolean
    console.log(typeof d) // 'object'
    console.log(typeof e) // 'object'
    console.log(typeof f) // 'object'
    console.log(typeof g) // 'number'
    console.log(typeof h) // 'number'
    console.log(typeof i) // 'function'

В JavaScript, есть много странностей, которые просто нужно запомнить, например у массива, тип данных `object`, функция в JavaScipt тоже является объектом, но оператор `typeof` показывает `function`.

## Преобразование типов данных
Преобразование типов в JavaScript бывает явным и неявным. Преобразовывать можно к числовому, строковому, логическому типу.

### Неявное преобразование (string)
Если к строке прибавить (конкатенация) что-либо, то получим строку:

    let a = 'Привет' + 35
    console.log(typeof a); // 'string'

    let a = 'Привет' + {}
    console.log(typeof a); // 'string'

### Неявное преобразование (boolean)

    if (a) или a && b

математические функции, выражения, сравнения (кроме строгих)

### Явное преобразование
let g = String(c);
console.log(g, typeof(g)); // строка

Boolean() // логический тип

Number()

### Мягкое преобразование к числу

    var a = '35 apples',
    b = 'pears123',
    c = '20px',
    d = '0.5%';

    console.log(parseInt(a));   // 35
    console.log(parseInt(b));   // NaN
    console.log(parseInt(c));   // 20
    console.log(parseFloat(d)); // 0.5
