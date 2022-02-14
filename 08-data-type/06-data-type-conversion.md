# Преобразование типов данных
Преобразование *(приведение)* типов данных в JavaScript бывает явным и неявным. Преобразовывать можно к числовому, строковому, логическому типу.

## Неявное преобразование

### string
Если к строке прибавить (конкатенация) что-либо, то получим строку:

    let a = 'Привет' + 35
    console.log(typeof a); // 'string'

    let a = 'Привет' + {}
    console.log(typeof a); // 'string'

- Здесь плюс `+` это оператор конкатенации.
- alert() приводит значения к строке

### number
Если к числу `"5"` с типом данных строка, подставить знак плюс `+"5"`, то строка превратиться в число `5`. Это обычно применяют при получении числовых данных из форм.

Здесь плюс `+` это унарный оператор.

Любая математическая операция (кроме конкатенации со строками), внутри которых будут числа, преобразует значения к числу:

    '6' * '3' // получим 18, это называется динамическое приведение типов

### boolean
Появляется в операциях сравнения и логических:

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

    !!0 === false
    !!1 === true

## Явное преобразование

### String(), .toString()
    let a = String('строка')
    console.log(a, typeof(a)) // строка string

    let num = 10
    console.log(typeof num)            // number
    console.log(typeof String(num))    // string
    console.log(typeof num.toString()) // string

    5..toString() // чтобы значение (число), а не переменную, нужно использовать две точки

### Number()
    let b = Number('строка');
    console.log(b, typeof(b)); // NaN number

- явное преобразование чисел например можно использовать при получение данных из форм
- Number('str') - пробельные символы обрезаются
- Number(undefined) - NaN
- Number(null) - 0

### Boolean()
    let c = Boolean('строка');
    console.log(c, typeof(c)); // true boolean

- false - пустая строка, 0, null, undefined, NaN

## Мягкое преобразование к числу
Функции `parseInt()` и `parseFloat()`:

    let a = '35 apples',
    b = 'pears123',
    c = '20px',
    d = '0.5%';

    console.log(parseInt(a));   // 35
    console.log(parseInt(b));   // NaN
    console.log(parseInt(c));   // 20
    console.log(parseFloat(d)); // 0.5
