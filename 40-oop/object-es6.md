# Объекты в ES6

## Возвращаем объект
Возвращаем объект:

    const createCar = (brand, model) => { 
        return { brand, model }
    }
    const ford = createCar('Форд', 'Фокус')

    console.log(ford) // Object { brand: "Форд", model: "Фокус" }

Сокращаем до одной строки. Объект оборачиваем в круглые скобки:

    const createCar = (brand, model) => ({ brand, model })
    const ford = createCar('Форд', 'Фокус')

## Динамические поля
Появилась возможность динамически задавать имена ключей (полей) в объектах:

    const ford = {
        brand: 'Ford',
        ['model ' + Math.floor(Math.random() * 1000)]: 'Focus'
    }

    console.log(ford)

Задаём имена полей через значения переменных:

    const yearField = 'year'

    const ford = {
        brand: 'Ford',
        [yearField]: 2018
    }

    console.log(ford)

В методе, выводим имена всех полей, в том числе и динамических.

    const yearField = 'year'

    const ford = {
        brand: 'Ford',
        ['model']: 'Focus',
        [yearField]: 2018,

        logFields() {
            console.log(this.brand, this.model, this.year)
        }
    }

    console.log(ford)
    ford.logFields()

## Деструктуризация
Деструктуризация часто применяется в JavaScript модулях: import, export.

Убираем this:

    const yearField = 'year'

    const ford = {
        brand: 'Ford',
        ['model']: 'Focus',
        [yearField]: 2018,

        logFields() {
            const {brand, model, year} = this
            console.log(brand, model, year)
        }
    }

    console.log(ford)
    ford.logFields()

Эти две записи идентичны:

    // const year = ford.year
    const {year} = ford

    console.log(year) // 2018
