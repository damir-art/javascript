# Деструктуризация массивов ES6(2015)

Деструктуризация позволяет присвоить нескольким переменным, несколько элементов массива сразу. Изначальный массив при этом не изменяется.

    const person = ['Иван', 'Царевич', 'Москва']
    const [firstName, lastName, city] = person

    console.log(firstName) // Иван
    console.log(lastName)  // Царевич
    console.log(city)      // Москва

    console.log(person)    // ['Иван', 'Царевич', 'Москва']

Присваиваем одной переменной:

    const person = ['Иван', 'Царевич', 'Москва']
    const [ , , city] = person

    console.log(city)   // Москва
    
    console.log(person) // ['Иван', 'Царевич', 'Москва']
