# Работаем с classList

## classList
Объект отвечающий за работу с CSS-классами, возвращает массив классов одного элемента:

    const out = document.querySelector('.out')
    console.log(out.classList)

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
