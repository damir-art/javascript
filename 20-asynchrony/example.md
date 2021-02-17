# Примеры

## Блокирование кнопки
Кликаем по кнопке, остановится заблокированной до тех пор пока не отработает `setTimeout`.

    btn.addEventListener('click', function () {
        
        this.setAttribute("disabled", "true")

        setTimeout(function () {
            console.log('Привет SetTimeout()')
            this.removeAttribute("disabled")
        }.bind(this), 1000)

    })