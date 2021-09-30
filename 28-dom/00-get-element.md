# Получаем доступ к элементам

## getElementById()
Получаем доступ к элементу, по его `id` *(самый быстрый по производительности)*, решетку `#` не пишем:

    const item = document.getElementById('id')
    console.log(item)

## querySelector()
Получаем доступ к первому элементу в списке выбранных элементов: строка с именем тега, точками для классов и хешами для идентификаторов *(можно использовать селекторы CSS)*:

    const item = document.querySelector('.item')
    console.log(item)

Нельзя выбрать только псевдоэлементы, поскольки они не являются частью DOM и создаются в CSS.

## querySelectorAll()
Получаем доступ к элементам (в виде псевдомассива `NodeList`): строка с именем тега, точками для классов и хешами для идентификаторов *(можно использовать селекторы CSS)*.

    const items = document.querySelectorAll('.item')
    console.log(items)

## getElementsByClassName()
Получаем доступ к элементам по их классу `class`, точку `.` не пишем, возвращет массив `HTMLCollection`:

    const items = document.getElementsByClassName('class')
    console.log(items)

## getElementsByTagName()
Получаем доступ к элементам, по их тегу `tag`, скобки `< >` не пишем, возвращет массив `HTMLCollection`:

    const items = document.getElementsByTagName('tag')
    console.log(items)
