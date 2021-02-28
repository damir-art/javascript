# Объект Event
Когда браузер вызывает функцию обработчик. Он автоматически передает в эту функцию специальный объект Event (глобальный объект события).

    elem.addEventListener('click', function (e) {
        console.log(e)
    })

- Объект Event содержит в себе информацию о событии, которое только что произошло, со множеством параметров, для каждого события
- Вместо `e` можно использовть любое название `event`, `ev` и т.д.

Остальные частоиспользуемые свойства:
- console.log(e) // вся информация о конкретном событии
- e.type - имя события
- event.target
- event.target.nodeName и т.д.
- вместо this лучше использовать event.target
- event.target.dataset - работаем с data-* атрибутами

Управляем или отменяем поведением по-умолчанию
- event.stopPropagation()
- event.preventDefault() // Отмена действия (события) по-умолчанию

Отменяем погружение-всплытие:

    for(var i = 0; i < divs.length; i++ ) {
        divs[i].addEventListener('click', function(event){
            event.stopPropagation()
            console.log(this.getAttribute('id'))
        })
    }
