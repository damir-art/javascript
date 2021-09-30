# set/get методы
Методы для работы с защищёнными и приватными свойствами.

При создании объекта данные для конструктора не указываем. Данные свойствам присываиваем через методы `set`.

    class User {
        constructor() {
            // this._userName = userName
        }
        setUserName(userName) {
            this._userName = userName
            // this._userName = userName.trim().toLowerCase() // удаляем пробелы, регулируем регистр
        }
    }

    const client = new User()
    client.setUserName('Alex')

    console.log(client) // Object { _userName: "Alex" }

В JavaScript есть методы `get/set` которые упрощают этот код.

## Метод set (сеттер)
Вставить данные.

    class User {
        constructor() {
            // this._userName = userName
        }
        set userName(userName) {
            this._userName = userName
        }
    }

    const client = new User()
    client.userName = 'Alex' // Данные вставляем через метод

    console.log(client) // Object { _userName: "Alex" }

## Метод get (геттер)
Получить данные.

    class User {
        constructor() {
            // this._userName = userName
        }
        set userName(userName) {
            this._userName = userName
        }
        get userName() {
            return this._userName
        }
    }

    const client = new User()
    client.userName = 'Alex'

    console.log(client) // Object { _userName: "Alex" }
    console.log(client.userName) // 'Alex'

Эта строка `console.log(client.userName) // 'Alex'` не будет работать без метода `get` в конструкторе. Получаем контролируемый доступ к свойству.

## Итого
- свойство с нижним подчеркиванием `_userName` - приватное/защищённое
- чтобы получить доступ к приватным свойствам нужен геттер `get`
