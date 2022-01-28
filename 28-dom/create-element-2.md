# Создание DOM элемента
DOM элементы можно создавать двумя способами:
- с помощью разметки
- с помощью DOM-api
    - template из WebComponents
    - JSX, incremental DOM

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

Единственная проблема данного подхода это невозможность вставки элемента по середине.

## createElement
Создаём элемент через метод `createElement()`:

    const pool = document.querySelector('.pool')
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < 6; i++) {
        const el = document.createElement('div')
        el.className = 'el'
        el.innerHTML = '<span>' + i + '</span>'
        fragment.appendChild(el)
    }

    pool.appendChild(fragment)

## template (шаблонизация)
Чтобы ускорить процесс размножения одних и тех же элементов страницы, например карточек товаров, можно использовать тег `template`, который относится к WebComponents. См. `web-components/template.md`
