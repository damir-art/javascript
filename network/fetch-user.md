# fetch() user
fetch() - это универсальная функция которая принимает url, url по которому нужно отправить запрос.  
Функция fetch() бывает пользовательской (XMLHttpRequest + Promise) и встроенной в JavaScript.  
fetch() - пришел на замену XMLHttpRequest.

Асинхронные операции нужно оборачивать в промисы, нам  в этом поможет функция fetch().

## Пример №1

    const loadButton = document.querySelector('#loadButton')
    const result = document.querySelector('#result')

    loadButton.addEventListener('click', function () {
      // Функция fetch возвращает Promise поэтому можем использовать
      fetch('cars.json')
        .then(() => {
          console.log('Ответ получен!');
        })
        .catch(() => {
          console.error('Ошибка');
        })
    })

    function fetch(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.send()
    
        xhr.addEventListener('load', function () {
          if (xhr.status >= 400) {
            reject()
          } else {
            resolve()
          }
        })
      })
    }

## Пример №2
Промис может передавать значения (value) в колбэк (then):

    const loadButton = document.querySelector('#loadButton')
    const result = document.querySelector('#result')

    loadButton.addEventListener('click', function () {
      // Функция fetch возвращает Promise поэтому можем использовать
      fetch('cars.json')
        .then((cars) => {
          // console.log('Ответ получен!', value);
          for (const car of cars) {
            result.appendChild(getCar(car))
          }
        })
        .catch(() => {
          console.error('Ошибка');
        })
    })

    function fetch(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.send()

        xhr.addEventListener('load', function () {
          if (xhr.status >= 400) {
            reject()
          } else {
            // resolve(1984)
            resolve(xhr.response)
          }
        })
      })
    }

    function getCar(car) {
      const div = document.createElement('div')
      div.classList.add('car')
      div.textContent = `${car.brand}: ${car.model}`
      return div
    }

## Пример №3
`error`, `abort` события связанные с сетевыми ошибками:

    const loadButton = document.querySelector('#loadButton')
    const result = document.querySelector('#result')

    loadButton.addEventListener('click', function () {
      // Функция fetch возвращает Promise поэтому можем использовать
      fetch('cars.json')
        .then((cars) => {
          // console.log('Ответ получен!', value);
          for (const car of cars) {
            result.appendChild(getCar(car))
          }
        })
        .catch(() => {
          console.error('Ошибка');
        })
    })

    function fetch(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.send()

        xhr.addEventListener('load', function () {
          if (xhr.status >= 400) {
            reject()
          } else {
            // resolve(1984)
            resolve(xhr.response)
          }
        })
        // сокращенный аналог xhr.addEventListener('error', reject)
        xhr.addEventListener('error', () => {
          reject()
        })
        xhr.addEventListener('abort', () => {
          reject()
        })
      })
    }

    function getCar(car) {
      const div = document.createElement('div')
      div.classList.add('car')
      div.textContent = `${car.brand}: ${car.model}`
      return div
    }
