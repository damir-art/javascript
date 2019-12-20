# arguments
**arguments** &ndash; это объект переданных в функцию параметров.

Пишем внутри функции `console.log(arguments)` или `console.log(...arguments)`

    function getArg(a, b, c) {
        console.log(arguments)    // Arguments(3)
        console.log(arguments[0]) // Иван
        console.log(...arguments) // Иван Иванов Иванович
    }

    getArg('Иван', 'Иванов', 'Иванович')