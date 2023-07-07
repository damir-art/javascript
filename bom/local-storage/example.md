# Пример localStorage
Работаем с формой:
- вводим данные в форму,
- жмем по кнопке `Сохранить`,
- при перезагрузки страницы, данные в полях формы исчезают,
- при нажатии по кнопке `Загрузить`, в полях формы снова появятся введённые данные,
- при нажатии галочки `Использовать sessionStorage`, данные сохраняются не с помощью localStorage, а с помощью sessionStorage.

## HTML-код формы

    <form action="#">
      <input id="name" type="text" placeholder="Введите имя" />
      <input id="email"type="email" placeholder="Введите E-mail" />
      <textarea id="textarea" cols="30" rows="10" placeholder="Введите сообщение"></textarea>
      <div>
        <label>
          <input type="checkbox" id="isSessionStorage" /> использовать sessionStorage
        </label>
      </div>
      <div class="buttons">
        <button id="save" type="button">Сохранить</button>
        <button id="load" type="button">Загрузить</button>
      </div>
    </form>

## JavaScript-код

    // Определяем переменные
    const name             = document.getElementById("name");
    const email            = document.getElementById("email");
    const textarea         = document.getElementById("textarea");
    const isSessionStorage = document.getElementById("isSessionStorage");
    const save             = document.getElementById("save");
    const load             = document.getElementById("load");

    // В переменную storage сохраним ссылку на глобальный объект localStorage
    let storage = localStorage;

    // Обработчик save, при клике сохраняет данные из формы в localStorage
    // Данные из формы помещаются в объект и обрабатываются JSON.stringify()
    save.addEventListener("click", function() {
      storage.data = JSON.stringify({
        name: name.value,
        email: email.value,
        textarea: textarea.value
      });
    });

    // Обработчик load, при клике вытаскивает данные из localStorage и заполняет форму
    load.addEventListener("click", function() {
      const data = JSON.parse( storage.data || {} );
      name.value     = data.name || "";
      email.value    = data.email || "";
      textarea.value = data.textarea || "";
    });

    // Переключаемся между хранилищами с помощью чекбокса
    isSessionStorage.addEventListener( 'change', function(e) {
      storage = isSessionStorage ? sessionStorage : localStorage;
    });
