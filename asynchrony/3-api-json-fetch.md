# Изучаем API, JSON, Fetsh

https://jsonplaceholder.typicode.com/ - тестирование клиент серверного взаимодействия. Реализуем кнопку, при нажатии на которую будет загружаться список пользователей.

index.html:

    <hr />
        <button id="load_users">Загрузить пользователей</button>
    <hr />

index.js:

    document.querySelector('#load_users').addEventListener('click', load_users)

    function load_users() {
        console.log('Загрузить пльзователей')
    }
