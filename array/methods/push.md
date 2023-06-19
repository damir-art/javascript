# push()
Метод **push()** позволяет добавлять один или несколько элементов в конец массива.

    const a = [ 'Москва', 'Берлин', 'Пекин', 'Лондон', 'Париж' ];

    console.log(a)
    console.log(a.push('Токио')) // 6
    console.log(a)

- можно добавить несколько элементов `a.push('Токио', 'Рим')`,
- push() возвращает длину массива.

`push('Токио')` это аналог выражения `a[a.length] = 'Токио'`.

Добавляет элемент(ы) в конец массива, возвращает количество элементов в массиве.

Пример: 

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing']
    console.log(cities.push('Vein')) // 6
    console.log(cities)

    // добавляем несколько городов
    console.log(cities.push('Rome', 'Vein'))

`arr.push(el)` аналогичен `arr[arr.length] = el`
