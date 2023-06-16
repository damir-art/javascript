# includes()
includes() - можно использовать в условиях вместо indexOf(). Возвращает `true` или `false`.
- применяется там где нужно узнать, есть элемент в массиве или нет

Пример:

    const a = ['Москва', 'Берлин', 'Пекин', 'Лондон', 'Токио', 'Париж']
    console.log(a.includes('Пекин')) // true

    console.log(a.includes('Пекин', 2)) // указываем с какой позиции искать

## includes() и строки
Работаем со строками, ищет символы в строке:

    const a = 'Москва'
    console.log(a.includes('ос')) // true

## includes() и JSON

    const users = [
        { name: 'Ivanov', age: 27 }
        { name: 'Petrov', age: 25 }
        { name: 'Sidorov', age: 18 }
    ]

    const user = users.filter( item => item.name.includes('ov') )
    console.log( user )
