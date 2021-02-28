# Классы
Благодаря ОПП и трем его китам можно создавать классы.

- класс - описание, каркас будущего объекта
- в классе между свойствами и методами запятую не ставят
- `new` это ключевое слово, которое позволяет создавать объекты из каркаса (прототипа)
- `class Calc` - каркас, прототип
- `extends` - расширение
- `super` - экземпляр родительского класса

Пример создания класса и наследования:

    // создаём класс
    class Calc {
        sum (a, b) {
            return a + b
        }
        diff (a, b) {
            return a - b
        }
        mul (a, b) {
            return a * b
        }
        div (a, b) {
            return a / b
        }
    }

    // создаём экземпляр класса
    const calc = new Calc()

    // наследование класса
    class sqrCalc extends Calc {
        sum (a, b) {
            return super.sum(a, b) ** 2
        }
        diff (a, b) {
            return super.diff(a, b) ** 2
        }
        mul (a, b) {
            return super.mul(a, b) ** 2
        }
        div (a, b) {
            return super.div(a, b) ** 2
        }
    }

## Разное
- JavaScript использует прототипно-ориентированное наследование
