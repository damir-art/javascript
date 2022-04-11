# Прототипы
Прототипы в JS это аналоги классов, с помощью прототипов можно расширять наши объекты, подключая к ним дополнительные свойства и методы.

У объектов в JavaScript есть скрытое свойство `[[Prototype]]`. Это свойство ссылается на прототип или `null`.

Свойство которое нет в объекте, ищется в прототипе.

## admin.__proto__ = user
Сделаем объект `user` протипом `admin`:

    const user = {
        name:  'Иван',
        email: 'i@i.ru'
    }

    const admin = {
        isAdmin: true
    }

    admin.__proto__ = user
    
    или

    const admin = {
        isAdmin: true,
        __proto__: user
    }
    
    admin.name = 'Петр'
    admin.email = 'p@p.ru'

    console.log( user.name )     // Иван
    console.log( user.isAdmin )  // undefined
    console.log( admin.name )    // Петр 
    console.log( admin.isAdmin ) // true

`__proto__` - это геттер и сеттер для `[[Prototype]]`, в современном языке его заменяют `Object.getPrototypeOf()`/`Object.setPrototypeOf()` - получают/устанавливают прототип.

## Наследуем методы через прототип

    const user = {
        name:  'Иван',
        email: 'i@i.ru',
        hello() {
            console.log( 'hello' )
        }
    }

    admin.hello() // hello

Наследовать можно друг за другом, несколько объектов, например `superAdmin > admin > user`. Один объект не может наследовать из более чем одного объекта.

## Object.keys(), for...in

    const user = {
        name:  'Иван',
        email: 'i@i.ru',
        hello() {
            console.log( 'hello' )
        }
    }

    const admin = {
        isAdmin: true,
        __proto__: user
    }

    console.log( Object.keys(admin) ) // Array[ "isAdmin" ]
    for(let prop in admin) console.log( prop ) // isAdmin, name, email, hello

- `Object.keys(admin)` - покажет свойства объекта `admin`
- `for(let prop in admin)` - покажет свойство `admin` и наследуемые
- если в цикле не нужны унаследованные то используем `hasOwnProperty`

## Разное
- `[[Prototype]]` - ссылка на `obj.prototype`
- `__proto__` - ссылка на `[[Prototype]]`
- Прототип - это объект на который ссылается `[[Prototype]]`
