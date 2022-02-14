# findIndex()
Тоже самое что и find(), но возвращает индекс элемента или `-1` если элемент не найден.

    const users = [
        { id: 0, name: 'Ivan' },
        { id: 1, name: 'Petr' }
    ]
    let find = users.findIndex(item => item.id == 0) // 0
    console.log(users[find].name) // Ivan

findIndex() - поиск индекса по массиву.

Работает аналогично методу `find()`.

- возвращает индекс элемента
- если совпадений не найдено то возвращает `-1`
- не работает со строками

Пример:

    const a = [2, 4, 6, 8, 10, 12, 14]

    const b = a.findIndex( item => {
        if (item === 4) {
            return true
        }
    })

    console.log(b) // 1
