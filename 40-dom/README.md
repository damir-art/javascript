# DOM в JavaScript

DOM &ndash; это API браузера, созданное для того чтобы JavaScript мог взаимодействовать с HTML и CSS-кодом веб страницы.

Размещайте JavaScript-код строго перед закрывающим тегом `body`.

    div = document.getElementById('id')
    console.log(div.innerText)

Можно обращаться по id без создания переменной (в стандарте этого нет):

    <div id='myID'></div>
    myID.style.color = 'green'

## Работаем с CSS классами
**el.classList...** - объект отвечающий за работу с классами CSS
* **add('box--red')** &ndash; добавляем класс к выбранному элементу
* **remove('box--blue')** &ndash; удаляем класс у выбранного элемента
* **contains('box--blue')** &ndash; проверяем, содержится ли класс у выбранного элемента

## Создаём элементы
* **document.createElement('tagName', 'куда вставлять')** - создаем элемент
* insertAdjacentElement('куда', элемент) - помещаем элемент внутрь другого элемента

## Работаем с документом
    // событие сработает при полной загрузке DOM-дерева, при этом событии необязательно помещать <script> в футер
    document.addEventListener('DOMContentLoaded', function(){
        console.log('loaded')
    })

Элементы это узлы `node`, у узлов есть свои свойства и методы *(см. в инспекторе)*.