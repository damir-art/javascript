# Асинхронность в JavaScript

* Интервалы и таймеры
* Промисы
* Async/await

Асинхронность &ndash; одна из мощных возможностей в JavaScript.

## setTimeout()
Выполнить код через некоторое время:

    window.setTimeout(function () {
        console.log('Привет SetTimeout()')
    }, 3000)
