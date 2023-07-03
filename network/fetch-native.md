# fetch() native
fetch() - делает запрос на удалённый сервер и возвращает промис. Предназначен для более удобной работы с AJAX-запросами. Красивая оболочка с промисами, над `XMLHttpRequest`, которая позволяет делать запросы в более удобном виде. fetch всегда возвращает промис.

fetch() - обёртка над XMLHttpRequest, предназначена для того чтобы мы в ручную не оборачивали XMLHttpRequest в промисы. fetch() - функция веб-браузера, которая уже работает на промисах.

Суть fetch():
- принимает url по которому нужно сделать запрос,
- возвращает промис, если разрешен, при ответе от сервера.

В консоли можно ввести `fetch` и получить функцию, можно ввести `fetch(url)` и получить промис.

Можно в консоли ввести:

    fetch('cars.json').then((response) => {
      console.log(response)
    })

И получить объект, аналог `XMLHttpRequest`, в котором нет тела ответа (данных).

## Получаем тело ответа

`response.text()`:

    fetch('cars.json').then((response) => {
      //console.log(response.text()) // возвращает промис, поэтому можно написать еще один then
      response.text().then((text) => {
        console.log(text) // получаем массив объектов в виде текста
      })
    })

`response.json()`, весь код с нативным fetch:

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

`Promise.reject()`, с обработкой ошибок:

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
