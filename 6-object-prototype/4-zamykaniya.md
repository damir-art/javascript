# Замыкания в JavaScript
Замыкание - это возможность языка создавать локальный `scope` *(область видимости)* данных, и затем с ним работать. При замыкании у каждой сушности *(например counterA и counterB)* свои собственные переменные.

Для изучения замыканий, создадим функцию, которая будет возвращать функцию или объект. Локальные переменные функции замыкаются в функциях и методах находящихся в `return`.

Теперь мы можем создавать сходные сущности у которых своя область видимости и переменные.

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

    var createCounter = function() {
        var counter = 0

        return {
            increment: function() {
                counter++
            },
            decrement: function() {
                counter--
            },
            getCounter: function() {
                return counter
            }
        }
    }

    // Переменные являются объектами
    var counterA = createCounter('Counter A')
    var counterB = createCounter('Counter B')

    // counter = 3
    counterA.increment()
    counterA.increment()
    counterA.increment()

    // counter = -2
    counterB.decrement()
    counterB.decrement()

    console.log(counterA.getCounter())
    console.log(counterB.getCounter())
