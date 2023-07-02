# Потеря окружения
Чтобы не потерять окружение, нужно создать дополнительные области видимости.

Здесь кнопкам присвоится одно и тоже значение, последнее в списке цикла:

    var buttons = document.querySelectorAll('button')

    for (var i = 0; i < buttons.length; i++ ) {
        var button = buttons[i]
        button.addEventListener('click', function (evt) {
            console.log(button.value)
        })
    }

    console.log(button.textContent)

Здесь кнопкам присвоятся разные значения:

    var buttons = document.querySelectorAll('button')

    var addClickListener = function (button) {
        button.addEventListener('click', function (evt) {
            console.log(button.value)
        })
    }

    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i]
        addClickListener(button)
    }

Тоже самое но через функцию IIFE:

    var buttons = document.querySelectorAll('button')

    for (var i = 0; i < buttons.length; i++) {
        (function (button) {
            button.addEventListener('click', function (evt) {
                console.log(button.value)
            })
        })(buttons[i])
    }
