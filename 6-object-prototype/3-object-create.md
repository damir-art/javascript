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

## getOwnPropertyDescriptor

## Ссылки
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getownpropertydescriptor - value и остальные
* writable - запрет на изменение значения свойств
* configurable - запрет на изменение / удаление свойств
* enumerable - открыть / закрыть свойство для чтения
