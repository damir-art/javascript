# Методы DOM

## removeChild()
Удаляет дочерний элемент из DOM.

    pools[0].removeChild(blocks[0]) // удалить элемент

Пример, удаляем элемент при клике на нем.

    const pools  = document.querySelectorAll('.pool')
    const blocks = document.querySelectorAll('.el')

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('click', function () {
            // console.log(this)
            pools[0].removeChild(this)
        })
    }

Элемент удаляется из DOM но остаётся доступным, поскольку ссылк ана объект остаётся. Поэтому мы его можем вернуть в DOM.

## appendChild()
Добавляет/перемещает дочерний элемент в DOM. Возвратим элемент.

    pools[1].appendChild(blocks[0]) // добавить элемент

Перемещаем все элементы из одного контейнера в другой:

    for (let i = 0; i < blocks.length; i++) {
        pools[1].appendChild(blocks[i])
    }

Если элемент находится в контейнере 1, то его элемент перемещается в контейнер 2. Добавление элемента происходит в конец контейнера.

## insertBefore()

    pools[0].insertBefore(blocks[4], blocks[2]) // вставляем 4 перед 2

## replaceChild()
Заменить элемент.

    pools[0].replaceChild(blocks[4], blocks[2]) // вставляем 4 вместо 2

Возвращает заменённый элемент 2:

    const replaced = pools[0].replaceChild(blocks[4], blocks[2])
    console.log(replaced)
    pools[0].appendChild(replaced) // возвращаем элемент обратно и вставляем в конец списка

## cloneNode()
Копирует узел.

    pools[0].appendChild(blocks[0].cloneNode())     // копирует элемент но не дочерние
    pools[0].appendChild(blocks[0].cloneNode(true)) // копирует элемент с дочерними

## contains()
Проверяет, существует ли элемент в контейнере.

    if (pools[0].contains(blocks[0])) {
        // console.log('da')
        pools[0].style.backgroundColor = 'rgb(100, 200, 100)'
    }

## children
Полное удаление элементов, не доступны даже по ссылке.

    for (let i = 0; i < pools[0].children.length; i++) {
        const child = pools[0].children[i]
        child.parentElement.removeChild(child) // удалились не все элементы иза замещения индексов
    }

Чтобы удалить все элементы, циклы должен считать с конца:

    for (let i = pools[0].children.length - 1; i >= 0; i--) {
        const child = pools[0].children[i]
        child.parentElement.removeChild(child)
    }

    pools[0].appendChild(blocks[1]) // почему-то всё равно добавляет элемент
    pools[0].appendChild(blocks[0].cloneNode(true)) // и клонирует
