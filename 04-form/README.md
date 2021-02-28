# Формы и JavaScript
Рассматриваем JavaScript на примере работы с формами.

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

## input (элемент)

    input.value
    input.placeholder

Пример с ползунком и вычислением его позиции по клику:

    const formRange = document.querySelector('.form-input-range');

    btn.addEventListener('click', (e) => {
        console.log(formRange.value);
    });

## input (событие)
Событие возникает при изменении элемента формы.

Двигаем ползунок. Позиция ползунка (число) вставляется в заголовок.

    const h1 = document.querySelector('h1')
    const range = document.querySelector('.range')

    range.addEventListener('input', function () {
        h1.textContent = range.value;
    })
