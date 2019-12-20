# Разное
## Функция как элемент массива

    var operations=[]
    operations[0] = function(a, b) {
        return a + b
    }

    operations.push(function(a, b) {
        return a + b
    })

    var operations = [function(a, b) {
        return a + b
    }]

## Передача функции в другую функцию

    function calc(a, b, op) {
        // console.log(op)
        return op(a, b)
    }

    function sum(a, b) {
        return a + b
    }

    var result = calc(11, 31, sum)

    console.log(result) // 42

### Через функциональное выражение
Передача функции в другую функцию, через функциональное выражение.

    function calc(a, b, op) {
        // console.log(op)
        return op(a, b)
    }

    var sum = function(a, b) {
        return a + b
    }

    var result = calc(11, 31, sum)
    console.log(result) // 42

### Через колбэк

    function calc(a, b, op) {
        // console.log(op)
        return op(a, b)
    }

    var result = calc(11, 31, function(a, b) {
        return a + b
    })

    console.log(result) // 42
