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

## Внедряем более одного скрипта
Если вам на страницу нужно внедрить более одного файла, то преращаем их в модули со своей областью видимости. Это нужно чтобы переменные в разных файлах, с одинаковыми названиями не пересекались.

Более подробно об этом читайте в разделе `модули`.

    <!-- IIFE -->
    <script src="calc-window.js"></script>
    <!-- ES6 module -->
    <script src="calc-door.js" type="module"></script>

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
