# События в JavaScript
События и обработчики событий (функции).

## addEventListener()
Функция добавления событий:

    div = document.getElementById('div')
    div.addEventListener('event', foo)

Кликнем по кнопке, надпись у заголовка изменится:

    var button = document.getElementById('button')
    var header = document.getElementById('header')

    button.addEventListener('click', function () {
        header.textContent = 'Нажали по кнопке'
    })

## Примеры
### Кликнем по кнопке, надпись у заголовка изменится по условию
Вместо анонимной функции, используем имя функции:

    var button = document.getElementById('button')
    var header = document.getElementById('header')

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

## Ссылки
* Все события https://developer.mozilla.org/ru/docs/Web/Events<br />
* Все API https://developer.mozilla.org/ru/docs/Web/API<br />
* API Event https://developer.mozilla.org/ru/docs/Web/API/Event<br />
* События мыши https://developer.mozilla.org/ru/docs/Web/API/MouseEvent