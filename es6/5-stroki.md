# Строки
## Шаблонизация
Рассмотрим удобную работу со троками, без кавычек, `шаблонизация`.

Создадим список:

    <ul>
        
    </ul>

Создадим скрипт который будет вставлять элементы с сылками в список:

    const createLink = ({path, name}) => '<a target="_blank" href="' + path + '">' + name + '</a>'
    const ul = document.querySelector('ul')

    const google = '<li>' + createLink({path: 'https://google.ru', name: 'Гугл'}) + '</li>'
    const yandex = '<li>' + createLink({path: 'https://ya.ru', name: 'Яндекс'}) + '</li>'

    ul.insertAdjacentHTML('afterbegin', google)
    ul.insertAdjacentHTML('afterbegin', yandex)
