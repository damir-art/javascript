# Как работает прототип?
Рассмотрим работу `new`. Объекты в JS можно создавать двумя способами, через `{ }` и через класс *(функцию-конструктор)*.

    // создание класса, this - ссылается на создаваемый объект
    function Car(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    // new говорит о том что функция это класс
    // new возвращает объект 'return this'
    var ford = new Car('Ford', 'Focus', 2003)
    var bmw = new Car('BMW', '320i', 1999)

    console.log(ford)
    console.log(bmw)
    
    // создаем методы для функции конструктора через прототип
    // данный метод появится у всех объектов потомков
