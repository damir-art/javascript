# string
Строки в JavaScript.

## XMLSerializer
Сериализует HTML-код или узлы в XML-строку.

Получаем HTML-код страницы, превращаем его в строку и выводим на страницу:

    let insert = document.querySelector(" .insert "); // куда вставить код страницы
    let serializer = new XMLSerializer(); // создаём объект

    xmlString = serializer.serializeToString( document ); // получаем код страницы в виде строки
    // console.log( xmlString );
    insert.textContent = xmlString; // вставляем код на страницу, можно вставить в тег pre

Получаем список элементов, превращаем его в строку и выводим на страницу:

    let list = document.querySelector(" .list "); // DOM элемент (узел) списка
    let insert = document.querySelector(" .insert "); // куда вставить код списка

    let serializer = new XMLSerializer(); // создаём объект
    xmlString = serializer.serializeToString( list ); // получаем HTML-код списка в виде строки
    console.log( xmlString );
    insert.textContent = xmlString; // вставляем HTML-код списка на страницу

Можно использовать для отправки HTML-кода с клиента на веб-сервер.
