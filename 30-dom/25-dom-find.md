# Навигация по DOM-дереву
Осуществляем навигацию по DOM-дерву через JavaScript.

## childNodes
Дочерние узлы элемента.

- узел типа `#text` перенос строки, пробелы
- узел типа `element` теги
- `childNodes` получаем коллекцию дочерних узлов текстовых и элементов
- `childNodes` содержит итератор, поэтому его можно перебрать с помощью `for of`
- `children` получаем коллекцию дочерних узлов элементов

Пример обхода циклом дочерних элементов и вывода только узлов `element`:

    const body = document.body // получаем доступ к body
    console.log( body.childNodes ) // получаем коллекцию дочерних элементов

    // for
    for (let i = 0; i < body.childNodes.length; i++) {
        if ( body.childNodes[i].nodeType == 3 ) continue
        console.log( body.childNodes[i] )
    }

    // for of
    for (const node of body.childNodes) {
        if ( node.nodeType === 3 ) continue
        console.log( node )
    }

    // children
    for (const node of body.children) {
        console.log( node )
    }

## Дочерний элемент
От контейнера (например `body`) мы можем обратиться к первому дочернему узлу, к последнему дочернему узлу и к любому другому.

- `body.firstChild` первый дочерний узел
- `body.firstElementChild` первый дочерний узел типа элемент
- `body.lastChild` последний дочерний узел
- `body.lastElementChild` последний дочерний узел типа элемент

## Соседний элемент
У каждого элемента есть информация о том какой узел находится выше или ниже по коду.

- `nextSibling` получить следующий соседний узел
- `nextElementSibling` получить следующий соседний элемент
- `previousSibling` получить предыдущий соседний узел
- `previousElementSibling` получить предыдущий соседний элемент
- `body.firstElementChild.nextElementSibling.nextElementSibling` можно писать так

Обычно для обхода соседей используют циклы.

## Родительский элемент
Получаем доступ к родительскому элементу.

- `body.parentNode`

## Пример с циклом
Перебираем все родительские элементы снизу вверх от дочернего.

