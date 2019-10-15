# Object.create()

Рассмотрим способ создания объекта через `Object.create()`. Object - самый глобальный класс в JavaScript. В методе create(), первый параметр это прототип объекта, второй параметр это свойства объекта.

    var car = Object.create({прототип}, {свойства})

Пример:

    var ford = Object.create(
    {
        calculateDistancePerYear: function() {
            console.log('calculate')
        }
    }, {
        brand: { value: 'Ford' },
        model: { value: 'Focus' },
        year: { value: 1999 },
        distance: { value: 125000 }
    })

    console.log(ford)

## getOwnPropertyDescriptor()
    var ford = Object.create(
    {
        calculateDistancePerYear: function() {
            // вычисляем возраст авто
            return new Date().getFullYear() - this.year
        }
    }, {
        brand: {
            value: 'Ford',      // значение свойства
            enumerable: true,   // свойство видно при перечислении
            writeble: false,    // не можем изменять поле 'brand'
            configurable: false // не можем удалить поле 'brand'
        },
        model: { 
            value: 'Focus',
            enumerable: true,   // подсвечивается в консоли
            writeble: false,
            configurable: false
        },
        year: {
            value: 1999,
            enumerable: true,
            writeble: false,
            configurable: false
        },
        distance: {
            value: 125000,
            enumerable: true,
            writeble: true,
            configurable: false
        }
    })

    console.log(ford.calculateDistancePerYear())

### get(), set()
С помощью данных функций, можно отслеживать изменения определённых ключей в объекте.

    get() // возвращает значение свойства
    set() // изменяет значение свойства

Добавим к нашему скрипту свойство `age` с методами `get()` и `set()`:

    var ford = Object.create(
    {
        calculateDistancePerYear: function() {
            // Задаём свойство
            Object.defineProperty(this, 'distancePerYear', {
                // вычисляем сколько машина проезжает за год
                value: this.distance / this.age,
                enumerable: true,
                writeble: false,
                configurable: false
            })
        }
    }, {
        brand: {
            value: 'Ford',      // значение свойства
            enumerable: true,   // свойство видно при перечислении
            writeble: false,    // не можем изменять поле 'brand'
            configurable: false // не можем удалить поле 'brand'
        },
        model: { 
            value: 'Focus',
            enumerable: true,   // подсвечивается в консоли
            writeble: false,
            configurable: false
        },
        year: {
            value: 1999,
            enumerable: true,
            writeble: false,
            configurable: false
        },
        distance: {
            value: 125000,
            enumerable: true,
            writeble: true,
            configurable: false
        },
        age: {
            enumerable: true,
            get: function() {
                // вызывается в момент обращения к age
                console.log('Возраст авто:')
                return new Date().getFullYear() - this.year
            },
            set: function() {
                console.log('Устанавливаем значение')
            }
        }
    })

Заного в консоли наберите `ford`, появятся новые свойства у объекта. Также набираем:

    ford.age // пишем без скобок
    ford.age = 5 // Устанавливаем значение
    ford.calculateDistancePerYear()
    ford  // в консоли в свойстве distancePerYear есть ответ

## Получаем свойства объекта, через перебор

Цикл `for in` проходит по объекту и прототипу.

    for (key in ford) {
        console.log(key)
    }

## Ссылки
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getownpropertydescriptor - value и остальные
* writable - запрет на изменение значения свойств
* configurable - запрет на изменение / удаление свойств
* enumerable - открыть / закрыть свойство для чтения
