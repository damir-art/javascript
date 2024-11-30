# Метод PUT
Разница между PUT и POST в том, что PUT является идемпотентным, т.е. единичный и множественные вызовы этого метода, с идентичным набором данных, будут иметь тот же результат выполнения (без сторонних эффектов), в случае с POST, множественный вызов с идентичным набором данных может повлечь за собой сторонние эффекты.

https://reqres.in/api/users/`55`: с помощью PUT мы должны указать, какой конкретный ресурс мы хотим обновить.

`console.log('Success')`: с помощью GET-запроса мы хотим получить данные, однако с помощью POST/PUT и т. д. мы обычно также получаем некоторые данные в качестве ответа (например, сообщение об успехе) в формате JSON.

    // Объект отправим методом PUT
    const user = {
      name: 'Ivan',
      age: 21
    }

    fetch('https://reqres.in/api/users/55', {
      method: 'PUT', // указываем метод
      headers: { 'Content-Type' : 'application/json' }, // указываем формат данных
      body: JSON.stringify( user ) // указываем данные которые отправим
    }) // Promise (обещание)
    .then(res => {
      if(!res.ok) {
        console.log('Ошибка зпроса!');
        return;
      }
      return res.json(); // Promise
    })
    .then(data => {
      console.log('Success');
    })
    .catch(error => {
      console.log(error);
    });