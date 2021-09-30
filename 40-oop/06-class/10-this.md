# this
По-умолчанию, this указывает на Window:

    console.log(this) // Window

## this в функциях

### this в обработчике события
Указывает на тот элемент на котором произошло событие.

    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function() {
        console.log(this) // <button class="btn">
    })

### this в стрелочной функции
У стрелочных функций нет своего контекста. Стрелочная функция, это анонимная функция не имеющая своего контекста.

    const btn = document.querySelector('.btn')

    btn.addEventListener('click', () => {
        console.log(this) // Window
    })

## this в ООП
- в рамках класса `this` указывает на объект, созданный с помощью оператора `new`, на основе данного класса
- `this` указывает на текущий объект

    class User {
        constructor(userName) {
            this.userName = userName
        }
    }

    const client = new User('Alex')
    console.log(client) // Object { userName: "Alex" }

### this в методах класса
this в методах класса, указывает на сам объект:

    class User {
        constructor(userName) {
            this.userName = userName
        }
        showThis() {
            console.log(this)
        }
    }

    const client = new User('Alex')
    client.showThis() // Object { userName: "Alex" }