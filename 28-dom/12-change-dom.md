# Изменеие DOM
Изменение структуры документа.

- `createElement('tagName')` - создание элемента
- `append(el)` - вставка элемента
- `insertAdjacentHTML('куда', 'html')` - вставка куска кода
- `el.remove()` - удаление элемента
- `el.cloneNode(true)` - клонирование элемента
- `new DocumentFragment()` - оборачивает и передает список узлов (в основном используется с `template`)
- вместо `DocumentFragment` обычно передают массив узлов

## Создание элемента

    createElement('tagName') - создание элемента по имени его тега
    createTextNode('text') - создание текстового узла по его тексту

Схема создания элемента:

    const myDiv = document.createElement('div') // создаём элемент
    myDiv.className = 'myDiv // навешиваем CSS-класс
    myDiv.textContent = 'Создали элемент, добавили содержимое' // создали элемент, добавили содержимое

## Вставка элемента

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

## insertAdjacentHTML/Text/Element
Вставляем кусок кода:

    insertAdjacentHTML('куда вставляем', 'html-код')

    'beforebegin' - вставить html-код перед элементом
    'afterbegin' - вставить в начало
    'beforeend' - вставить в конец
    'afterend' - вставить после

Вставляет текст (используется редко):

    el.insertAdjacentText('where', 'text')

Вставляет элемент (используется редко):

    el.insertAdjacentElement('where', elem)

## Удаление элемента
Удаляем элемент через 3 секунды после вставки:

    // удаляем элемент через 3 секунды
    setTimeout(function () {
        myDiv.remove()
    }, 3000)

При перемещении элементов через методы вставок, элемент на прошлом месте удаляется автоматически:

    setTimeout(function () {
        descr.before(myDiv)
    }, 3000)

## Клонирование элементов

    cloneNode(true)  - клонировать со всеми атрибутами и дочерними элементами
    cloneNode(false) - клонировать без дочерних элементов

Схема работы при клонировании элементов:

    const myDivClone = myDiv.cloneNode(true) // клонировали элемент
    // myDivClone.querySelector('.class') // ищем внутри элемента другие если они есть и их нжно изменить
    myDivClone.textContent = 'Склонированный элемент' // меняем текст у клонированного элемента
    myDiv.after(myDivClone) // вставляем клон после myDiv

## DocumentFragment
Служит оберткой для передачи нескольких элементов. При вствки его куда либо, он исчезает, а его содержимое вставляется.

Вместо `DocumentFragment` обычно используют массив элементов. А сам `DocumentFragment` обычно используют вместе с `template`.

## Разное

Устаревшие методы:
- `appendChild()`    - вставка элемента
- `insertBefore()`   - вставка элемента
- `replaceChild()`   - замена элемента
- `removeChild()`    - удаление элемента
- `document.write()` - добавление содержимого
