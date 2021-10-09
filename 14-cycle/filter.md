# filter()

filter() - фильтрация исходного массива. Похожая на `map()`, но длина исходного массива может не совпадать с длиной нового. Также filter() возвращает элемент массива на основании `true/false`.

В результате применения `filter()` получаем новый массив, который содержит элементы старого массива прошедшие по условиям.

    const a = [1, 2, 3, 4, 5]

    const b = a.filter( item => {
        if ( item > 2 ) {
            // return item
            return true
        }
    })

    console.log(b) // [ 3, 4, 5 ]

- в item попадает каждый из элементов исходного массива
- если функция-калбек возвращает true, то элемент добавляется в новый массив
- строка `return item` возвращает `true/false`, а не `item`, поэтому в отличии от `map()`, здесь операции (например `+`), не сработают
- рекомендуется записывать как `return true` или `return false`, чтобы исключить неявных ошибок например когда элемент равен `0`

`filter( (el, ind, arr) => {} )` - выбирает элементы массива, который соответствует одному специфическому значению.

## Пример

    const a = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    const b = a.filter( item => {
        return false // []
        return true // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    })

    console.log(b)

Пример с условием:

    const a = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    const b = a.filter( item => {
        // return false // []
        if (item > 4) return true
    })

    console.log(a) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    console.log(b) // [ 5, 6, 7, 8, 9 ]

Пример с JSON, выбираем по возрасту `>= 18` и сортируем от большего к меньшему:

    const names = [
        { name: 'Ivan',  age: 33 },
        { name: 'Petr',  age: 14 },
        { name: 'Sidor', age: 27 },
        { name: 'Sasha', age: 22 },
        { name: 'Vova',  age: 16 }
    ]

    const ages = names
        .filter(item => item.age >= 18)
        .sort((a, b) => (b.age - a.age))

    console.log(names)
    console.log(ages)