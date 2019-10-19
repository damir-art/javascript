# Объекты

## Возвращаем объект
Возвращаем объект:

    const createCar = (brand, model) => { 
        return { brand, model }
    }
    const ford = createCar('Форд', 'Фокус')
    console.log(ford)

Сокращаем до одной строки. Объект оборачиваем в круглые скобки:

    const createCar = (brand, model) => ({ brand, model })
    const ford = createCar('Форд', 'Фокус')

## Динамические поля
Появилась возможность динамически задавать имена ключей (полей) в объектах:

    const ford = {
        brand: 'Ford',
        ['model: ' + Math.floor(Math.random() * 1000)]: 'Focus'
    }

    console.log(ford)
    
Задаём имена полей через значения переменных:

    const yearField = 'year'

    const ford = {
        brand: 'Ford',
        [yearField]: 2018
    }

    console.log(ford)

## Деструктуризация
Деструктуризация, убираем this:

    const ford = {
        brand: 'Ford',
        model: 'Focus',
        year: 2018,

        logFields() {
            const {brand, model, year} = this
            console.log(brand, model, year)
        }
    }

    console.log(ford)
    ford.logFields()
