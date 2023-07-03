# AJAX
AJAX - асинхронные сетевые запросы.

## Отправляем get и post запросы с помощью AJAX
AJAX - (асинхронный JavaScript) - это JavaScript-методы которые позволяют в фоновом режиме отправить запросы на сервер, получить ответ от сервера и работать с этим ответом.

Главная фишка AJAX - это отсутствие перезагрузки страницы при отправки запроса.  
fetch - более современный метод работы используемый вместо `XMLHttpRequest`.

## XMLHttpRequest
https://learn.javascript.ru/xmlhttprequest

Для работы с AJAX, используют объект XMLHttpRequest и его методы. Также этот объект используется при создании SPA. XMLHttpRequest имеет два режима работы: синхронный и асинхронный (основной).

    const xhr = new XMLHttpRequest()                                // создание объекта (запроса)
    // xhr.open('get', 'http://jsonplaceholder.typicode.com/users') // конструирование запроса
    xhr.open('get', 'data.js')                                      // тоже самое только путь относительный
    xhr.send() // отправка запроса

    xhr.addEventListener('readystatechange', function () { 
      if (this.readyState == 4 && this.status == 200) {
        foo(this.responseText)
      }
    })

    function foo (data) {
      console.log(data)
    }

Пример технологии AJAX:
- При нажатии на кнопку,
- Отправляется асинхронный запрос на сервер,
- Загружается содержимое файла,
- Контент файла вставляется в тег div,
- При этом не должно быть никаких перезагрузок страниц (асинхронно и без перезагрузки).

Пример с файлом txt:

    const loadButton = document.querySelector('#loadButton')
    const result = document.querySelector('#result')

    loadButton.addEventListener('click', function () {
      /* ОТПРАВЛЯЕМ АСИНХРОННЫЙ ЗАПРОС НА СЕРВЕР */

      // создаём объект, который умеет отправлять асинхронные запросы
      const xhr = new XMLHttpRequest()

      // подготавливаем объект перед отправкой
      xhr.open('GET', 'content1.txt')

      // отправляем запрос на сервер
      xhr.send()

      // получаем содержимое ответа сервера 'load', только потом обращаемся к xhr
      xhr.addEventListener('load', function () {
        // console.log('Ответ получен!');

        console.log(xhr)              // объект
        console.log(xhr.response)     // есть свойство 'response'
        console.log(xhr.responseText) // есть свойство 'responseText'

        if (xhr.status === 404) {
          result.innerHTML = 'Данные не найдены'
        } else {
          result.textContent = xhr.responseText // вставляем текстовое содержимое
        }
      })
    })
