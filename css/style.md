# Работаем со style
style - объект, свойство HTML-элемента, который хранит в себе CSS-свойства.

    <h1 class="head" style="color: green; font-size: 22px;">Заголовок</h1>

    let head = document.querySelector(".head");

    console.log(head.style);          // CSS2Properties { color → "green", "font-size" → "22px" }
    console.log(head.style.color);    // green, обращение к свойству
    console.log(head.style.fontSize); // обращение к многословному свойству через camelCase

Задаём CSS-свойства через JavaScript:

    head.style.color = "orange";

## Разное
- значения CSS-свойств, всегда должны быть строками: "orange", "28px" и т.д.,
- если имя свойства элемента состоит из 2х и более слов, то пишите их через `camelCase`: `background-color` превращается в `backgroundColor`.
