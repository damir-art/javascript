# Что такое контекст
Создадим объект и на примере объекта рассмотрим понятие контекста.

    var ford = {
        brand: 'Ford',
        model: 'Focus',
        year: 2004,
        getBrand: function() {
            console.log('Barnd:', this.brand)
            console.log('Model:', this.model)
            console.log('Year:', this.year)
        }
    }

    ford.getBrand()

## setTimeout()
Изучать контекст будем через функцию setTimeout().

    // через 1 секунду, запустится код размещенный в function
    setTimeout(function(){
        return 'Hello setTimeout';
    }, 1000)

setTimeout() в объекте, данный пример не сработает, поскольку setTimeout() находится в контексте окна `window`:

    var ford = {
        brand: 'Ford',
        model: 'Focus',
        year: 2004,
        getBrand: function(ms) {
            setTimeout(function() {
                console.log('Barnd:', this.brand)
                console.log('Model:', this.model)
                console.log('Year:', this.year)
            }, ms)
        }
    }

    ford.getBrand(5000)

Создаём для setTimeout() контекст объекта `ford`. Чтобы манипулировать контекстом, можно воспользоваться несколькими способами. Сначала проверим в консоли, что такое `this` внутри функций getBrand() и setTimeout():

    console.log(this) // ford
    console.log(this) // window

### Способ №1 `self, that, _this`

    var ford = {
        brand: 'Ford',
        model: 'Focus',
        year: 2004,
        getBrand: function(ms) {
            // console.log(this)
            var self = this

            setTimeout(function() {
                // debugger
                // console.log(this)
                console.log('Brand:', self.brand)
                console.log('Model:', self.model)
                console.log('Year:', self.year)
            }, ms)
        }
    }

    ford.getBrand(2000)

### Способ №2 `bind()`
