# NFE
Function Expression:

    let hello = function (a, b) {
        return a + b
    }

    console.log( hello(3, 4) ) // 7

Named Function Expression:

    let hello = function nHello (a, b) {
        return a + b
    }

    console.log( hello(3, 4) ) // 7

Позволяет функции ссылаться на саму себя. И при этом не доступна за пределами функции.
