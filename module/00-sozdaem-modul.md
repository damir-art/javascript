# Создаём модуль

Здесь значения закрыты, но есть доступ к имени самой функции-модуля и мы можем её вызвать через консоль несколько раз (это нужно как то исправить).

`foo.js` - имя файла-модуля.

    // foo.js
    const foo = function () {
        ...
    }

    foo()
    foo = null // можно так вызывать один раз

## Самовызывающаяся функция (IIFE)
Мгновенно запускающееся функциональное выражение.

Инкапсулируем название функции, чтобы она вызывалась только лишь один раз и никто другой её больше вызвать не смог:

    (function () {
        ...
    })()

`()` - оператор вызова функции, ещё и оператор группировки:

    console.log( (1 + 3) ) // 4
    console.log( (function () {}) ) // function () {}

Данный оператор возращает то что передано.
