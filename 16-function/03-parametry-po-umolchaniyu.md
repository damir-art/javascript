# Параметры по-умолчанию
Параметры по-умолчанию срабатывают в том случае, если мы их не передаём.

    const person = function (name, lastname) {
        console.log(name, lastname)
    }

    person('Андрей', 'Петров') // Андрей Петров

Не передали фамилию:

    person('Андрей') // Андрей Петров

Установили значение параметра `lastname`, по-умолчанию:

    const person = function (name, lastname = 'Иванов') {
        console.log(name, lastname)
    }

    person('Андрей') // Андрей Иванов

## Неопределённое количество параметров
Функция для работы с неопределённым количеством параметров.

    const person = function () {
        console.log(arguments)    // Arguments { 0: "Иван", 1: "Петр", 2: "Сидор", … }
        console.log(arguments[0]) // Иван
        console.log(...arguments) // Иван Петр Сидор
    }

    person('Иван', 'Петр', 'Сидор')

arguments - встроенный в JavaScript, массив параметров.

## Возвращаем объект
Передаём все значения для параметров:

    const createPost = (title, text, date) => {
        return {
            title: title,
            text: text,
            date: date
        }
    }

    const post = createPost('Мерседес', 'Мерседес - отличный автомобиль!', '20.09.2019')
    console.log(post)
    
До ES6 (не передаём дату):

    const createPost = (title, text, date) => {
        date = date || new Date().toLocaleDateString()
        return {
            title: title,
            text: text,
            date: date
        }
    }

    const post = createPost('Мерседес', 'Мерседес - отличный автомобиль!')

В ES6 (не передаем дату):

    const createPost = (title, text, date = new Date().toLocaleDateString()) => {
        return {
            title: title,
            text: text,
            date: date
        }
    }

    const post = createPost('Мерседес', 'Мерседес - отличный автомобиль!')

Если ключ и значение совпадают, то их можно сократить до одного слова
    
    const createPost = (title, text, date = new Date().toLocaleDateString()) => {
        return { title, text, date }
    }
    const post = createPost('Мерседес', 'Мерседес - отличный автомобиль!')
