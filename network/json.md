# JSON
JSON - это формат для передачи данных по сети. Данные по сети отправляются в виде строки.  
JSON - строковое представление JavaScript объекта.

- JSON-файл - это JavaScript объект со свойствами, без методов,
- Значения свойств (ключей) могут быть объектами, массивами, строками, числами, булев,
- Файл может состоять из нескольких объектов объединённых в массив,
- Данный файл содержит объекты (и массивы объектов), без имени объекта,
- Файл имеет расширение `.json`,
- Свойства (ключи) и строковые значения нужно поместить в двойные кавычки, числа и булев без кавычек,
- У последних элементов запятые не ставить.

Пример файла `car.json`, содержащий данные об автомобилях:

    [
      {
        "brand": "bmw",
        "model": "320i"
      },
      {
        "brand": "mercedes benz",
        "model": "c220"
      }
    ]

## Объект JSON
Объект JSON имеет два метода `JSON.parse()`, `JSON.stringify()`:
- `JSON.parse()`     - преобразует строку в объект или массив,
- `JSON.stringify()` - преобразует объект или массив в строку.

Примеры:

    JSON.stringify({name: 'Иван'}) // "{"name":"Иван"}"
    JSON.stringify([1,2,3])        // "[1,2,3]"
    JSON.parse('{"name":"Иван"}')  // Object { name: "Иван" }
    JSON.parse("[1,2,3]")          // Array(3) [ 1, 2, 3 ]

## Пример №1
Получаем JSON-данные и выводим их на страницу.

    const loadButton = document.querySelector('#loadButton')
    const result = document.querySelector('#result')

    loadButton.addEventListener('click', function () {
      /* ОТПРАВЛЯЕМ АСИНХРОННЫЙ ЗАПРОС НА СЕРВЕР */

      // создаём объект, который умеет отправлять асинхронные запросы
      const xhr = new XMLHttpRequest()
      
      // подготавливаем объект перед отправкой
      xhr.open('GET', 'cars.json')

      // отправляем запрос на сервер
      xhr.send()

      // получаем содержимое ответа сервера 'load', только потом обращаемся к xhr
      xhr.addEventListener('load', function () {
        // console.log('Ответ получен!');
        if (xhr.status === 404) {
          result.innerHTML = 'Данные не найдены'
        } else {
          const cars = JSON.parse(xhr.responseText) // в responseText хранится информация в текстовом виде
          for(const car of cars) {
            result.appendChild(getCar(car))
          }
        }
      })
    })

    function getCar(car) {
      const div = document.createElement('div')
      div.classList.add('car')
      div.textContent = `${car.brand}: ${car.model}`
      return div
    }

## Пример №2
Сокращенный вариант (без использования JSON.parse()), когда мы точно знаем что будем работать с JSON-файлом.  
В `response` хранится информация в том виде, в котором указано в `xhr.responseType`.

    const loadButton = document.querySelector('#loadButton')
    const result = document.querySelector('#result')

    loadButton.addEventListener('click', function () {
      /* ОТПРАВЛЯЕМ АСИНХРОННЫЙ ЗАПРОС НА СЕРВЕР */

      // создаём объект, который умеет отправлять асинхронные запросы
      const xhr = new XMLHttpRequest()

      // подготавливаем объект перед отправкой
      xhr.open('GET', 'cars.json')
      xhr.responseType = 'json' // используем когда точно знаем что работаем с JSON файлами, JSON.parse() теперь не нужен

      // отправляем запрос на сервер
      xhr.send()

      // получаем содержимое ответа сервера 'load', только потом обращаемся к xhr
      xhr.addEventListener('load', function () {
        // console.log('Ответ получен!');
        if (xhr.status === 404) {
          result.innerHTML = 'Данные не найдены'
        } else {
          const cars = xhr.response // JSON.parse() теперь не нужен

          result.innerHTML = ''
          for(const car of cars) {
            result.appendChild(getCar(car))
          }
        }
      })
    })

    function getCar(car) {
      const div = document.createElement('div')
      div.classList.add('car')
      div.textContent = `${car.brand}: ${car.model}`
      return div
    }
