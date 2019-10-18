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

Динамические поля и удобные методы в объектах:

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
