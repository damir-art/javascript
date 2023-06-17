# reduce
reduce - итерирует массив, однократно. Используется для вычисления единого значения на основе всего массива. Вычисляет единое значение на основе всего массива.

    const a = [ 'russia', 'usa' ]

    const b = a.reduce( (aItem, current) => {
        return aItem + ' ' + current
    })

    console.log(b)        // russia usa
    console.log(typeof b) // string

Схема:

    const A = "Это добавится перед началом result: ";

    const arr = ['moskva', 'piter']

    const result = arr.reduce((accumulator, item, index, array) => {
        // return accumulator + item

        // Ставим пробел между словами и не ставим его в конце последнего элемента
        let message = accumulator + item

        if(index !== (array.length-1)) {
            message += ', ';
        } else {
            message += '.';
        }

        return message
    }, A)

    console.log(result)
