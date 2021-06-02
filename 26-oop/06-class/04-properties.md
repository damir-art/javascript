# Свойства
Создаем защищенные и приватные свойсвта. Они необходимы для того чтобы сторонние разработчики не могли их перезаписывать, не имели к ним полного доступа.

    class User {
        constructor(userName) {
            this.userName = userName
        }
    }

    const client = new User('Alex')
    console.log(client)

## Protected
Защищенные свойства. Запрещают назначать новые значения свойствам, напрмер:

    const client = new User('Alex')
    client.userName = 'Smith'

В JavaScript средствами самого языка нельзя создать защищенные свойства. Но можно их обозначить как **защищенные**, чтобы другие программисты воспринимали их так.

Для этого нужно перед именем свойства поставить знак подчеркивания:

     class User {
        constructor(userName) {
            this._userName = userName
        }
    }

см. `get-set-methods.md`

## Private
Приватные методы и свойства, это свойства которые доступны только внутри класса. Эти свойства используют для служебных операций внутри класса. До ES6 приватные свойства можно было создавать только с помощью замыканий.

Перед именем приватного свойства ставится знак `#` (не поддерживаются в FireFox):

    class User {
        constructor() {
            // this._userName = userName
        }
        
        #pivateProperties = 'Приватное свйоство'
    }

    const client = new User()
    console.log(client.pivateProperties) // undefined
    console.log(client.#pivateProperties) // Uncaught SyntaxError

Проверяем приватное свойство на доступность внутри класса.

    class User {
        constructor() {
            // this._userName = userName
        }
        
        #pivateProperties = 'Приватное свойство'

        set userName(userName) {
            console.log(this.#pivateProperties) // Свойство доступно
            this._userName = userName
        }
        get userName() {
            return this._userName
        }
    }

    const client = new User()

    client.userName = 'Alex'     // Приватное свойство

    console.log(client)          // User {_userName: "Alex", #pivateProperties: "Приватное свойство"}
    console.log(client.userName) // 'Alex'

Приватное свойство также доступно и классе наследнике, через методы:

    class UserClient extends User {

    }
    const alex = new UserClient()
    alex.userName = 'Алексей' // Доступно

## Итог
- в приватные свойства помещаются те данные, которые нужны для работы класса, но которые пользователь изменять не должен и обращаться к ним не должен
- пока нет полной поддержки браузерами, лучше вместо приватных свойств использовать защищенные
