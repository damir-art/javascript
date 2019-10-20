# Классы и наследование
Классы и наследования в JavaScript (ES6). Создадим корневой элемент, от которого будут наследоваться другие элементы.

## Создание класса

    class RootElement {
        // специальное ключевое слово
        constructor(tagName = 'div') {
            this.$el = document.createElement(tagName)
        }
    }

## Создание класса наследника

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

## Создание объекта от класса наследника
Создание объекта от класса наследника, в качестве параметров передаём: цвет, размер, имя тега. Передаём в конструктор класса `Box`.

    const redBox = new Box()
    redBox.create()
