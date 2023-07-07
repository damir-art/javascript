# Объект localStorage
Local storage - это внутреннее хранилище браузера, которое мы можем использовать для записи нужной нам информации вформате "ключ-значение".

- `localStorage["hello"] = "Привет"` - присвоим глобальному объекту localStorage, ключ "hello", со значением "Привет",
- Чтобы посомтреть в "Инспекторе браузера" на localStorage нужно перейти в `Хранилище > Локальное хранилище > Адрес сайта`,
- `localStorage["hello"]` - получаем доступ к значению ключа `hello`,
- Также можно использовать и точечную нотацию: `localStorage.hello = "Привет"`, `localStorage.hello`,
- Размер хранилища localStorage составляет от 5 до 10 Мб, зависит от браузера и ОС,

В localStorage можно сохранять только строки, все остальные типы данных преобразуются в строку:

    localStorage["number"] = 123;
    console.log(typeof localStorage["number"]); // string

Сохраняем в localStorage объект:

    localStorage["obj"] = { a: 123 };
    console.log(localStorage["obj"]); // [object Object]

Из строки `[object Object]` нельзя извлечь данные, поэтому перед сохранением объекта в localStorage, преобразует объект в JSON формат, с помощью `JSON.stringify()`:

    localStorage["obj"] = JSON.stringify({ a: 123 });
    console.log(localStorage["obj"]); // {"a":123}

Преобразовываем JSON-строку в объект `JSON.parse()`:

    JSON.parse( localStorage["obj"] );

## window.storage
Также при работе с localStorage следует учитывать следующую особенность. Если в браузере открыты несколько вкладок со страницами одного домена, то при внесении изменений в localStorage на одной вкладке, у глобального объекта window возникнет событие `storage`, которое можно обработать в других вкладках.

    window.addEventListener( 'storage', function(event) {
      console.log(event);
      // load.click(); // синхронизируем вкладки, см кнопку load в example.md
    });

## Старая запись
Пользовательские данные раньше хранили в куки, теперь можно хранить в специальном хранилище localStorage. В браузере Firefox, данные хранимые в localStorage, можно посмотреть в `Инспектор > Хранилище > Локальное хранилище > http...`

    // znachenie в строковом формате, если это объект то перевести в строку через JSON.stringify
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

## sessionStorage, indexedDB, WebSQL

## Разное
- https://www.youtube.com/watch?v=b_Ph0Yzatk4
- https://www.youtube.com/watch?v=3-bZ7gLVSzo
- https://learn.javascript.ru/localstorage