# Асинхронность
## Асинхронность &ndash; одна из мощных возможностей JavaScript

- Асинхронность это когда код должен выполнятся после выполнения другого кода: по очереди.
- Асинхронность задаётся через колбеки (см. ниже).
- Большая вложенность колбеков усложняет и запутывает код.
- Поэтому придумали промисы `Promise`.

**Колбэк** *(callback)* - это функция, которая должна быть выполнена после завершения работы другой функции. Её ещё называют функцией обратного вызова.

Асинхронный код это например обращение к серверу и получение данных, поочередная загрузка файлов и т.д. Код который должен выполнится только после того как выполнился предыдущий.

## Содержание

- Таймеры и интервалы `setTimeout()`, `setInterval(), clearInterval()`
- Колбэк
- Промис: `resolve()`, `then()`
- async / await

Проверяем сколько времени выполняется код

    setTimeout(function () {
        console.log('Привет SetTimeout()')
    }, 100)

    console.time('q')
    for (let i = 0; i < 1000000000; i++) {
        let a = i / i
    }
    console.timeEnd('q')