# className/classList - изменяем класс элемента

- className
- classList
- classList.add()
- classList.remove()
- classList.contains()
- classList.toggle()

Есть два способа задания стилей, через атрибут `class` и через атрибут `style`. Рекомендуется менять стили у улементов через атрибут `class`. Менять стили через атрибут `style` рекомендуется в некоторых случаях (динамически), например при измерении координат.

## className
`className` - свойство элемента: 

    <h1 class="head">Заголовок</h1>

    let head = document.querySelector(".head");
    console.log(head.className); // head

Если несколько классов:

    <h1 class="head head--main">Заголовок</h1>

    let head = document.querySelector(".head");
    console.log(head.className); // head head--main

При изменении класса через `className` он затирает все текущие классы элемента.

    head.className = "";
    head.className = "header";
    head.className = "header header--main";

Чтобы удалить или добавить один класс не затрагивая других, используйте `classList`.

## classList
Объект отвечающий за работу с CSS-классами, возвращает массив классов одного элемента:

    const out = document.querySelector('.out')
    console.log(out.classList)

Методы `classList`:

    el.classList.add('class)       - добавить класс
    el.classList.remove('class')   - удалить класс
    el.classList.toggle('class')   - добавить класс, если его нет, удалить если он есть
    el.classList.contains('class') - проверка наличия класса, возвращает true/false

classList - итерируемый объект, можно перебрать все классы элемента через `for ... of`.

## classList.add()
Добавляем класс(ы) к выбранному элементу:

    const out = document.querySelector('.out')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function () {
        out.classList.add('out-2')          // добавляем дополнительный CSS-класс
        console.log(out.classList)          // получаем массив
        out.classList.add('out-2', 'out-3') // добавляем два и более CSS-классов сразу
        console.log(out.classList)          // получаем массив
    })

## classList.remove()
Удаляем класс(ы) у выбранного элемента

    const out = document.querySelector('.out')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function () {
        console.log(out.classList)
        out.classList.remove('out')          // удаляем CSS-класс
        console.log(out.classList)
        out.classList.remove('out', 'out-2') // удаляем два и более CSS-классов
    })

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
Добавляем убираем класс.

    const out = document.querySelector('.out')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function () {
        out.classList.toggle('out-2');
    })
