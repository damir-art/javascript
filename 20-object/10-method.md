# Методы объекта
Создадим объект `user` и метод `sayHello()`:

    const user = {
        name: 'Иван',
        age: 27,
    }

    user.sayHello = function () {
        console.log('Hello')
    }

    user.sayHello()
    user['sayHello']()

Еще два способа создания метода:

    const user = {
        ...
        sayHello: function () {
            console.log('Hello')
        }
    }

    const user = {
        ...
        sayHello () {
            console.log('Hello')
        }
    }

## Разное
- методы позволяют объектам действовать
- методы ссылаются на текущий объект через `this`
