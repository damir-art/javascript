# Стрелочные функции

Функции до ES6

    function getAge(year) {
        const current = new Date().getFullYear()
        return current - year
    }

    console.log(getAge(1984)) // 35
    
Начиная с ES6

    const getAge = (year) => {
        const current = new Date().getFullYear()
        return current - year
    }

    console.log(getAge(1984)) // 35

Если один параметр, то можно записывать без скобок

    const getAge = year => {
        const current = new Date().getFullYear()
        return current - year
    }

Если в теле функции одна строка, то можно записывать без `return` и без фигурных скобок

    const getAge = year => new Date().getFullYear() - year

Даже если функция ничего не возвращает
    
    const logAge = year => console.log(new Date().getFullYear() - year)

## Стрелочные функции не создают своего контекста
