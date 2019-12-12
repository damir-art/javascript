# Преобразование типов данных
Преобразование *(приведение)* типов в JavaScript бывает явным и неявным. Преобразовывать можно к числовому, строковому, логическому типу.

## Неявное преобразование
### string
Если к строке прибавить (конкатенация) что-либо, то получим строку:

    let a = 'Привет' + 35
    console.log(typeof a); // 'string'

    let a = 'Привет' + {}
    console.log(typeof a); // 'string'

### boolean
    if (a) или a && b

## Явное преобразование
### String()
    let a = String('строка');
    console.log(a, typeof(a)); // строка

### Number()
    let b = Number('строка');
    console.log(b, typeof(b)); // NaN "number"

### Boolean()
    let c = Boolean('строка');
    console.log(c, typeof(c)); // true "boolean"

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
