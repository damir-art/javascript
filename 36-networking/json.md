# Объект JSON
Объект JSON - приводим объекты к строкам. Данные между web-приложениями, обычно перемещаются в виде строк.

    var person = {
        name: 'John',
        age: 18,
        job: 'Front-end',
        car: {
            brand: 'Ford',
            model: 'Mondeo'
        },
        friends: ['Katy', 'Peter', 'Tom']
    }

    console.log(person)
    console.log(JSON.stringify(person)) // объект в строку

    var person_string = JSON.stringify(person)
    console.log(JSON.parse(person_string)) // строку в объект
