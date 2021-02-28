# DOM в JavaScript

## Содержание
- Поиск DOM-узлов (получения к ним доступа)

DOM &ndash; это технология созданная для того чтобы JavaScript мог взаимодействовать с HTML и CSS-кодом веб страницы.

- Document object model - объектная модель документа
- Тег в HTML-коде (HTML-страница, DOM-структура, DOM-дерево), это DOM-узел
- DOM-узел бывает элементом или текстовым

Получаем доступ к элементу `btn` на веб-странице:

    const btn = document.querySelector('.btn')

Вешаем событие `click` на элемент:

    btn.addEventListener('click', function () {
        console.log(this)
    })
