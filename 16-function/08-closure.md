# Замыкание
Замыкание - это сделать переменную приватной.

Замыкание - это использовать значение из внешней области видимости.

Замыкание - это когда функция находится внутри другой функции. Используется для создания локальных переменных, чьи значения можно сохранить и передать другим функциям (создать счетчик).

Замыкание в JavaScript - это явление, когда вызывается функция, определенная внутри другой (родительской) функции, после того как родительская функция уже завершила свою работу.

Замыкание - это возможность языка создавать локальный `scope` *(область видимости)* данных, и затем с ним работать. При замыкании у каждой сушности *(например counterA и counterB)* свои собственные переменные.

Для изучения замыканий, создадим функцию, которая будет возвращать функцию или объект. Локальные переменные функции замыкаются в функциях и методах находящихся в `return`.

Теперь мы можем создавать сходные сущности у которых своя область видимости и переменные.

## Создали счетчик

    let count = 0;
    function closure () {
        count = count + 1
        return count
    }

    let x = closure()
    let y = closure()
    let z = closure()

    console.log(x, y, z) // 1, 2, 3

## Создали счетчик через анонимную функцию
К переменной `count` имеет доступ только анонимная функция.

    function closure () {
        let count = 0; // аналог приватного свойства
        return function () {
            count = count + 1
            return count
        }
    }

    let x = closure()
    let y = closure()
    let z = closure()

    console.log(x(), x(), x()) // 1, 2, 3
    console.log(x(), y(), z()) // 4, 1, 1

У каждой переменной своё значение `count`.

## Замыкание. Возвращаем функцию

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

    counterA() // 1
    counterA() // 2
    counterB() // 1
    counterA() // 3

    // набираем в консоли или console.log(counterA), console.log(counterB)
    // в пременных counterA, counterB хранится объявление функции createCounter()
    counterA
    counterB

## Замыкание. Возвращаем объект

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

    console.log(counterA.getCounter()) // 3
    console.log(counterB.getCounter()) // -2
