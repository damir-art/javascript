# for of `ES6 - 2015`
Цикл перебора итерируемых объектов (объекты, массивы, строки и т.д.), на каждом шаге, переменной присваивается значение нового элемента массива.

    for (const item of object) {
        инструкции
    }

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing']

    for (const city of cities) {
        console.log(city)
    }
