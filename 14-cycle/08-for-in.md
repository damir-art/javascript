# for in
Цикл для прохода по свойствам объекта, не рекомендуется применять для массивов.

    for (const key in object) {
        инструкции
    }

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing']

    for (const city in cities) {
        console.log(city + ': ' + cities[city])
    }
