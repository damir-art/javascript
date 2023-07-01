# form
О формах, свойствах навигации по формам и элементам.

## Навигация по формам
- формы на странице являются частью коллекции HTMLCollection `document.forms`
- доступ к первой форме в документе осуществляется через `document.forms[0]`
- к форме можно получить доступ по её имени `name="formName"` через  `document.forms.formName`

## Навигация по элементам формы
- `document.forms[0].elements` - получить коллекцию элементов формы HTMLFormControlsCollection
- `document.forms[0].elements.elemName` - получить доступ к элементу формы по его имени `name="elemName"`
- `document.forms[0].elements['elemName']` - еще один способ доступа к элементу формы
- `document.forms[0].elements.elemName.value` - получаем доступ к значению атрибута

## fieldset
Форма может содержать один или несколько `fieldset` внутри себя:
- `document.forms[0].elements[0]` - получаем доступ к первому fieldset
- fieldset можно назначать имена `name="fieldset"` и обращаться по ним

## element.form
- `element.form` - элемент получает доступ к форме
- `document.forms[0].elements[1].form.method` - получаем метод `get` у формы из дочернего элемента

## input/textarea/value/checked
- input.value
- textarea.value
- input.checked - для чекбоксов и переключателей

## radio
- несколько радиокнопок имеют одно имя, обращаясь `document.forms[1].elements.radioName` к нему получаем коллекцию радиокнопок: `RadioNodeList`

## select/option
- select.options       - коллекция элементов option
- select.value         - значение выбранного option
- select.selectedIndex - номер выбранного option
- document.forms[0].mySelect.options[0].selected - возвращает `true/false` в зависимости является ли option на данный момент выбранным или нет

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
