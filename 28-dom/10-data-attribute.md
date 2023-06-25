# data атрибуты
data атрибуты: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*  
dataset: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

Если вы задаёте пользовательские атрибуты HTML-тегам, то их имена должны начинаться с `data-`:

    <h1 data-window="100">Пластиковые окна 1</h1>
    <h2 data-window="200">Пластиковые окна 2</h2>

    const h1 = document.querySelector('h1').getAttribute('data-window')
    const h2 = document.querySelector('h2').getAttribute('data-window')
    const sum = (+h1) + (+h2)

    console.log(sum) // 300

Атрибуты начинающиеся с `data-`, располагаются в свойстве `dataset`:

    <h1 data-price="100" data-brand="grain">Пластиковые окна 1</h1>

    const h1 = document.querySelector('h1').dataset.price
    console.log(h1)

## Разное
- используются для передачи пользовательских данных из HTML в JavaScript
- помимо `data-` атрибутов, можно создавать пользовательские с любым именем и значением
- `data-price-new` обращаемся как `el.dataset.priceNew`
- `data-` атрибуты это валидный, безопасный способ передачи пользовательских данных

## Старая запись

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
