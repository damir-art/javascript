# Что такое контекст
Создадим объект и на примере объекта рассмотрим понятие контекста.

    const auto = {
      brand: 'Ford',
      model: 'Focus',
      year: 2004,
      getAuto: function() {
        console.log('Barnd:', this.brand) // Barnd: Ford
        console.log('Model:', this.model) // Model: Focus
        console.log('Year:', this.year)   // Year: 2004
      }
    }

    auto.getAuto();

## setTimeout()
Изучать контекст будем на примере функции setTimeout(). Сделаем так чтобы данные об автомобиле появлялись через 1 секунду.

setTimeout() в объекте не сработает, поскольку setTimeout() находится в контексте окна `window`:

    const auto = {
      brand: 'Ford',
      model: 'Focus',
      year: 2004,
      getBrand: function(ms) {
        setTimeout(function() {
          console.log('Barnd:', this.brand) // Barnd: undefined
          console.log('Model:', this.model) // Model: undefined
          console.log('Year:',  this.year)   // Year: undefined
        }, ms)
      }
    }

    auto.getBrand(1000)

Проверяем, что хранит в себе `this` внутри метода `getBrand()`, с `setTimeout()` и без:

    getBrand: function() {
      console.log(this)   // Object

      setTimeout(function() {
        console.log(this) // Window
      })
    }

Чтобы манипулировать контекстом, можно воспользоваться несколькими способами. 

## Способ №1 `self, that, _this`
Присваиваем `this` переменной `self`:

    const auto = {
      brand: 'Ford',
      model: 'Focus',
      year: 2004,
      getBrand: function(ms) {
        console.log(this)   // Object
        const self = this

        setTimeout(function() {
          console.log(this) // Window
          console.log(self) // Object

          console.log('Brand:', self.brand)
          console.log('Model:', self.model)
          console.log('Year:', self.year)
        }, ms)
      }
    }

    auto.getBrand(1000)

### Способ №2 `bind()`

    const auto = {
      brand: 'Ford',
      model: 'Focus',
      year: 2004,
      getBrand: function(ms) {
        setTimeout(function() {
          console.log('Barnd:', this.brand)
          console.log('Model:', this.model)
          console.log('Year:', this.year)
        }.bind(this), ms)
      }
    }

    auto.getBrand(1000)
