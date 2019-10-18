# Стрелочные функции

## Функции до ES6

    function getAge(year) {
        const current = new Date().getFullYear()
        return current - year
    }

    console.log(getAge(1984)) // 35
    
## Начиная с ES6

    const getAge = (year) => {
        const current = new Date().getFullYear()
        return current - year
    }

    console.log(getAge(1984)) // 35

### Один параметр
Если один параметр, то можно записывать без скобок:

    const getAge = year => {
        const current = new Date().getFullYear()
        return current - year
    }

### Сокрашаем код до одной строки
Просто рефакторинг (для следующего примера), к стрелочной функции не относится:

    const getAge = year => {
        return new Date().getFullYear() - year
    }

### Без `return`
Если в теле функции одна строка, то можно записывать без `return` и без фигурных скобок

    const getAge = year => new Date().getFullYear() - year

Даже если функция ничего не возвращает
    
    const logAge = year => console.log(new Date().getFullYear() - year)

## Стрелочные функции не создают своего контекста
Создадим объект с методами, внутри которых находится функция `setTimeout()`, что будет в `this`:

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
            }.bind(this), 1000)
        }, // Max
        
        logNameArrow: function() {
            setTimeout(() => {
                console.log(this.firstName)
            }, 1000)
        }, // Max
        
        logNameES6() {
            setTimeout(() => {
                console.log(this.firstName)
            }, 1000)
        } // Max    
    }
