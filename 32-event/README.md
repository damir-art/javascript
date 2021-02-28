# События в JavaScript
События и обработчики событий (функции).

- события: `click`, `input`, `mouseenter`, `mouseleave`
- обработчик события: полльзовательская функция которая сработает после события
- addEventListener() - функция слушатель события

## addEventListener()
Функция слушатель события:

    const btn = document.querySelector('.btn')
    btn.addEventListener('событие', foo)

Кликнем по кнопке, надпись у заголовка изменится:

    const button = document.getElementById('button')
    const header = document.getElementById('header')

    button.addEventListener('click', function () {
        header.textContent = 'Нажали по кнопке'
    })

## Примеры
### Кликнем по кнопке, надпись у заголовка изменится по условию
Вместо анонимной функции, используем имя функции:

    const button = document.getElementById('button')
    const header = document.getElementById('header')

    button.addEventListener('click', buttonClick)

    function buttonClick() {
        if (header.textContent == 'Event in JavaScript') {
            header.textContent = 'Button click!'
        } else {
            header.textContent = 'Event in JavaScript'
        }
    }

### При изменении текстового поля, изменяется надпись у заголовка
    var input = document.getElementById('text')
    var header = document.getElementById('header')

    input.addEventListener('input', function () {
        header.textContent = input.value
    })

### Используем ключевое слово this
При наведении и отведении мыши меняются стили CSS *(лучше использовать classList)*:

    var header = document.getElementById('header')

    header.addEventListener('mouseenter', function () {
        this.textContent = 'MouseEnter H1!'
        // console.log(this);
        this.style.color = '#eee'
        this.style.backgroundColor = '#111'
    })
    header.addEventListener('mouseleave', function () {
        this.textContent = 'MouseLeave H1!'
        // console.log(this);
        this.style.color = '#111'
        this.style.backgroundColor = "#eee"
    })

# onclick
Задаём событие через `onclick` (Elements > Properties > Первая строка > onclick):

    let btn = document.getElementById('btn')
    btn.onclick = by

    function by() {
        console.log('by')
        root.innerHTML = 'by <b>btn</b>!'
        this.className = 'button'
        this.hidden = true
    }

## Ссылки
- Все события https://developer.mozilla.org/ru/docs/Web/Events
- Все API https://developer.mozilla.org/ru/docs/Web/API
- API Event https://developer.mozilla.org/ru/docs/Web/API/Event
- События мыши https://developer.mozilla.org/ru/docs/Web/API/MouseEvent
