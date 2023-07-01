# Что такое событие?
Что такое событие, примеры.  
События и обработчики событий (функции).

Событие - специальный механизм, позволяющий движку JavaScript, сообщить скрипту о том что произошло что-то асинхронное. Событие - это признак асинхронности.

- события: `click`, `input`, `mouseenter`, `mouseleave`,
- обработчик события: пользовательская функция которая сработает после события,
- addEventListener() - метод слушатель события.

Скрипт JavaScript в браузере работает всегда иза события `event loop`, данное событие работает всегда пока страница не будет закрыта. Данное событие постоянно проверяет что сделал пользователь или скрипт. Это суть асинхронности JavaScript.

## Виды событий
- пользовательские,
- события браузера (загрузка),
- кастомные (написанные программистом).

DOM-события:
- общие для всех элементов (клик, курсор и т.п.),
- не для всех: клавиатура, загрузка, фокус.

## addEventListener()
Функция слушатель события:

    const btn = document.querySelector('.btn');
    btn.addEventListener('событие', foo);

foo - колбэк, функция обратного вызова, её можно вынести отдельно.

Кликнем по кнопке, надпись у заголовка изменится:

    const button = document.getElementById('button');
    const header = document.getElementById('header');

    button.addEventListener('click', function () {
      header.textContent = 'Нажали по кнопке'
    })

## Именование обработчиков событий
buttonClickHandler - элементСобытиеHandler или onButtonClick - onЭлементСобытие.

## removeEventListener
Слушатели можно удалять.

    const foo = function () {
      ...
    }

    button.removeEventListener('click', foo)

Анонимную функцию удалить нельзя.

Когда нужно удалять обработчики?
- обработчик использует внешние значения (привязан не на элемент вместе с которым создан),
- обработчик содержит асинхронную логику,
- элемент в данный момент не виден.

Обработчик удалится если удалить элемент на котором висит обработчик.

## Разное
- в обработчик нельзя вставить параметры, потому что её вызывает браузер, а не программист,
- по идее лучшей практикой будет создание не калбека, а переменной чьим значением будет анонимная функция и потом эту функцию можно будет вызывать из разных событий.

## Примеры

### Кликнем по кнопке, надпись у заголовка изменится по условию:
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

## Ссылки
- Все события https://developer.mozilla.org/ru/docs/Web/Events
- Все API https://developer.mozilla.org/ru/docs/Web/API
- API Event https://developer.mozilla.org/ru/docs/Web/API/Event
- События мыши https://developer.mozilla.org/ru/docs/Web/API/MouseEvent
