# setTimeout()
Вызов функции не сразу а через некоторое время. Таймеры и интервалы `setTimeout()`, `clearTimeout()`, `setInterval()`, `clearInterval()`.

- setTimeout() - вызывает функцию 1 раз, через определённый промежуток времени
- clearTimeout(id) - отменяет setTimeout() 
- setInterval() - вызывает функцию постоянно, через определённый промежуток времени
- clearInterval(id) - отменяет setInterval()

Вызов функции не сразу, а через определенный промежуток времени называется - асонхронным.

## setTimeout()
Простая функция:

    function hello () {
        console.log('hello')
    }
    setTimeout(hello, 1000)

С аргументами:

    function hello (a, b) {
        console.log(a + ' ' + b)
    }
    setTimeout(hello, 1000, 'Hello', 'Peter')

## clearTimeout(id)
Чтобы отключить `setTimeout()` нужно присвоить его переменной, в ней будет храниться его `id`. Это `id` нужно вставить в `clearTimeout()`.

    function hello (a, b) {
        console.log(a + ' ' + b)
    }
    let timeId = setTimeout(hello, 1000, 'Hello', 'Peter')

    console.log(timeId)  // число
    clearTimeout(timeId) // hello не сработает

## setInterval()
`setInterval()` имеет аналогичный с `setTimeout()` синтаксис. Функция запускается постоянно.

Простая функция:

    function hello () {
        console.log('hello')
    }
    setInterval(hello, 1000)

Более наглядный пример:

    let a = 0
    function hello () {
        a++
        console.log('hello ' + a)
    }
    setInterval(hello, 1000)

С аргументами:

    let c = 0
    function hello (a, b) {
        c++
        console.log(`${a} ${b} ${c}`)
    }
    setInterval(hello, 1000, 'Hello', 'Peter')

### Остановка setInterval()
Чтобы остановить setInterval() можно воспользоваться условием или `setTimeout()`.

Остановка через условие:

    let c = 0
    function hello () {
        c++
        if (c == 4) clearInterval(inId)
        console.log(c)
    }
    let inId = setInterval(hello, 1000)

Остановка через условие `setTimeout()`:

    let c = 0
    function hello () {
        c++
        console.log(c)
    }
    let inId = setInterval(hello, 1000)

    function by () {
        clearInterval(inId)
    }
    setTimeout(by, 5000)


## Аналог setInterval() - вложенный setTimeout()

    let c = 0
    function hello() {
        console.log(c)
        c++
        setTimeout(hello, 1000)
    }

    setTimeout(hello, 1000)

Вложенный setTimeout() более гибок чем setInterval().

## Разное
setTimeout() выполняется после всего кода, в его лексическом окружении:

    function hello () {
        console.log('hello')
    }
    setTimeout(hello, 0)

    console.log('by') // сначала выведется by потом hello

## Старая запись
Выполнить код через некоторое время:

    window.setTimeout(function () {
        console.log('Привет через 3 сек!')
    }, 3000)

    function () {} // калбэк функция

Управляем запуском кода через функцию:

    const timeout = function(time) {
        setTimeout(function() {
            console.log('Привет через 4 сек ' + time)
        }, time)
    }

    timeout(4000)

## setInterval()
Постоянно выполнять код, через заданный интервал времени:

    let count = 0;
    setInterval(function () {
        count = count + 1
        console.log(count)
    }, 1000)

## clearInterval(foo)
`clearInterval(foo)` - останавливает работу setInterval() по имени функции

    let count = 0;
    let go = setInterval(function () {
        count = count + 1
        if (count == 10) clearInterval(go)
        console.log(count)
    }, 1000)

Остановить setInterval() по счетчику, через некотрое время

    const interval = function (quantity, time) {
        let count = 0;
        const stopInterval = setInterval(function () {
            count = count + 1
            if (count == quantity) {
                clearInterval(stopInterval)
            }
            console.log(count)
        }, 1000 * time)
    }
    interval(3, 2)

## setTimeout() и setInterval() одновременно
Остановить работу setInterval() после запуска setTimeout()

    let count = 0;

    const interval = setInterval(function () {
        count = count + 1
        console.log(count)
    }, 1000)

    setTimeout(function() {
        clearInterval(interval)
    }, 5000)

## Разное
- таймер не блокирует выполнение кода
- интерпретатор начнет выполнять таймер, только после того как выполнит весь код, в том контексте в котором находися таймер
