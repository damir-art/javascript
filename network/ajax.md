# AJAX
## Отправляем get и post запросы с помощью AJAX.

AJAX - (асинхронный JavaScript) &ndash; это JavaScript-методы которые позволяют в фоновом режиме отправить запросы на сервер, получить ответ от сервера и работать с этим ответом.

Главная фишка AJAX - это отсутствие перезагрузки страницы при отправки запроса из формы.

**fetch** - более современный метод работы используемый вместо `XMLHttpRequest`.

## XMLHttpRequest
https://learn.javascript.ru/xmlhttprequest

Для работы с AJAX, используют объект XMLHttpRequest и его методы. Также этот объект используется при создании SPA.

XMLHttpRequest имеет два режима работы: синхронный и асинхронный (основной).

    const xhr = new XMLHttpRequest() // создание объекта (запроса)
    // xhr.open('get', 'http://jsonplaceholder.typicode.com/users') // конструирование запроса
    xhr.open('get', 'data.js')
    xhr.send() // отправка запроса

    xhr.addEventListener('readystatechange', function () { 
        if (this.readyState == 4 && this.status == 200) {
            foo(this.responseText)
        }
    })

    function foo (data) {
        console.log(data)
    }
