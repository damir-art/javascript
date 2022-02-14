# map()
Пребразует массив. Один из наиболее полезных и частоиспользуемых методов. Вызывает функцию для каждого элемента массива.

Схема:

    const res = arr.map(function (item, index, array) {
        // создаётся новый массив
    })

Пример:

    const cities = ['Moscow', 'London', 'Berlin']

    const newCities = cities.map((item) => item + 1)

    console.log(cities)    // [ "Moscow", "London", "Berlin" ]
    console.log(newCities) // [ "Moscow1", "London1", "Berlin1" ]