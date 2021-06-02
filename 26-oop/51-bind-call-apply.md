# Привязка контекста
Статью и примеры переписать!
Еще три способа управления контекстом. Создадим функцию которая будет печатать объект и его свойства.

## bind()
Метод `bind()` возвращает новую функцию, с привязанным контекстом.

    function printObj(objName) {
        console.log(objName)
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(key, this[key])
            }
        }
    }

    var ford = {
        brand: 'Ford',
        model: 'Focus',
        year: 2004,
        colors: ['green', 'red', 'blue'],
        getBrand: function() {
            console.log('Brand:', this.brand)
        }
    }

    var printFord = printObj.bind(ford)
    printFord(ford)

## call()
`call()` то же что и bind(), плюс еще и вызывает эту функцию. Первый аргумент `контекст`, остальные аргументы это параметры функции, через запятую. 

    printObj.call(ford, 'Ford')

## apply()
`apply()` то же что и call(), аргументы массивом.

    printObj.apply(ford, ['Ford'])
