# Метод DELETE
https://reqres.in/api/users/`55`: укажите, какой конкретный ресурс следует УДАЛИТЬ.

    fetch('https://reqres.in/api/users/55', {
      method: 'DELETE', // указываем метод
    }) // Promise (обещание)
    .then(res => {
      if(!res.ok) {
        console.log('Ошибка зпроса!');
        return;
      }
      // return res.json(); // Promise
    })
    .then(data => {
      console.log('Success');
    })
    .catch(error => {
      console.log(error);
    });
