# Свойства узлов
Получаем доступ к содержимому элементов и их свойствам.

- textContent
- hidden
- nodeType
- nodeName
- tagName
- innerHTML
- outerHTML
- innerText
- nodeValue/data

Разное:
- у разных DOM-узлов могут быть разные свойства (ссылки, инпуты и т.д.)
- свойства текстовых узлов и элементов тоже отличаются
- у узлов есть и общие свойства и методы
- DOM-узлы это обычные JavaScript-объекты

Иерархия узлов:

    EventTarget
        Node
            Text
            Element
                HTMLElement
                    HTMLInputElement
                    HTMLBodyElement
                    HTMLAnchorElement
                    ...
                SVGElement
                XMLElement
            Comment

## textContent (рекомендуется)
Получить весь текст между тегами, теги не показываются:

    div = document.getElementById('id')
    console.log(div.textContent)

Добавить текст, теги добавляются как текст:

    div = document.getElementById('id')
    div.textContent = '<b style="color: green;">Hello</b>'

Используется для вставки текста на сайт безопасным способом, вырезая все теги.

## hidden
Скрывает элемент с помощью JavaScript или атрибута в HTML. Аналог `display: none;`

    <div hidden> Этот див скрыт </div>

Так тоже можно скрыть:

    el.hidden = true

## nodeType
Показывает тип узла DOM.

    el.nodeType == 1 // узел-элемент
    el.nodeType == 3 // текстовый узел
    el.nodeType == 9 // document

Обычно чтобы узнать тип узла используют `instanceof`:

    el instanceof HTMLElement // вернет true если это узел элемент
    el instanceof Text        // вернет true если это текстовый узел

## nodeName
Получить название типа узла. Если это элемент то показывает имя тега.

## tagName
Получить имя тега, данное свойство есть только у элементов.

У элементов nodeName и tagName, показывает одно и тоже.

## innerHTML
Получить всё, что находится между тегами элемента, дочерние элементы и текст:

    elem = document.getElementById('id')
    console.log(div.innerHTML)

Внедрить что либо между тегами элемента, дочерние элементы и текст (заменит всё что было внутри):

    elem = document.getElementById('id')
    elem.innerHTML = '<b style="color: green;">Hello</b>'

При вставке HTML- кода, может исправить его, например добавить закрытый тег.

    elem.innerHTML += elem.innerHTML + 'Что либо'

Аккуратней используйте с `+=` иза полной перезаписи и вставки кода, может нагружать систему.

## outerHTML
Работает так же как и `innerHTML`, но захватывает еще и сам элемент.

    const li = document.querySelector('.three')

    console.log(li.innerHTML) // третий
    console.log(li.outerHTML) // <li class="three">Третий</li>

Странности:

    <div class="div">блочный элемент</div>
    const div = document.querySelector('.div')
    div.outerHTML = '<p>Параграф</p>'

- `div` заменили на параграф
- в коде появился параграф
- но мы при обращении к `div.outerHTML`
- снова выдает `div`

Дополнительно:

    const div = document.querySelector('.div')
    const pf = document.querySelector('.pf')

    div.outerHTML = '<p class="pf">Параграф</p>'

    console.log(div.outerHTML) // <div class="div">блочный элемент</div>
    console.log(pf.outerHTML)  // pf is null, перенести объявление переменной после создания параграфа

## innerText (не рекомендуется)
Получить весь текст между тегами, теги не показываются:

    div = document.getElementById('id')
    console.log(div.innerText)

Добавить текст, теги добавляются как текст:

    div = document.getElementById('id')
    div.innerText = '<b style="color: green;">Hello</b>'

## nodeValue/data
Имеется у текстовых узлов, например у комментариев или текста не в теге. Читает текст.

## Свойства конкретных элементов
Есть еще множество других свойств зависящих от конкретного элемента, например: value, href, id и т.д у элементов input, select, textarea, a и т.д. Смотрите свойства элемента в консоли.

## Разное
Текст еще можно получить через `elem.childNodes`
