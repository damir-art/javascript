# f.prototype
У функции конструктора есть свойство `prototype`, с помощью него, объекты создаваемые функцией конструктором, могут наследовать свойства/методы других объектов.

    const email = {
        isRu: true
    }

    function User(userName) {
        this.userName = userName
    }

    console.log(User.prototype) // Object { }

Объект созданный от конструктора, наследует свойства/методы `email`:

## constructor
У каждой функции есть свойство `prototype`. `prototype` - это объект у которого есть свойство `constructor`.

    User.prototype = { constructor: User }
    User.prototype.constructor == User // true

`constructor` функции, доступен его объектам:

    const ivan = new User()
    ivan.constructor == User // true
