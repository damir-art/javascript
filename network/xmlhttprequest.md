# XMLHttpRequest
XMLHttpRequest - объект для работы с HTTP-запросами. Умеет работать с любыми данными.

    var xhr = new XMLHttpRequest()
    console.log(xhr) // readyState (0)

Объект XMLHttpRequest проходит через 5 фаз запроса, `readyState`:

    unsent           - объект не отправлен (0)
    opened           - объект открыт       (1)
    headers_received - получены заголовки  (2)
    loading          - загрузка тела       (3)
    done             - запрос закончен     (4)

Указываем метод и адрес запроса, открываем объект, readyState `(1)`:

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'url/https://jsonplaceholder.typicode.com/users')
    console.log(xhr.readyState) // 1

Отправляем запрос на сервер:

    xhr.send()                  // начинается асинхронность, поэтому readyState (1)
    console.log(xhr.readyState) // 1

Результат доступен не сразу, поэтому работает через колбэки (обработчики событий):

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.send() // начинается асинхронность, поэтому readyState (1)

    xhr.addEventListener('load', function () {
      console.log(xhr.readyState) // 4, запрос окончен
      console.log(xhr.status + ' ' + xhr.statusText) // 200 OK
    })

## send и load
Так как запрос асинхронный, то ответ от сервера может прийти быстрее чем сработает обработчик события `load`. Поэтому мы должны сделать так чтобы сначала отработал обработчик, а уже потом пришел ответ от сервера.

Обработчики должны быть написаны выше чем запросы `send`:

    var xhr = new XMLHttpRequest()

    xhr.addEventListener('load', function (evt) {
      console.log(evt.target === xhr) // true
      console.log(xhr.responseText)   // JSON-данные
    })

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.send()

## Объект JSON
Преобразовываем JSON-даные (текст), в JavaScript объект с помощью JSON-объекта. Объект JSON имеет два метода `parse()` и `stringify()`.

    var xhr = new XMLHttpRequest()

    xhr.addEventListener('load', function (evt) {
      console.log(evt.target === xhr)           // true
      console.log(JSON.parse(xhr.responseText)) // JavaScript-объект
    })

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.send()

В `console.log(JSON.parse('{ "a" : 1 }'))` можно напрямую передать данные JSON и они будут преобразованы в JavaScript-объект, даже без создания объекта `xhr`.

Объект JSON, создан для замены `eval()`.

### Без JSON.parse()
Получаем сразу объект JavaScript из JSON-данных.

    var xhr = new XMLHttpRequest()
    xhr.responseType = 'json' // сразу указываем тип получаемых данных

    xhr.addEventListener('load', function (evt) {
      console.log(xhr.response) // получаем JavaScript-объект без парсинга
    })

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.send()

Используйте любой из этих двух способов.

## Разное
- `fetch` пришел на смену `XMLHttpRequest`
