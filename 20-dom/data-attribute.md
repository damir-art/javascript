# data атрибуты
Если вы задаёте пользовательские атрибуты HTML-тегам, то их имена должны начинаться с `data-`:

    <div data-slider="left"> </div>

Дата-атрибуты позволяют сохранять данные в HTML. Рассмотрим пример вычисления стоимости бензина:

    let formInput = document.querySelector('.form-input')
    let formBtn   = document.querySelectorAll('.form-btn')

    for(let i = 0; i < formBtn.length; i++) {
        formBtn[i].addEventListener('click', function () {
            let sum = this.getAttribute('data') * formInput.value;
            console.log(sum)
        })
    }

В интернет магазинах например вешают на кнопку, id товара, чтобы узнать какой товар выбран.

## Разное
- data атрибуты сохраняют состояние элемента.
