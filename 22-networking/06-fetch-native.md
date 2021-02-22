# fetch() - встроенная
fetch() - обёртка над XMLHttpRequest, предназначена для того чтобы мы в ручную не оборачивали XMLHttpRequest в промисы.

fetch() - функция веб-браузера, которая уже работает на промисах.

Суть fetch():
- принимает url по которому нужно сделать запрос
- возвращает промис, который будет разрешен, когда придет ответ от сервера

В консоли можно ввести `fetch` и получить функцию, можно ввести `fetch(url)` и получить промис, можно в консои ввести:

    fetch('cars.json').then((response) => {
        console.log(response)
    })

И получить объект, аналог `XMLHttpRequest`, в котором нет тела ответа (данных).

## Получаем тело ответа

### response.text()

    fetch('cars.json').then((response) => {
        //console.log(response.text()) // возвращает промис, поэтому нужно написать еще один then
        response.text().then((text) => {
            console.log(text) // получаем массив объектов в виде текста
        })
    })

### response.JSON()
Весь код с нативным fetch

    const loadButton = document.querySelector('#loadButton')
    const result = document.querySelector('#result')

    loadButton.addEventListener('click', function () {
        fetch('cars.json')
            .then(response => {
                return response.json()
            })
            .then(cars => {
                for (const car of cars) {
                    result.appendChild(getCar(car))
                }
            })
            .catch(() => {
                console.error('Ошибка')
            })
    })

    function getCar(car) {
        const div = document.createElement('div')
        div.classList.add('car')
        div.textContent = `${car.brand}: ${car.model}`
        return div
    }

## С обработкой ошибок

    const loadButton = document.querySelector('#loadButton')
    const result = document.querySelector('#result')

    loadButton.addEventListener('click', function () {
        fetch('cars.json')
            .then(response => {
                if (response.status >= 400) {
                    return Promise.reject() // отсюда, программа перейдёт в .catch()
                }
                return response.json()
            })
            .then(cars => {
                for (const car of cars) {
                    result.appendChild(getCar(car))
                }
            })
            .catch(() => {
                console.error('Ошибка')
            })
    })

    function getCar(car) {
        const div = document.createElement('div')
        div.classList.add('car')
        div.textContent = `${car.brand}: ${car.model}`
        return div
    }
