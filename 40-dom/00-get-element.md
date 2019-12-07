# Получаем доступ к элементам

## getElementById()
Получить доступ к элементу, по его `id` *(самый быстрый по производительности)*, решетку `#` не пишем:

    div = document.getElementById('id')
    console.log(div)

## querySelector()
Современный метод получения первого элемента в списке выбранных элементов, строка с именем тега, точками для классов и хешами для идентификаторов *(можно использовать селекторы CSS)*:

    item = document.querySelector('.item')
    console.log(item)

## querySelectorAll()
Современный метод получения элементов *(список узлов)*, строка с именем тега, точками для классов и хешами для идентификаторов *(можно использовать селекторы CSS)*.

    items = document.querySelectorAll('.item')
    console.log(items)

## getElementsByClassName()
Получить доступ к элементу(ам), по его(их) `class`, точку `.` не пишем, возвращет псевдомассив (HTML-коллекцию):

    li = document.getElementsByClassName('class')
    console.log(li)

## getElementsByTagName()
Получить доступ к элементу(ам), по его(их) `tag`, скобки `< >` не пишем, возвращет псевдомассив (HTML-коллекцию):

    li = document.getElementsByTagName('tag')
    console.log(li)