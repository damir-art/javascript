# Изучаем API, JSON, Fetsh

Может понадобиться плагин JSONView.

https://jsonplaceholder.typicode.com/ - тестирование клиент серверного взаимодействия. Реализуем кнопку, при нажатии на которую будет загружаться список пользователей.

**fetch()** - делает запрос на удалённый сервер и возвращает промис.

## index.html

    <hr />
        <button id="load_users">Загрузить пользователей</button>
    <hr />

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
