# Все типы данных

## Простые типы данных
Простые, примитивные типы данных: string, number, float, boolean, undefined, null

### string

    let a = 'Привет' // 'string' - строка

### number

    let b = 5 // 'number' - целое число

### float

    let c = 5.3 // 'float' - число с плавающей точкой

### boolean
**boolean** &ndash; логический *(булев)* тип данных, может иметь один из двух значений `true` или `false`:

    let a = true  // правда (да)
    let b = false // ложь (нет)

Подробнее познакомимся с ним при работе с логическими операциями.

### undefined
**undefined** &ndash; значение отсутствует. Может появиться при обращении к переменной, которая объявлена, но не инициализирована или которая даже не объявлена.

    let a
    console.log(a) // undefined

### null
**null** &ndash; пустота, может появиться например при условии, если в коде ниже, не будет найден `.out`.

    const out = document.querySelector('.out')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function () {
        console.log(out) // null
    })

## Другие числовые типы данных

### Infinity
**Infinity** &ndash; бесконечность, получается разделив любое число на 0

    let a = 12 / 0
    console.log(a) // Infinity

### NaN
**NaN** *(Not-a-Number, не число)* появляется если в арифметической операции участвует не число.

    let a = 'Hello' * 2
    console.log(a) // NaN

## Сложные типы данных
Сложные типы данных их еще называют ссылочными или объектными.

### Функции

    function a() {

    }
    console.log(a) // ƒ a() { }

### Массивы
В массиве, ключи - это упорядоченные числа от `0` до `arr.length - 1`

    let a
    a = []
    console.log(a) // []

### Объекты
В объектах, порядок ключей не гарантирован языком JavaScript.

    let a
    a = {}
    console.log(a) // {}

Сложные типы данных можно передаются по ссылке.
