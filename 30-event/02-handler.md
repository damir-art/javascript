# Обработчик события
Обработчик события - это функция которая срабатывает при возникновении события.

Обработчик события можно создать несколькими способами:
- с помощью HTML-атрибута: `onClick = " handler "`
- с помощью DOM-свойства: `el.onClick = function () {}`
- `addEventListener()` - позволяет повесить несколько обработчиков на одно событие

## addEventListener()
Создание события и его обработчика:

    el.addEventListener(event, handler[, options])

options - это объект со свойствами:

- `once:` true/false - если true, то обработчик удалится после выполнения
- `capture:` true/false - фаза, на которой должен сработать обработчик всплытие/погружение
- `passive:` true/false - если true, то обработчик никогда не вызовет preventDefault()

Можно повесить несколько обработчиков на одно событие, одного элемента:

    el1.addEventListener('click', nameFoo1)
    el1.addEventListener('click', nameFoo2)

Обработчики некоторых событий можно создавать только с помощью `addEventListener` например событие `DOMContentLoaded` или `transitionend`.

## removeEventListener()
Удаление обработчика события:

    el.removeEventListener(event, handler[, options])

    el.removeEventListener('click', fooName)

При удалении нужно указать имя функции.

## this
Внутри обработчика события `this` ссылается на текущий элемент.

## Разное
- обработчики событий ничего не возвращают и `return` игнорируется, единственный случай это `return false` у события HTML-атрибута или DOM-свойства, которое идентично `preventDefault()`
