# filter()
Метод `find()` ищет один элемент в массиве и возвращает его. Метод `filter()` ищет множество элементов и возвращает их массивом.

Схема:

    let res = arr.filter( function(item, index, array) {
        // true - элемент добавляется в массив, перебор продолжается
        // false - возвращает пустой массив, если элементы не найдены
    })

Пример:

    const users = [
        { id: 0, name: 'Ivan' },
        { id: 1, name: 'Petr' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Kent' },
    ]

    let filter = users.filter(item => item.id >= 2)
    console.log(filter) // массив из двух объектов
