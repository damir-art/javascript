# every()
- every() запускает для каждого элемента, функцию, если функция для всех элементов возвратит `true`, то функция возвращает `true`, иначе `false`
- функция калбэк может принимать несколько аргументов: элемент, индекс, массив
- every(), если массив пустой, то будет возвращен `true`, независимо от условия или даже его отсутствия, а например присутствия только лишь строки `return false`

Пример:

    const a = [ 1, 2, 3, 4, 5 ]
    const b = a.every( item => {
        if ( item > 0 ) {
            return true
        }
    })

    console.log(b) // true

- every() проверяет каждый элемент на какое либо условие

## Пример с JSON

    const a = [
        { name: 'Ivan ', age: 33 },
        { name: 'Petr',  age: 45 },
        { name: 'Sidor', age: 27 },
        { name: 'Marat', age: 17 }
    ]

    const b = a.every( item => {
        if ( item.age > 18 ) {
            return true
        }
    })

    console.log(b) // false
