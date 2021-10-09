# find()
find() - поиск значения по массиву.

- запускает для каждого элемента массива функцию
- функция возвращает `true` если элемент найден
- функция возвращает значение элемента
- находит только первый элемент
- если элемент не найден, то возвращает `undefined`
- не работает со строками

Пример:

    const a = [2, 4, 6, 8, 10, 12, 14]

    const b = a.find( item => {
        if (item === 4) {
            return true
        }
    })

    console.log(b) // 4

- можно использовать логические операции `if ((item >= 18) && (item <= 36))`

## Поиск по JSON

    const a = [
        { name: 'Ivan',  age: 33 },
        { name: 'Petr',  age: 45 },
        { name: 'Sidor', age: 27 }
    ]

    const b = a.find( item => {
        if (item.age === 33) {
            return true
        }
    })

    console.log(b) // Object { name: "Ivan", age: 33 }
