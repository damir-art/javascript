# Изменеие DOM
Изменение структуры документа.

- `createElement('tagName')` - создание элемента
- `append(el)` - вставка элемента
- `el.insertAdjacentHTML('куда', 'html')` - вставка куска кода
- `el.remove()` - удаление элемента
- `el.cloneNode(true)` - клонирование элемента
- `new DocumentFragment()` - оборачивает и передает список узлов (в основном используется с `template`)
- вместо `DocumentFragment` обычно передают массив узлов

## createElement() - создание элемента

    createElement('tagName') - создание элемента по имени его тега
    createTextNode('text') - создание текстового узла по его тексту

Схема создания элемента:

    const myDiv = document.createElement('div') // создаём элемент
    myDiv.className = 'myDiv // навешиваем CSS-класс
    myDiv.textContent = 'Создали элемент, добавили содержимое' // создали элемент, добавили содержимое

## append() - вставка элемента

    append()      - добавить элемент или строку в конец
    prepend()     - добавить в начало
    before()      - добавить до
    after()       - добавить после
    replaceWith() - заменить

Схема создания и вставки элемента:

    const descr = document.querySelector('.descr')

    const myDiv = document.createElement('div') // создаём элемент
    myDiv.className = 'myDiv' // навешиваем CSS-класс
    myDiv.textContent = 'Создали элемент, добавили содержимое' // создали элемент, добавили содержимое

    descr.after(myDiv) // вставляем созданный элемент после элемента descr

## insertAdjacentHTML() - вставка HTML-кода
Вставляем HTML-код `insertAdjacentHTML()`:

    el.insertAdjacentHTML('куда вставляем', 'html-код')

    'beforebegin' - вставить html-код перед элементом
    'afterbegin' - вставить в начало
    'beforeend' - вставить в конец
    'afterend' - вставить после

Вставляем текст `insertAdjacentText()` (используется редко):

    el.insertAdjacentText('where', 'text')

Вставляем элемент `insertAdjacentElement()` (используется редко):

    el.insertAdjacentElement('where', elem)

Если `innerHTML` вставляет код обновляя его, то `insertAdjacentElement()` обновляет точечно, см. `create-element-1.md`

## el.remove() - удаление элемента
Удаляем элемент через 3 секунды после вставки:

    // удаляем элемент через 3 секунды
    setTimeout(function () {
        myDiv.remove()
    }, 3000)

При перемещении элементов через методы вставок, элемент на прошлом месте удаляется автоматически:

    setTimeout(function () {
        descr.before(myDiv)
    }, 3000)

## cloneNode() - клонирование элементов

    cloneNode(true)  - клонировать со всеми атрибутами и дочерними элементами
    cloneNode(false) - клонировать без дочерних элементов

Схема работы при клонировании элементов:

    const myDivClone = myDiv.cloneNode(true) // клонировали элемент
    // myDivClone.querySelector('.class') // ищем внутри элемента другие если они есть и их нжно изменить
    myDivClone.textContent = 'Склонированный элемент' // меняем текст у клонированного элемента
    myDiv.after(myDivClone) // вставляем клон после myDiv

## Разное

Устаревшие методы:
- `appendChild()`    - вставка элемента в конец родительского
- `insertBefore()`   - вставка элемента
- `replaceChild()`   - замена элемента
- `removeChild()`    - удаление элемента
- `document.write()` - добавление содержимого
