# FormData
FormData - встроенный в браузер API, для сбора данных с формы и отправки их на сервер.

HTML формы:

    <form id="form">
      <input class="clean" type="text" name="name" placeholder="Имя">
      <input class="clean" type="email" name="email" placeholder="Email *">
      <textarea class="clean" rows="3" name="text" placeholder="Текст сообщения"></textarea>
      <button type="submit">Отправить</button>
    </form>

JavaScript:

    let form = document.getElementById('form'); // переменная с формой

    form.addEventListener('submit', function (event) {
      // запрещаем стандартное действие submit
      event.preventDefault();

      // создаем объект FormData (итерируемый)
      let formData = new FormData(form);
      console.log(formData);

      // получаем значение поля
      let email = formData.get('email');
      console.log(email);

      // получаем имена и значения полей формы
      for (const item of formData) {
        console.log(item);
      }
    });

## Отправляем асинхронные запросы
С помощью fetch отправим тестовый запрос (url может быть любым). Анонимную функцию сделайте `async`:

    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      let formData = new FormData(form);

      // Передаём на URL данные из формы
      await fetch('http://localhost:5500/test/test.html', {
        method: 'POST', // Метод отправки
        body: formData // Данные формы
      });

    });

- открываем вкладку `Сеть > Fetch/XHR`,
- нажимаем кнопку отправить, запрос ушел (покажет ошибку),
- жмем по файлу запроса (нам инетересно Полезная нагрузка > Данные форм)
  - выведутся отправленные данные формы (body: formData)

## Добавить / удалить поле формы
Если нужно добавить/удалить поле при отправки формы:

    // создаем новый объект
    let formData = new FormData(form);
    // console.log(formData);

    formData.set('pole', 'znachenie'); // Добавить дополнительное поле
    formData.delete('text'); // Удалить поле
    formData.has('name'); // Проверяем поле на существование

    // Передаём на URL данные из формы
    await fetch('http://localhost:5500/test/test.html', {
      method: 'POST', // Метод отправки
      body: formData // Данные формы
    });

Превращаем formData в обычный объект:

    const formDataObj = Object.fromEntries(formData);
    console.log(formDataObj); // {name: 'Damir', email: 'damir-art@ya.ru', text: '12345'}

## Передаём данные в адресной строке

    // создаем объект FormData (итерируемый)
    let formData = new FormData(form);
    let params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      params.append(key, value);
    }

    let paramsStr = params.toString(); // Приведем к строке

    console.log(paramsStr); // name=Damir&email=damir-art%40ya.ru&text=123

## Передаём файлы
После отправки нажимаем на файл Сеть > Заголовки > Заголовки запросов: Content-Type: multipart/form-data;  
multipart/form-data - данные передаваемые через FormData, для передачи файлов Content-Type должен быть multipart/form-data.
