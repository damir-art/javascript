# Cookies
https://learn.javascript.ru/cookie  

Посмотреть можно в `Исследовать > Хранилище > Куки`.
- Для кук можно установить время жизни, параметр `; expires=...`,
- При обновлении страницы, куки отправляются на сервер (в этом можно убедиться открыв вкладку Сеть > index.html > Куки).

Cookies (куки) - это часть протокола HTTP и к языку программирования JavaScript они отношения не имеют. Механизм кук позволяет серверу сохранять некоторую информацию на локальном компьютере клиента и автоматически передавать эту информацию обратно на сервер при каждом обращении данного клиента к этому серверу. Обычно куки используются сервером для идентификации клиента и получения его индивидуальных настроек без необходимости хранения данной информации на ресурсах самого сервера.

По способу хранения данных на локальном компьютере клиента куки похожи на хранилище localStorage. Разница между ними в том, что куки автоматически отправляются на сервер в заголовках HTTP-запросов при каждом обращении клиента ксерверу, а данные из localStorage остаются в браузере и никуда сами собой не уходят, для их отправки на сервер необходимо писать код на JavaScript с использованием асинхронных запросов.

## Создание cookies из JavaScript
Куки на клиенте могут быть установлены двумя способами:
- веб-сервер, к которому клиент обращается с запросом, может попросить браузер установить определённую куку, отправив её в заголовке HTTP-ответа,
- куку можно создать из сценария JavaScript, для этого нужно в свойство `cookie` объекта `document` записать строку вида `"ключ = значение"`.

Пример:

    document.cookie = "color = green";
    document.cookie = "font-size = 16px";

Посмотреть установленные куки:

    console.log(document.cookie); // color=green; font-size=16px

Преобразовываем список кук в виде строки в объект:

    // Сначала преобразуем строку в массив
    console.log(document.cookie.split("; ")); // Array [ "color=green", "font-size=16px" ]

Далее этот массив с помощью метода `reduce()` преобразуем в объект:

    let cookies = document.cookie.split('; ').reduce((prev, current) => {
      const [name, value] = current.split('=');
      prev[name] = value;
      return prev;
    }, {});

    console.log(cookies);              // Object { color: "green", "font-size": "16px" }
    console.log(cookies.color);        // green
    console.log(cookies["font-size"]); // 16px

## Добавляем куки в браузер, через форму

    // код html
    <form action="#">
      <input  id="name"  type="text" placeholder="Введите имя" />
      <input  id="value" type="text" placeholder="Введите значение" />
      <button id="add"   type="button">Сохранить</button>
    </form>

    // код js
    const name = document.getElementById("name");
    const text = document.getElementById("text");
    const add  = document.getElementById("add");

    add.addEventListener("click", function() {
      document.cookie = `${name.value}=${value.value}`;
      // очищаем форму
      name.value = "";
      value.value = "";
    });
