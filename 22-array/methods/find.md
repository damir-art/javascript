# find()
find() - поиск значения по массиву. Методы find() и findIndex() удобны при работе с массивами объектов. Возвращает найденный элемент. Чтобы найти все элементы, воспользуйтесь методом `filter()`.

Схема метода:

    let res = arr.find( function(item, index, array) {
        // true - возвращает найденный элемент, перебор останавливается
        // false - возвращает `undefined` если элемент не найден
    })

Пример:

    const users = [
        { id: 0, name: 'Ivan' },
        { id: 1, name: 'Petr' }
    ]
    let find = users.find(item => item.id == 0) // { id: 0, name: "Ivan" }
    console.log(find.name)                      // Ivan

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
