# Объект Event

Управляем или отменяем поведением по-умолчанию
* event
* event.target
* event.target.nodeName и т.д.
* event.stopPropagation()
* event.preventDefault()
* вместо this лучше использовать event.target
* event.target.dataset - работаем с data-* атрибутами

Отменяем погружение-всплытие:

    for(var i = 0; i < divs.length; i++ ) {
        divs[i].addEventListener('click', function(event){
            event.stopPropagation()
            console.log(this.getAttribute('id'))
        })
    }

Отменяем действие по умолчанию, например переход по ссылке:

    a.addEventListener('click', link_click)

    function link_click(event) {
        event.preventDefault()

        var div = divs[0]
        div.style.display = div.style.display === 'none'
            ? 'flex'
            : 'none'

        console.log(div.style.display)
    }