# Стрелочные функции
Стрелочные функции - это один из способов написания анонимных функций, не являются их заменой.

- стрелочная функция, это анонимная функция не имеющая своего контекста
- у стрелочных функций отсутсвует `this` (указывает на родительский контекст)
- стрелочные функции используются для того чтобы не выходить из текущего контекста
- у стрелочных функций отсутствует псевдомассив `arguments`
- стрелочные функции удобны например при работе с `forEach(foo)` внутри метода объекта, чтобы не терять контекст объекта

Стрелочные функции предназначены для небольшого кода, где не нужен контекст функции.

## Обычная функция

    function foo(a, b) {
        return a + b
    }

    console.log(foo(3, 5)) // 8

## Стрелочная функция

    const foo = (a, b) => {
        return a + b
    }

    console.log(foo(3, 5)) // 8

### Один параметр
Если параметр один, то можно записывать без скобок:

    const foo = a => {
        return a
    }

### Одна строка
Если в теле функции одна строка, то можно записывать без `return` и без фигурных скобок

    const foo = a => a

Даже если функция ничего не возвращает
    
    const foo = a => console.log(a)

## Отсутствие контекста и `this`
Стрелочные функции не создают своего контекста, поэтому у них нет `this`.
Создадим объект с методами, внутри которых находится функция `setTimeout()` и проанализируем работу `this` с обычными функциями и стрелочными.

    person = {
        age: 25,
        firstName: 'Max',
        
        logName: function() {
            setTimeout(function() {
                console.log(this.firstName)
            }, 1000)
        }, // undefined
        
        logNameBind: function() {
            setTimeout(function() {
                console.log(this.firstName)
            }.bind(this), 2000)
        }, // Max

        logNameArrow: function() {
            setTimeout(() => {
                console.log(this.firstName)
            }, 3000)
        }, // Max
        
        logNameES6method() {
            setTimeout(() => {
                console.log(this.firstName)
            }, 4000)
        } // Max
    }

    person.logName()          // undefined
    person.logNameBind()      // Max
    person.logNameArrow()     // Max
    person.logNameES6method() // Max
