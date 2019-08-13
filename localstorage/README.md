# Объект localStorage

Пользовательские данные раньше хранили в куки, теперь можно хранить в специальном хранилище localStorage. В браузере Firefox, данные хранимые в localStorage, можно посмотреть в `Инспектор > Хранилище > Локальное хранилище > http...`

    // znachenie в строковом формте, если это объект то перевести в строку через JSON.stringify
    // localStorage.setItem('Описание данных', znachenie)

    // пишем в input и сохраняем в loacalStorage по клику на button
    // сохранённый текст при перезагрузки страницы вставляется в заголовок

    document.querySelector('button').addEventListener('click', function(event){
        var value = document.querySelector('input').value
        localStorage.setItem('input value', value)
    })

    // событие сработает при полной загрузке DOM-дерева, при этом событии необязательно помещать <script> в футер
    document.addEventListener('DOMContentLoaded', function(){
        var text = localStorage.getItem('input value')
        if (text && text.trim()) {
            document.querySelector('h1').textContent = text
        }
    })

## Храним в localStorage объект
