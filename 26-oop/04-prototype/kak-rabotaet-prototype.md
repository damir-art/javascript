# Как работает прототип?
## Рассмотрим что такое `new`

Объекты в JS можно создавать двумя способами, через литеральный объект `{ }` и через класс *(функцию-конструктор)*.

### Создание класса
Создание класса через функцию-конструктор, имена должны начинаться с большой буквы:

    // this - ссылается на создаваемый объект
    function Car(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

Создание объектов от класса:

    const ford = new Car('Ford', 'Focus', 2003)
    const bmw = new Car('BMW', '320i', 1999)

    console.log(ford) // Car { ... } получаем объект с типом класса 'Car'
    console.log(bmw) 

- `new` говорит о том, что функция это класс.
- `new` возвращает объект, `return this`.

### Создание метода класса
Создаем методы для для класса *(функции-конструктора)*, через прототип. Записываем метод в прототип, данный метод теперь доступен каждому объекту.

    // данный метод появится у всех объектов потомков
    function Car(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    Car.prototype.getAge = function() {
        curentYear = new Date().getFullYear()
        return curentYear - this.year + ' лет'
    }

    var ford = new Car('Ford', 'Focus', 2003)

    console.log(ford)
    console.log(ford.getAge())
 
## Создание свойства класса
Создание свойства через прототип. Зададим всем объектам, цвет по-умолчанию.

    function Car(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    Car.prototype.getAge = function() {
        curentYear = new Date().getFullYear()
        return curentYear - this.year + ' лет'
    }

    Car.prototype.color = 'green'

    var ford = new Car('Ford', 'Focus', 2003)
    var bmw = new Car('BMW', '320i', 1999)

    ford.color = 'red' // переопределили значение по-умолчанию

    console.log(ford)
    console.log(ford.getAge())
    console.log(ford.color)

    console.log(bmw)
    console.log(bmw.getAge())
    console.log(bmw.color)
