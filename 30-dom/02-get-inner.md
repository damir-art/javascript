# Получаем доступ к содержимому элементов

## innerHTML

Получить всё, что находится между тегами элемента, дочерние элементы и текст:

    elem = document.getElementById('id')
    console.log(div.innerHTML)

Внедрить что либо между тегами элемента, дочерние элементы и текст (заменит всё что было внутри):

    elem = document.getElementById('id')
    elem.innerHTML = '<b style="color: green;">Hello</b>'

## textContent (рекомендуется)
Получить весь текст между тегами, теги не показываются:

    div = document.getElementById('id')
    console.log(div.textContent)

Добавить текст, теги добавляются как текст:

    div = document.getElementById('id')
    div.textContent = '<b style="color: green;">Hello</b>'

## innerText (не рекомендуется)
Получить весь текст между тегами, теги не показываются:

    div = document.getElementById('id')
    console.log(div.innerText)

Добавить текст, теги добавляются как текст:

    div = document.getElementById('id')
    div.innerText = '<b style="color: green;">Hello</b>'
