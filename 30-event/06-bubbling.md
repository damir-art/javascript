# Всплытие
Когда на элементе происходит событие, обработчик срабатывает на элементе, потом поднимается вверх к родительским элементам и отрабатывает там (условии что в них есть обработчики).

Почти все события всплывают, кроме некоторых, например: `focus`.

Всегда можно узнать на каком элементе произошло событие.

## event.target VS event.currentTarget
Разница между event.target и event.currentTarget

- `event.target` - самый глубокий элемент (целевой элемент), который вызывает событие. Неизменен в процессе всплытия.
- `this` = `event.currentTarget` (текущий), при всплытии меняется в зависимости от того на каком элементе срабатывает обработчик.

Пример работы event.target и event.currentTarget:
- создадим форму
- внутри формы разместим кнопку
- на форму повесим событие клик
- кликнем по кнопке
- что покажет `event.target` и `event.currentTarget`

Код:

    const myForm = document.querySelector('.myForm')

    myForm.addEventListener('click', function (evt) {
        console.log(evt.target)        // кнопка
        console.log(evt.currentTarget) // форма
        console.log(this)              // форма
    })

## stopPropagation()
Запрещаем вызов события `click` по форме при нажатии по кнопке внутри формы:

    const myForm = document.querySelector('.myForm')
    const myBtn = document.querySelector('.myBtn')

    myBtn.addEventListener('click', function (evt) {
        evt.stopPropagation()          // остановить всплытие события
        // console.log(evt.target)     // кнопка
        console.log(evt.currentTarget) // кнопка
    })

    myForm.addEventListener('click', function (evt) {
        // console.log(evt.target)     // кнопка
        console.log(evt.currentTarget) // форма
    })

`evt.stopImmediatePropagation()` - предотвращает не только всплытие, но и вызов остальных обработчиков на данном элементе.

## Разное
- обычно нет никакой необходимости запрещать всплытие с помощью `stopPropagation()` используйте его аккуратно