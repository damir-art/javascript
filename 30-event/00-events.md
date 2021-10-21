# События

Список некоторых событий в JavaScript
- мышь: click, contextmenu, mouseover, mouseout, mousedown, mouseup, mousemove
- форма: submit, focus
- клавиатура: keydown, keyup
- документ: DOMContentLoaded
- css: transitionend

**Событие** &ndash; это то что произошло: клик по кнопке мышиы, нажатие по клавише, прокрутка колеса мыши и т.д.

**Обработчик события** &ndash; это функция которая запускается при возникновения события.

События можно вкладывать внутрь других событий. Рассмотрим список событий с которыми может работать JavaScript

## События документа, окна браузера
- `DOMContentLoaded` - DOM-дерево построено, HTML-код загружен, внешние ресурсы еще нет (изображения, стили и т.д.)
- `load`   - загрузка веб-страницы полностью завершена, в том числе и внешние ресрсы, позволяет не размещать код JavaScript строго в подвале страницы
- `resize` - событие происходит при изменении окна браузера.
- `scroll` - страница прокручивается вверх или вниз.

Код:

    // только document
    document.addEventListener('DOMContentLoaded', function() {
        console.log('loaded')
    })

    // только window или пусто
    window.addEventListener('load', function () {
        console.log('Страница загружена полностью!')
    })

    // только window или пусто
    window.addEventListener('resize', function () {
        console.log('Изменяем размер окна')
    })

    // document, window, пусто
    document.addEventListener('scroll', function () {
        console.log('Крутим колесом мыши')
    })

## События мыши
- `click`      - клик по элементу
- `mouseenter` - наведение указателя мыши на элемент
- `mouseleave` - уход указателя мыши из элемента
- `mousemove`  - перемещает указатель мыши
- `mouseover`  - перемещает указатель мыши, в пределах одного элемента

## События клавиатуры
https://learn.javascript.ru/keyboard-events
- `keydown` - пользователь нажал/удерживает клавишу
- `keyup`   - пользователь отпустил клавишу

Код: 

    window.addEventListener('keydown', function (e) {
        e.preventDefault() // отменяем стандартные действия клавиш при нажатии
        console.log(e)
        out.textContent += e.key // пишем текст
    })

## События фокуса
- `focus / focusin` - получение фокуса
- `blur / focusout` - потеря фокуса

## События форм
- `input`  - изменилось значение любого элемента `input`, `textarea` или элемента с атрибутом contenteditable
- `change` - изменилось значение в раскрывающемся списке, переключатель, флажок, нажали на кнопку enter после ввода текста в текстовое поле
- `submit` - отправить форму
- `reset`  - сброс формы
- `cut`    - вырезать содержимое из поля формы
- `copy`   - копировать содержимое из поля формы
- `paste`  - вставить содержимое из буфера обмена в форму
- `select` - выделить часть текста в поле формы
