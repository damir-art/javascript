# slice()
slice() - вырезает элементы из массива, возвращает новый массив. Не изменяет исходный массив.

    const a = ['Москва', 'Берлин', 'Пекин', 'Лондон', 'Париж']

    console.log(a)

    let b = a.slice(3)
    console.log(b) // [ 'Лондон', 'Париж' ]

    console.log(a)

    let c = a.slice(2, 4)
    console.log(c) // [ 'Пекин', 'Лондон' ]

- slice(2, 4) - вырезает от 2-го индекса, до 4-го (не включается)
- slice() используется при если нужно саздать массив на основе исходного, не изменяя его. Элементы копируются последовательно
- можно применять отрицательные значения аргументов
- можно применять к строкам