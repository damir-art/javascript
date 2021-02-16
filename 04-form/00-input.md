# input
Примеры с элементами формы.

## Range
Двигаем ползунок и числовая позиция ползунка отображается в заголовке.

    <input class="range" type="range" min="0" max="100" value="35" />

    const h1 = document.querySelector('h1')
    const range = document.querySelector('.range')

    range.addEventListener('input', function () {
        h1.textContent = range.value;
    })

## Checkbox

    <label><input class="ch2" type="checkbox" value="apple" /> Яблоко</label>
    
    console.log(ch2.value);
    console.log(ch2.checked); // true/false

## Radio
Через цикл определяем какая радиокнопка выбрана.

    <label for="apple">
        <input class="radio" id="apple" type="radio" name="fruit" value="apple" checked /> Яблоко
    </label>
    <label for="pineapple">
        <input class="radio" id="pineapple" type="radio" name="fruit" value="pineapple" /> Ананас
    </label>
    <label for="peach">
        <input class="radio" id="peach" type="radio" name="fruit" value="peach" /> Персик
    </label>

    const radio   = document.querySelectorAll('.radio');
    const formBtn = document.querySelector('.form-btn');

    formBtn.addEventListener('click', (e) => {
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                console.log(radio[i].value)
                console.log(radio[i].parentNode.textContent); // Название фрукта по-русски
            }
        }
    });
