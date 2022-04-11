# Установка контекста

## call
`call` - вызывает функцию, явно устанавливая контекст.

    const user = { name: 'Юзер' }
    const admin = { name: 'Админ' }

    function getName () {
        console.log( this.name )
    }

    getName()           // Пусто
    getName.call(user)  // Юзер
    getName.call(admin) // Админ

С аргументами:

    getName.call(user, 'Привилегия', 3)  // Юзер Привилегия 3
    getName.call(admin, 'Привилегия', 1) // Админ Привилегия 1

## apply
`apply` - тоже самое что и call но аргументы передаёт в виде массива.

    function getName (...args) {
        let [a, b] = args
        console.log( `${this.name} ${a} ${b}` )
    }

    getName.apply(user, ['Привилегия', 3])  // Юзер Привилегия 3
    getName.apply(admin, ['Привилегия', 1]) // Админ Привилегия 1

## bind
При передаче методов объектов в качестве колбэков, возникает потеря контекста (this).
`this` теряется как только метод передаётся отдельно от объекта. `bind` позволяет зафиксировать `this`.

    const user = { 
        name: 'Юзер',
        getName () {
            console.log( this.name )
        }
    }

    setTimeout(user.getName, 1000) // пусто

`пусто`, потому что `setTimeout()` устанавливает `this` как `window`.

Решение:

    setTimeout(function () {
        user.getName() // анонимная функция, скобки
    }, 1000)

Более надежное решение, через `bind`:

    const user = { 
        name: 'Юзер'
    }
    function getName () {
        console.log(this.name)
    }
    let bindGetName = getName.bind(user)
    bindGetName()

`bind` с аргументами:

    const user = { 
        name: 'Юзер',
    }

    function getName (a) {
        console.log(`${this.name} ${a}`)
    }
    let bindGetName = getName.bind(user)
    bindGetName('hello')

`bind` с методом объекта и `setTimeout()`:

    const user = { 
        name: 'Юзер',
        getName () {
            console.log( 'Привет: ' + this.name )
        }
    }

    let bindGetName = user.getName.bind(user)

    bindGetName() // сразу

    setTimeout( bindGetName, 1000) // через 1 сек

`bind` с методом объекта и `setTimeout()` с аргументами:

    const user = { 
        name: 'Юзер',
        getName (a) {
            console.log( a + ' ' + this.name )
        }
    }

    let bindGetName = user.getName.bind(user)

    bindGetName('Привет') // сразу

    setTimeout( bindGetName, 1000, 'Привет') // через 1 сек
