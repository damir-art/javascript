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
        ['model: ' + Math.floor(Math.random() * 1000)]: 'Focus',
    }

    console.log(ford)
    
Пример:

    const yearField = 'year'

    const ford = {
        brand: 'Ford',
        // ['model' + Math.random()]: 'Focus ST', // RS
        ['model']: 'Focus',
        [yearField]: 2018,

        logFields() {
            console.log(this.brand, this.model, this.year)
        }
    }

    console.log(ford)
    ford.logFields()

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
