# DOM в JavaScript

DOM &ndash; это API браузера, созданное для того чтобы JavaScript мог взаимодействовать с HTML и CSS-кодом веб страницы.

Размещайте JavaScript-код строго перед закрывающим тегом `body`.

    div = document.getElementById('id')
    console.log(div.innerText)

Можно обращаться по id без создания переменной (в стандарте этого нет):

    <div id='myID'></div>
    myID.style.color = 'green'

## Размещаем скрипт где угодно, в коде HTML-страницы
Данное событие сработает при полной загрузке DOM-дерева, скрипт внутри него необязательно помещать в футер:

    document.addEventListener('DOMContentLoaded', function(){
        console.log('loaded')
    })

## Разное
Элементы это узлы `node`, у узлов есть свои свойства и методы *(см. в инспекторе)*.