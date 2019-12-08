# Делегирование событий
**Делегирование событий** &ndash; это оптимизация, улучшение производительности кода JavaScript. Суть зуключается в том, чтобы добавить прослушку событий не на каждый элемент прослушки, а на их общую обёртку.

* **getElementById()** &ndash; самый быстрый метод при работе с DOM-деревом.

## Не оптимизированный код

    var ps = document.querySelectorAll('p')

    for(var i = 0; i < ps.length; i++ ) {
        ps[i].addEventListener('click', function(event){
            event.target.style.color = 'red'
        })
    }

## Оптимизированный код
Прослушка `addEventListener()` висит только на одном элементе *(обертке)*, а не на множестве элементов.

Переменная `tagName` содержит в себе имя тега в нижнем регистре.

    document.getElementById('wrapper').addEventListener('click', function () {
        var tagName = event.target.tagName.toLowerCase()

        // Меняем цвет по имени тега
        if(tagName === 'p') {
            event.target.style.color = 'green'
        }
        console.log(tagName)

        // меняем цвет по имени класса
        if(event.target.classList.contains('class_name')) {
            event.target.style.color = 'orange'
        }
    })