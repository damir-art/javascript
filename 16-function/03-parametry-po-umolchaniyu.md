# Параметры по-умолчанию
Параметры по-умолчанию срабатывают в том случае, если мы их не передаём.

    const createPost = (title, text, date) => {
        return {
            title: title,
            text: text,
            date: date
        }
    }

    const post = createPost('Мерседес', 'Мерседес - отличный автомобиль!', '20.09.2019')
    console.log(post)
    
До ES6:

    const createPost = (title, text, date) => {
        date = date || new Date().toLocaleDateString()
        return {
            title: title,
            text: text,
            date: date
        }
    }

    const post = createPost('Мерседес', 'Мерседес - отличный автомобиль!')

В ES6:

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
