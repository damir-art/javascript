# DOM и JavaScript
Document object model - объектная модель документа

DOM &ndash; это технология созданная для того чтобы JavaScript мог взаимодействовать с HTML и CSS-кодом веб страницы.

Браузер на основании HTML-страницы создаёт DOM-дерево. DOM-дерево - это объект. DOM можно увидеть в `Исследовать > Инспектор`

Если в консоли ввести `document.querySelector('h1')` то получаем тег в виде разметки, если ввести `console.dir(document.querySelector('h1'))` то получаем объект.

## Содержание
- Поиск DOM-узлов (получения к ним доступа)
- Тег в HTML-коде (HTML-страница, DOM-структура, DOM-дерево), это DOM-узел
- DOM-узел бывает элементом или текстовым

Получаем доступ к элементу `btn` на веб-странице:

    const btn = document.querySelector('.btn')

Вешаем событие `click` на элемент:

    btn.addEventListener('click', function () {
        console.log(this)
    })
