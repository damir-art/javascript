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
