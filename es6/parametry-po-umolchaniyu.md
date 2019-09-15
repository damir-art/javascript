# Параметры по-умолчанию

    const createPost = (title, text, date) => {
        return {
            title: title,
            text: text,
            date: date
        }
    }

    const post = createPost('Мерседес', 'Мерседес - отличный автомобиль!', '20.09.2019')
    console.log(post)
    
По дефолту до ES6:

    const createPost = (title, text, date) => {
        date = date || new Date().toLocaleDateString()
        return {
            title: title,
            text: text,
            date: date
        }
    }

    const post = createPost('Мерседес', 'Мерседес - отличный автомобиль!')

По дефолту в ES6:

    const createPost = (title, text, date = new Date().toLocaleDateString()) => {
        return {
            title: title,
            text: text,
            date: date
        }
    }

    const post = createPost('Мерседес', 'Мерседес - отличный автомобиль!')
