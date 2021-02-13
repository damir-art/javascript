# Изучаем API, JSON, Fetsh

Может понадобиться плагин JSONView.

https://jsonplaceholder.typicode.com/ - тестирование клиент серверного взаимодействия. Реализуем кнопку, при нажатии на которую будет загружаться список пользователей.

**fetch()** - делает запрос на удалённый сервер и возвращает промис. Предназначен для более удобной работы с AJAX-запросами. Красивая оболочка с промисами, над `XMLHttpRequest`, которая позволяет делать запросы в более удобном виде. fetch всегда  возвращает промис.

## index.html

    <hr />
        <button id="load_users">Загрузить пользователей</button>
    <hr />
    
    <ul id="list"></ul>

## index.js

    document.querySelector('#load_users').addEventListener('click', load_users)

    function load_users() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        console.log(fetch(url)) // promise
    }

Console > Network > All или XHR > users > Preview или Response

    function load_users() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(function (response) {
                console.log(response)
            })
    }

Выводим в консоль, JSON-объект.

    function load_users() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        // console.log(fetch(url))
        fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
            })
    }

Полный скрипт:
