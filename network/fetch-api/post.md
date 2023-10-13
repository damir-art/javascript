# Метод POST
Отправляем данные методом POST. Точно также как методом GET, но нужно добавить метод POST и указать данные для отправки.

Отправлять данные нужно в формате JSON: `JSON.stringify( user )`, именно этот формат компьютеры используют для связи друг с другом.

`console.log('Success')` - данные, которые мы получаем от POST-запроса, отличаются от данных GET-запроса, поэтому замените их на что-то другое.

    // Объект отправим методом POST
    const user = {
      name: 'Ivan',
      age: 21
    }

    fetch('https://reqres.in/api/users', {
      method: 'POST', // указываем метод
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
      console.log('Success'); // Данные, которые мы получаем от POST-запроса,
    }) // отличаются от данных GET-запроса, поэтому замените их на что-то другое.
    .catch(error => {
      console.log(error);
    });
