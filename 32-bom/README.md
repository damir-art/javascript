# Browser API (BOM)
Браузерное окружение:

- navigator - информация о браузере и операционной системе
- screen
- location - информация о текущем URL-адресе, перенаправление на другой
- frames
- history
- XMLHttpRequest
- setTimeOut
- alert/confirm/prompt
- localStorage
- cookie

# Объект localStorage
- https://www.youtube.com/watch?v=b_Ph0Yzatk4
- https://www.youtube.com/watch?v=3-bZ7gLVSzo

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

    document.querySelector('button').addEventListener('click', function(event){
        var value = document.querySelector('input').value

        var obj = {
            text: value
        }

        localStorage.setItem('Object value', JSON.stringify(obj))
    })

    document.addEventListener('DOMContentLoaded', function(){

        // если объект пустой, то будет ошибка
        // поэтому в if добавляем еще и 'obj' для проверки на null
        // в фаерфокс нет ошибок а в гугл хром есть
        var obj = JSON.parse(localStorage.getItem('Object value'))

        if (obj && obj.text && obj.text.trim()) {
            document.querySelector('h1').textContent = obj.text
        }

    })

## cookie
https://www.youtube.com/watch?v=pmd8D_YZ0BE - Cookie, LocalStorage, SessionStorage

## SessionStorage, IndexedDB, WebSQL
