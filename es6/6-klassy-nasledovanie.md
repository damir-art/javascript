# Классы и наследование
Классы и наследования в JavaScript (ES6). Создадим корневой элемент, от которого будут наследоваться другие элементы.

## Создание класса

    class RootElement {
        // специальное ключевое слово
        constructor(tagName = 'div') {
            this.$el = document.createElement(tagName)
        }
    }

### Создание класса наследника

    // Создание класса наследника
    class Box extends RootElement {
        constructor(color, size = 150, tagName) {
            // вызываем конструктор родительского класса, чтобы получить доступ к его полям
            super(tagName)
            
            this.color = color
            this.size  = size
        }
        
        // метод создающий переменную (объект)
        create() {
            console.log(this)
        }
    }

### Создание объекта от класса наследника
Создание объекта от класса наследника, в качестве параметров передаём: цвет, размер, имя тега. Передаём в конструктор класса `Box`.

    const redBox = new Box()
    redBox.create()

## Полный скрипт
В `index.html` записываем:

    <div class="wrapper"></div>

В `script.js` записываем:

    class RootElement {
        constructor(tagName = 'div') {
            this.$el = document.createElement(tagName)
            this.$el.style.marginBottom = '20px'
        }

        hide() {
            this.$el.style.display = 'none'
        }
        show() {
            this.$el.style.display = 'block'
        }

        append() {
            // вставляем получившийся элемент в HTML
            document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.$el)
        }
    }

    class Box extends RootElement {
        constructor(color, size = 150, tagName) {
            super(tagName)
            this.color = color
            this.size  = size
        }

        create() {
            console.log(this.$el)
            this.$el.style.backgroundColor = this.color
            this.$el.style.width = this.$el.style.height = `${this.size}px`
            this.append()

            // не обязательно
            return this
        }
    }

    // Создадим класс круга
    class Circle extends RootElement {
        constructor(color) {
            super()
            this.color = color
        }
        create() {
            console.log(this.$el)
            this.$el.style.backgroundColor = this.color
            this.$el.style.borderRadius = '50%'
            this.$el.style.width = this.$el.style.height = '120px'
            this.append()

            // не обязательно
            return this
        }
    }

    const blueBox = new Box('blue').create()
    const redBox = new Box('red', 100, 'div')
    redBox.create()

    const circle = new Circle('green').create()

    blueBox.$el.addEventListener('mouseenter', function() {
        blueBox.hide()
    })

    blueBox.$el.addEventListener('mouseleave', function() {
        blueBox.show()
    })

    // переменную $el, лучше назвать $targetEl
