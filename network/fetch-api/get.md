# Метод GET
Обращаемся к URL получаем данные. По-умолчанию используется GET метод.

Создаём 3 файла:
- index.html
- send.php
- script.js

Для выполнения GET запроса, мы можем использовать функцию `fetch()` и передать ей URL сервера, к которому мы хотим обратиться. Возвращаемое значение `fetch()` - это промис, который содержит объект `Response`, содержащий статус и данные ответа сервера.

## Схема получения текста
Получаем ответ от сервера.

`index.html`:

    <div class="message"></div>
    <script src="script.js"></script>

`script.js`:

    fetch('send.php')
      .then(res => {
        return res.text();         // Получаем ответ и применяем к нему метод получения текстовой информации
        //console.log(res);        // Response
        //console.log(res.text()); // Promise
      });                          // Promise (обещание)

`send.php`:

    echo 'Hello';

- открываем Инспектор страницы,
- переходим на вкладку Сеть,
- жмём по файлу send.php,
- во вкладке Заголовки > Заголовки ответа > `Content-Type: text/html; charset=UTF-8`,
- во вкладке Ответ > `Hello`.

Получаем ответ от сервера и вставляем ответ на страницу:

    fetch('send.php')
      .then(res => {
        return res.text();
      })
      .then(function(text) {
        console.log(text);          // Hello
        message.textContent = text; // Вставляем текст в DOM элемент
      }); // Работаем с текстовой информацией

## Схема получения JSON
В PHP, мы можем обработать GET запрос и отправить обратно данные в формате JSON:

`send.php`:

    // echo json_encode('Hello'); // Можно отправить текст

    $data = [ 'name' => 'Ivan', 'age' => 21 ];
    echo json_encode($data);

`script.js`:

    fetch('send.php')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data); // Object { name: "Ivan", age: 21 }
        message.textContent = data.name;
      }); // Работаем с json данными

# Старая запись

## Получаем Promise
Можно обратиться к любому файлу, если он есть:
- fetch('http://localhost:5500/test/test.html')
- fetch('send.php')

Обращаемся к урлу:

    // Получаем Promise
    console.log(fetch('https://reqres.in/api/users'));

    Promise {<pending>}
      [[Prototype]]: Promise
      [[PromiseState]]: "fulfilled"
      [[PromiseResult]]: Response

## Получаем Response
Получаем ответ от урла (сервера):

    fetch('https://reqres.in/api/users') // Promise (обещание)
      .then(res => {
        console.log(res);
      }); // Ответ сервера

    Response {type: 'cors', url: 'https://reqres.in/api/users', redirected: false, status: 200, ok: true, ...}
      body: (...) ReadableStream (читаемый поток)
      bodyUsed: false
      headers: Headers {}
      ok: true
      redirected: false
      status: 200
      statusText: ""
      type: "cors"
      url: "https://reqres.in/api/users"

## json()
Response.json() принимает поток Response и считывает его до конца. Он возвращает promise, который разрешается в результат разбора тела ответа в качестве стоки JSON. Метод возвращает обязательство при благоприятном исходе вернуть объект, который получен после JSON.parse(текст тела ответа).

    fetch('https://reqres.in/api/users') // Promise (обещание)
      .then(res => {
        console.log(res.json()); // Promise
      });

## data

    fetch('https://reqres.in/api/user1') // Promise (обещание)
      .then(res => {
        return res.json(); // Promise
      })
      .then(data => {
        console.log(data); // Объект
        console.log(data.data[1].name); // Значение
      })

Объект который пришел от сервера можно посмотерть в `Сеть > Файл user > Ответ`.

## Ловля ошибок
Например во время выполнения запроса отключился интернет или попытка получения доступы к несуществующему пути (урл), в этом случае цикл ответа на запрос не может быть завершен. Обещание будет отклонено. Сделайте еще условие.

    fetch('https://reqres.in/api/') // Promise (обещание)
      .then(res => {
        if(!res.ok) {
          console.log('Ошибка зпроса!');
          return;
        }
        return res.json(); // Promise
      })
      .then(data => {
        console.log(data); // Объект
        console.log(data.data[1].email); // Значение
      })
      .catch(error => {
        console.log(error);
      });
