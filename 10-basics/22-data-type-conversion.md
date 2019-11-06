# Преобразование типов данных
Преобразование бывает явным или неявным (операторы). Преобразовывать можно к числовому, строковому, логическому.

Проверяем тип значения:

    let a = 'apple'
    let b = 35
    let c = false
    let d

console.log(typeof(a)); // 'string'
console.log(typeof(b)); // 'number'
console.log(typeof(c)); // 'boolean
console.log(typeof(d)); // 'undefined'
console.log(typeof(e)); // ''

typeof() // возвращает строку

## Неявное преобразование

    'строка' + что-то
    let f = a + d;
    console.log(f, typeof(f));

    if (a) или a && b

математические функции, выражения, сравнения (кроме строгих)

## Явное преобразование
let g = String(c);
console.log(g, typeof(g)); // строка

Boolean() // логический тип

Number()

## Мягкое преобразование к числу

    var a = '35 apples',
    b = 'pears123',
    c = '20px',
    d = '0.5%';

    console.log(parseInt(a));   // 35
    console.log(parseInt(b));   // NaN
    console.log(parseInt(c));   // 20
    console.log(parseFloat(d)); // 0.5
