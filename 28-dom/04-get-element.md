# Методы поиска
Методы поиска по DOM.

- querySelector()
- querySelectorAll()
- matches()
- closest()
- getElementById()
- getElementsByClassName()
- getElementsByTagName()

## querySelector()
Получаем доступ к первому элементу в списке выбранных элементов: строка с именем тега, точками для классов и хешами для идентификаторов *(можно использовать селекторы CSS)*:

    const item = document.querySelector('.item')
    console.log(item)

Нельзя выбрать только псевдоэлементы, поскольки они не являются частью DOM и создаются в CSS.

`querySelector()` аналог `querySelectorAll()[0]` но работает быстрее.

## querySelectorAll()
Получаем доступ к элементам (в виде псевдомассива `NodeList`): строка с именем тега, точками для классов и хешами для идентификаторов *(можно использовать селекторы CSS)*.

    const items = document.querySelectorAll('.item')
    console.log(items)

document.querySelectorAll(':hover') вернет все элементы находящиеся под курсором, от внешнего к внутреннему

## matches()
Возвращает true, если селектор в параметре метода совпадает с селектором элемента.

    elem.matches('.class')

    <ul class="numbers">
        <li>Первый</li>
        <li>Второй <b>1</b></li>
        <li class="three">Третий</li>
        <li>Четвертый</li>
    </ul>

    const ul = document.querySelector('.numbers')
    const li = document.querySelectorAll('ul li')

    console.log(ul.matches('.numbers')) // true

    for ( let item of li ) {
        if (item.matches('.three')) {
            console.log(item.textContent) // третий
        }
    }

Удобен при поиске нужных элементов в псевдомассиве.

## closest()
Ищет по селектору ближайшего родителя, включая себя самого. Возвращает null или элемент у которого совпал селектор.

    const ul = document.querySelector('.numbers')
    const li = document.querySelector('.three')

    console.log(li.closest('.three'))   // li
    console.log(ul.closest('.numbers')) // ul
    console.log(ul.closest('.no'))      // null

## getElementById()
Получаем доступ к элементу, по его `id` *(самый быстрый по производительности)*, решетку `#` не пишем:

    const item = document.getElementById('id')
    console.log(item)

- На HTML-странице названия id, должны быть уникальны.
- метод `getElementById()` должен вызываться только для `document`

Не рекомендуется:
- если у элемента есть id, то к нему можно обратиться сразу `id.style.color`
- если имя id пишется через дефис, то обращаемся `window['id-name'].style.color`
- если есть переменная совпадающая с именем id, то переменная будет иметь приоритет

## getElementsByTagName()
Получаем доступ к элементам, по их тегу `tag`, скобки `< >` не пишем, возвращет массив `HTMLCollection`:

    const items = document.getElementsByTagName('tag')
    console.log(items)

## getElementsByClassName()
Получаем доступ к элементам по их классу `class`, точку `.` не пишем, возвращет массив `HTMLCollection`:

    const items = document.getElementsByClassName('class')
    console.log(items)

## getElementsByName()
Получаем доступ к элементам, с заданным атрибутом `name`.
