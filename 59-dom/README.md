# DOM в JavaScript

DOM &ndash; это API браузера, созданное для того чтобы JavaScript мог взаимодействовать с HTML и CSS-кодом веб страницы.

Размещайте JavaScript-код строго перед закрывающим тегом `body`.

    let out = document.getElementById('id_name')
    console.log(out.innerText)

Можно обращаться по id без создания переменной (в стандарте этого нет):

    <div id='myID'></div>
    myID.style.color = 'green'

## Размещаем скрипт где угодно, в коде HTML-страницы
Данное событие сработает при полной загрузке DOM-дерева, скрипт внутри него не обязательно помещать в футер:

    document.addEventListener('DOMContentLoaded', function() {
        console.log('loaded')
    })
