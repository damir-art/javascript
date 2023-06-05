# Работаем со style
style - объект, свойство HTML-элемента, который хранит в себе CSS-свойства.

    <h1 class="title" style="color: green; font-size: 22px;">Заголовок</h1>

    const title = document.querySelector('.title')
    console.log(title.style) // { color → "green", "font-size" → "22px" }

Задаём CSS-свойства через JavaScript:

    const out = document.querySelector('.out')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function () {
        out.style.color = 'green'
        console.log(out.style.color) // выводим стиль color
        console.log(out.style)       // выводим все стили
    })

## Разное
- значения свойств у `style`, всегда должны быть строкой.
- если имя свойства элемента состоит из 2х и более слов, то в JavaScript пишите их через `camelCase`: background-color = backgroundColor
