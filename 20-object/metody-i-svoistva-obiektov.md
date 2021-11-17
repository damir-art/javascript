# Методы и свойства объектов

## in
Проверяем свойство на существование:

    obj.val === undefined // если true то свойства не существует

Проверяем через `in`:

    'key' in obj // если true то свойство существует

## for in
Выводит ключи объекта.

    const a = {
        name: 'Иван',
        lastname: 'Иванов',
        age: 27,
        programmer: true
    }

    for (let item in a) {
        console.log(item) // вывод имен ключей
    }

## hasOwnProperty()
Проверка ключей `hasOwnProperty()` на то принадлежат ли они объекту, это нужно если вдруг цикл `for in` будет выводить ключи прототипов, созданные программистами (например библиотекой).

    for (let item in a) {
        if (a.hasOwnProperty(item)) {
            console.log(item) // вывод имен ключей, принадлежащих объекту
        }
    }

## Встроенные методы объекта Object

### Object.keys()

    const a = {
        name: 'Иван',
        lastname: 'Иванов',
        age: 27,
        programmer: true
    }

    console.log(Object.keys(a))            // создаёт массив из ключей объекта
    console.log(Object.keys(a).join(', ')) // создать из массива, строку

### Object.values()

    console.log(Object.values(a))            // создаёт массив из значений элементов объекта
    console.log(Object.values(a).join(', ')) // создаёт из массива, строку

### Object.entries()

    console.log(Object.entries(a)) // создаёт массив массивов: "ключ", "значение"

    // избавляемся от вложенности с помощью map
    console.log(
        Object.entries(a)
            .map(([key, value]) => key + ': ' + value) // превращаем в одномерный массив
            .join(', ') // строка
    )

Это `[key, value]` деструктуризация, можно заменить на:

        .map((entry) => {
            return entry[0] + ' ' + entry[1]
        })

### Object.assign()
Клонирование и объединение объектов. Склейка объектов, перенос в результирующий.

    const a = {
        name: 'Иван',
        lastname: 'Иванов',
        age: 27,
        programmer: true
    }

    // имена ключей не должны совпадать
    const b = {
        name1: 'Петр',
        lastname1: 'Петров',
        age1: 23,
        programmer1: false
    }

    console.log(Object.assign({}, a, b)) // создаётся один объект

Если убрать `{}`, то склейка будет по ссылке.

    const c = Object.assign({}, a, b) // сохраняем склеенный объект
