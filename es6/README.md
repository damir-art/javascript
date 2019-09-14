# ES6 (EcmaScript 6)
## Новые возможности JavaScript
Все переменные создаём через const, для циклов через let.

## var, let, const &ndash; переменные
В переменных объявленных через var можно изменять значения и тип данных. Использовать не рекомендуется.

    var color = '#333'
    color = 5
    console.log(color) // 5
    
В переменных объявленных через let можно изменять значения и тип данных.

    let color = '#333'
    color = 5
    console.log(color) // 5

В переменных объявленных через const нельзя изменять значения или тип данных. Чаще всего используют его.

    const color = '#333'
    color = 5
    console.log(color) // покажет ошибку о недопустимости изменения

### let
Рассмотрим разницу между var и let.

    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, 1000) // 5
    }

У let каждый проход по циклу внутри скобок, находится в отдельной области видимости.

    for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, 1000) // 0 1 2 3 4
    }

const не получится использовать в циклах, если её значение меняется

    for (const i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, 1000) // покажет ошибку о недопустимости изменения
    }

Всегда используйте let там где значение переменной меняется, во всех остальных случаях, используйте const.

### Константы
В ES6 появились константы, чьё значение нельзя менять.

До ES6:

    var HEX = '#333'
    HEX = '#ccc'
    console.log(HEX) // #ccc

Начиная с ES6:

    const cHEX = '#333'
    cHEX = '#ccc'
    console.log(HEX) // покажет ошибку о недопустимости изменения

У массивов и объектов можно менять (удалять, добавлять) элементы, через методы Object, Array:

    const OBJ = { name: 'damir' }
    OBJ.name = 'denis'
    console.log(OBJ) // { name: 'denis' }

    const ARR = [1, 2, 3]
    ARR.unshift(5)
    console.log(ARR) // [5, 1, 2, 3]
