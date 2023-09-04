# Изменение DOM
Изменение DOM: вставка, копирование, перемещение, удаление.

    textContent и innerHTML           - работа с текстом и разметкой
    removeChild(elem)                 - удалить дочерний элемент
    appendChild(elem)                 - добавить/переместить дочерний элемент
    insertBefore(elem3, elem)         - вставить дочерний перед
    replaceChild(elem3, elem)         - заменить дочерний элемент, возвращает заменённый элемент
    appendChild(elem.cloneNode())     - копировать элемент, без дочерних
    appendChild(elem.cloneNode(true)) - копировать элемент, с дочерними
    cloneNode()

## textContent и innerHTML
Пример разницы textContent и innerHTML:

    <p class="el">
      <b>Привет.</b>
    </p>
    <p class="el_2"></p>

    const el   = document.querySelector('.el')
    const el_2 = document.querySelector('.el_2')

    el_2.textContent = el.innerHTML // <b>Привет</b>
    // el_2.innerHTML = el.innerHTML

    console.log(el.innerHTML) // <b>Привет.</b>

С помощью innerHTML можно вставить прямо разметку, а с помощью textContent, только текст. При использовании innerHTML старые данные затираются, чтобы этого не происходило вы должны использовать конкатенацию. Но даже в этом случае все ноды станут новыми. И если вы до этого на основе старых нод создавали переменные, то больше они вам доступны не будут.

Все данные на сайт нужно вставлять через `textContent` (для безопасности). Если данных (от пользователя, например из формы) нет то используем `innerHTML`.

## Разница между innerHTML и insertAdjacentHTML()
Пример параграфа:

    <p class="hello">Всем привет</p>

Создаём кнопку с помощью `innerHTML`:

    document.body.innerHTML = document.body.innerHTML + '<button type="button">Кнопка</button>'

Здесь текст параграфа `p` не изменится:

    const hello = document.querySelector('.hello')
    document.body.innerHTML += '<button type="button">Кнопка</button>'
    hello.textContent = 'Всем пока'

Здесь текст параграфа `p` изменится, кнопку создали с помощью `insertAdjacentHTML`:

    const b = document.querySelector('b')
    document.body.insertAdjacentHTML('beforeend', '<button type="button">Кнопка</button>')
    hello.textContent = 'Всем пока'

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

    pools[1].appendChild(blocks[0]) // удалённый элемент можно вставить, если он сохранён в массиве

Элемент удаляется из DOM но остаётся доступным, поскольку ссылка на объект остаётся. Поэтому мы его можем вернуть в DOM.

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

## insertAdjacentHTML
Добавляем элементы точечно, более правильный подход.

    const el   = document.querySelector('.el')
    const el_2 = document.querySelector('.el_2')

    // el_2.insertAdjacentHTML('afterbegin', '<b>Привет</b>')
    el_2.insertAdjacentHTML('afterbegin', el.textContent)

- afterbegin - после открывающего тега
- beforbegin - перед открывающим тегом
- beforeend  - перед закрывающим тегом
- afterend   - после закрывающего тега
