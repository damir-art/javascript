# Шаблонизация строк ES6
Рассмотрим удобную работу со строками - `шаблонизацей` *(обратные одиночные кавычки, обратный апостроф)*.

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

## Обратный апостроф
Внутри обратных апострофов мы можем использовать `${переменная}`:

    '<a target="_blank" href="' + path + '">' + name + '</a>'

    `<a target="_blank" href="${path}">${name}</a>`
    
    '<li>' + createLink({path: 'https://google.ru', name: 'Гугл'}) + '</li>'

    `<li>${createLink({path: 'https://google.ru', name: 'Гугл'})}</li>`

Обратные кавычки, можно использовать в многострочии, также сохраняют форматирование:

    const strFormat = `Hello
    Hello
        Hello`

    console.log(strFormat)

## Интерполяция строк, шаблон ES6(2015)
Шаблон это строка, обрамлённая символами <code>``</code>, внутрь неё можно вставлять переменные <code>${имя_переменной}</code>.

    let moscow = 'Москва'
    let text = `Мой город ${moscow} красив!`

    console.log(text)
