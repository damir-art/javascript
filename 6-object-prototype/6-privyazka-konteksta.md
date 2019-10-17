# Привязка контекста
Еще парочка способов управления контекстом. Создадим функцию которая будет печатать объект и его свойства.

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

    var bmw = {
        brand: 'BMW',
        model: '3',
        year: 2006,
        colors: ['green', 'black'],
        getBrand: function() {
            console.log('Brand:', this.brand)
        }
    }

    var printFord = printObj.bind(ford)
    printFord(ford)
