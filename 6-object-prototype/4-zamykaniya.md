# Замыкания в JavaScript
Замыкание - это возможность языка создавать локальный `scope` *(область видимости)* данных, и затем с ним работать.

## Пример №1. Возвращаем функцию.
    var createCounter = function(counterName) {
        var counter = 0

        return function() {
            console.log(counterName, ++counter)
        }
    }

    // функция одна и та же, область видимости у функции разная,
    // с собственными переменными counter - это и есть замыкание
    var counterA = createCounter('Counter A')
    var counterB = createCounter('Counter B')

    // counterA() // 1
    // counterA() // 2
    // counterB() // 1
    // counterA() // 3

    // набираем в консоли
    // counterA
    // counterB

    // в пременной counterA, хранится объявление функции
    // console.log(counterA)

## Пример №2. Возвращаем объект.
