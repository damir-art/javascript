# Преобразование типов данных
Преобразование *(приведение)* типов данных в JavaScript бывает явным и неявным. Преобразовывать можно к числовому, строковому, логическому типу.

## Неявное преобразование

### string
Если к строке прибавить (конкатенация) что-либо, то получим строку:

    let a = 'Привет' + 35
    console.log(typeof a); // 'string'

    let a = 'Привет' + {}
    console.log(typeof a); // 'string'

### boolean
Появляется в операция сравнения и логических:

    let a = 3
    let b = 5
    let c = a < b
    console.log(a > b)    // false
    console.log(typeof c) // boolean

    let a = 3
    let b = 5
    let c = (a > b) || (a < b)
    console.log((a > b) || (a < b)) // true
    console.log(typeof c)           // boolean

## Явное преобразование

### String()
    let a = String('строка');
    console.log(a, typeof(a)); // строка string

### Number()
    let b = Number('строка');
    console.log(b, typeof(b)); // NaN number

### Boolean()
    let c = Boolean('строка');
    console.log(c, typeof(c)); // true boolean

## Мягкое преобразование к числу
Функции `parseInt()` и `parseFloat()`:

    var a = '35 apples',
    b = 'pears123',
    c = '20px',
    d = '0.5%';

    console.log(parseInt(a));   // 35
    console.log(parseInt(b));   // NaN
    console.log(parseInt(c));   // 20
    console.log(parseFloat(d)); // 0.5

## Разное
- поставить `+` перед строкой в виде числа `'5'` строка преобразуется в число `5`, обычно применяют при получении данных из форм
