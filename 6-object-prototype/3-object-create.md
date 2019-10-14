# Object.create()

Рассмотрим способ создания объекта через `Object.create()`. Object - самый глобальный класс в JavaScript. В методе create(), первый параметр это прототип объекта, второй параметр это свойства объекта.

    var car = Object.create({прототип}, {свойства})

Пример:

## Ссылки
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getownpropertydescriptor - value и остальные
* writable - запрет на изменение значения свойств
