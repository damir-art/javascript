# Объекты

Возвращаем объект:

    const createCar = (brand, model) => { 
        return { brand, model }
    }
    const ford = createCar('Форд', 'Фокус')
    console.log(ford)

Объект в одну строку, оборачиваем в круглые скобки:

    const createCar = (brand, model) => ({ brand, model })
    }
    const ford = createCar('Форд', 'Фокус')
