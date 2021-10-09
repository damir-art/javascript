# Внедрение JavaScript
**JavaScript** можно внедрить в HTML-страницу несколькими способами, рассмотрим их.

Код можно внедрять между тегами `head` или `body`. Обычно внедряют перед закрывающим тегом `body`, чтобы перед началом работы скрипта, вся страница была уже загружена.

## Внедряем скрипт

    <script>
        ... код
    </script>

## Внедряем файл

    <script src="custom.js"></script>

    <script src="custom.js">
        Текст для браузеров не поддерживающих JavaScript
    </script>

## use strict
**'use strict'** - режим строгого соответствия стандарту. Например если в следующем коде убрать `let`, то консоль выведет ошибку.

    'use strict'
    let a = 'Window'
    console.log(a)

## Внедряем более одного скрипта
Если вам на страницу нужно внедрить более одного файла, то преращаем их в модули со своей областью видимости. Это нужно чтобы переменные разных файлах, с одинаковыми названиями не пересекались.

Более подробно об этом читайте в разделе `модули`.

    <script src="calc-window.js"></script>
    <script src="calc-door.js"></script>

    function calcWindow() {
        let a = 'Window'
        console.log(a)
    }
    calcWindow()

    function calcDoor() {
        let a = 'Door';
        console.log(a);
    }
    calcDoor()
