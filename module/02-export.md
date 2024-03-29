# Экспорт
Экспорт - обратная инкапсуляция.

Экспорт - позволяет части модулей быть доступными снаружи, для возможности использования в других модулях. Например можно сделать доступными служебные функции для вычисления min/max значений массива.

## Общение модулей через `window`

Экспорт нужен для этого нужно чтобы значение из модуля попало в глобальную область видимости, чтобы этим значением смог воспользоваться другой модуль.

    (function () {
        const a = 1                // переменная скрыта
        window.foo = function () { // функция доступна глобально
            return 1
        }
    })()

    (function () {
        window.foo;

        window.foo() // window - берем значение из глобальной области видимости
    })()

Объявление глобальной функции `window.foo =` должно стоять выше по коду чем её вызов `window.foo()`.

Экспортируем значения наружу когда они должны быть доступны во внешних модулях.

## Правила
1. Если вы делаете экспорт какого либо значения из модуля, то экспортировать нужно не более одного значения.
2. Если нужно экспортировать несколько значений, то их нужно объединить.
    1. Создаём в модули объект в глобальной области видимости
    2. Внутри этого объекта создаём методы
3. Файл модуля называем также как и экспортируемое значение, если имя двойное то через дефис.

Пример:

    // Файл utils.js
    // Экспортируем несколько значений
    (function () {
        const a = 1

        windows.utils = {
            foo: functions () {
                return 1
            },
            foo_2: functions () {
                return 2
            },
        }
    })()

    // Импортируем несколько значений
    (function () {
        window.utils.foo;
        window.utils.foo_2;

        window.foo()
        window.foo_2()
    })()

Таким образом, код становится ясным и читаемым.

## Разное
- смотрим всё что находится в глобальной области видимости через консоль `window`

## Общение модулей напрямую
Например модуль работы с ползунком слайдера, смещаем ползунок. А то что ползунок сместился, узнает другой молдуль: обработка звука, смена цвета фото, зум гугл карты, шкала цены и т.д.

- передаём функцию как параметр
- колбэк это такой механизм, когда мы передаем функцию как параметр другой функции
- обработчики событий тоже являются колбэками

Пример:

    // модуль вызывает функцию
    slider(foo)

    // модуль слайдера
    var slider = function (foo) {
        foo() // колбэк
    }

    // модуль слайдера (можно использовать cb)
    var slider = function (cb) {
        cb() // колбэк
    }

Пример 2, изменяем наименование для гугл карт:

    // модуль вызывает функцию
    slider(zoomMap)

    // модуль слайдера
    var slider = function (onSliderChange) {
        onSliderChange() // колбэк
    }

Колбэк - это функция которая передается снаружи для того чтобы описать специфичное поведение.
