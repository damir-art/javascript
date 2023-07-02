# Примеры

## Блокирование кнопки
Зачем блокируем? Чтобы не нажать два раза?  
Кликаем по кнопке, становится заблокированной до тех пор пока не отработает `setTimeout`.

    btn.addEventListener('click', function () {
      this.setAttribute("disabled", "true")
      setTimeout(function () {
        console.log('Привет SetTimeout()')
        this.removeAttribute("disabled")
      }.bind(this), 1000)
    })
