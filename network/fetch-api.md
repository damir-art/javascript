# fetsh() API
Изучаем работу fetsh() с API, например публичным https://jsonplaceholder.typicode.com

https://jsonplaceholder.typicode.com/ - с поомщью этого сайта можно тестировать клиент серверное взаимодействие. Реализуем кнопку, при нажатии на которую будет загружаться список пользователей.

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
      fetch(url)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          console.log(data)
        })
    }
