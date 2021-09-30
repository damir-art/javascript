# Производительность

## Переменные в цикле
Так скрипт будет работать быстрее. Создаём переменную работаем с ней, а уже после обработки присваиваем значение переменно элементу DOM, а не работаем с DOM внутри цикла:

    let out = '';
    for (let i = 0; i < 10; i++) {
        out += i;
    }
    document.querySelector('#out').innerHTML = out;

## Поиск DOM элементов

    const header = document.querySelector('.header')

    document.querySelector('.btn') // поиск кнопки по всему документу
    header.querySelector('.btn')   // поиск кнопки в шапке, ищется быстрее
