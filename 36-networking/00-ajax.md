# Асинхронные сетевые запросы (AJAX)

Цель существования технологии AJAX:
- При нажатии на кнопку
- Отправляется асинхронный запрос на сервер
- Загружается содержимое файла
- Контент файла вставляется в тег DIV
- При этом не должно быть никаких перезагрузок страниц (асинхронно и без перезагрузки)

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

            console.log(xhr) // объект
            console.log(xhr.response) // есть свойство 'response'
            console.log(xhr.responseText) // есть свойство 'responseText'

            if (xhr.status === 404) {
                result.innerHTML = 'Данные не найдены'
            } else {
                result.textContent = xhr.responseText // вставляем текстовое содержимое
            }
        })
    })