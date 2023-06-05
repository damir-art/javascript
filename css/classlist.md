# classList 
Изменение CSS-класса у элемента.

- classList
- classList.add()
- classList.remove()
- classList.contains()
- classList.toggle()

Есть два способа задания стилей, через атрибут `class` и через атрибут `style`. В основном меняют стили у элементов через атрибут `class`. Менять стили через атрибут `style` рекомендуется в некоторых случаях, например при измерении координат (динамически).

**classList** - объект отвечающий за работу с CSS-классами, возвращает массив `DOMTokenList` CSS-классов одного элемента:

    <h1 class="head">Заголовок</h1>
    <h1 class="head head--main">Заголовок</h1>

    let head = document.querySelector(".head");
    console.log(head.classList); // DOMTokenList [ "head" ]
    console.log(head.classList); // DOMTokenList [ "head", "head--main" ]

Методы объекта `classList`:

    el.classList.add('class)       - добавить класс
    el.classList.remove('class')   - удалить класс
    el.classList.toggle('class')   - добавить класс, если его нет, удалить если он есть
    el.classList.contains('class') - проверка наличия класса, возвращает true/false

classList - итерируемый объект, можно перебрать все классы элемента через `for ... of`.

## classList.add()
Добавляем класс(ы) к выбранному элементу:

    let button = document.querySelector(".button");
    let head = document.querySelector(".head");

    button.addEventListener("click", function(e) {
      head.classList.add("head--main"); // добавляем один CSS-класс
      console.log(head.classList);

      head.classList.add("head--main", "head--main-2"); // добавляем два и более CSS-класса
      console.log(head.classList);
    });

## classList.remove()
Удаляем класс(ы) у выбранного элемента:

    let button_delete = document.querySelector(".button--delete");

    button_delete.addEventListener("click", function(e) {
      head.classList.remove("head--main"); // удаляем один CSS-класс
      console.log(head.classList);

      head.classList.remove("head--main", "head--main-2"); // удаляем два и более CSS-класса
      console.log(head.classList);
    });

## classList.contains()
Проверяем, содержится ли класс у выбранного элемента, вернёт `true` или `false`:

    const out = document.querySelector('.out')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function () {
        console.log(out.classList)
        console.log(out.classList.contains('out')) // проверяем, есть ли CSS-класс в элементе
        
        out.classList.remove('out')
        console.log(out.classList)
        console.log(out.classList.contains('out'))
    })

Создаём тогл:

    const out = document.querySelector('.out')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function () {

        if (out.classList.contains('out')) {
            out.classList.remove('out')
        } else {
            out.classList.add('out')
        }
    })

## classList.toggle()
Добавляем убираем класс:

    let button_toggle = document.querySelector(".button--toggle");
    let head = document.querySelector(".head");

    button_toggle.addEventListener("click", function(e) {
      head.classList.toggle("head--main");
    });
