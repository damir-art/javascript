# Метод GET
Обращаемся к URL получаем данные. По-умолчанию используется GET метод.

## Получаем Promise
Можно обратиться к любому файлу, если он есть: fetch('http://localhost:5500/test/test.html')

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
