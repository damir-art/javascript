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

    function () {} // калбэк функция

Управляем запуском кода через функцию:

    const timeout = function(time) {
        setTimeout(function() {
            console.log('Привет SetTimeout() ' + time * 2)
        }, time)
    }

    timeout(3000)
