# form
Пример HTML-кода формы:

    <form class="form" method="get" action="#">
      <fieldset>
        <legend>Отправить сообщение:</legend>
        <div class="form__input-wrap">
          <label class="form__label" for="form-label-name">Ваше имя</label>
          <input id="form-label-name" class="form__input form__input--name" type="text" name="name" placeholder="Иван" />
        </div>
        <div class="form__input-wrap">
          <label class="form__label" for="form-label-email">E-mail</label>
          <input id="form-label-email" class="form__input form__input--email" type="email" name="email" placeholder="login@mail.com" />
        </div>
        <div class="form__input-wrap form__input-wrap--last">
          <label class="form__label" for="form-label-tel">Телефон</label>
          <input id="form-label-tel" class="form__input form__input--tel" type="tel" name="tel" placeholder="+7 (123) 456-78-90" />
        </div>
        <button class="form__btn" type="submit">Отправить</button>
      </fieldset>
    </form>

Различные примеры:

    form.elements.id_name // получить элемент формы по его id (нельзя использовать тире)
    form.elements[1].id   // получить значение id элемента формы
    form.elements[1].name // получить значение name элемента формы

Нажав на кнопку, в цикле выводим все элементы формы по их типу:

    const form    = document.querySelector('.form');
    const formBtn = document.querySelector('.form-btn');

    formBtn.addEventListener('click', (e) => {
      for (let i = 0; i < form.length; i++) {
        console.log(form.elements[i].type);
      }
    });
