# Работаем с classList

## classList
Объект отвечающий за работу с классами CSS, возвращает массив классов одного элемента:

    header = document.getElementById('header')
    console.log(header.classList)

## classList.add()
Добавляем класс(ы) к выбранному элементу:

    header = document.getElementById('header')
    header.classList.add('box--red')
    header.classList.add('box--red', 'box--green')
    console.log(header.classList)

## classList.remove()
Удаляем класс(ы) у выбранного элемента

    header = document.getElementById('header')
    header.classList.remove('box--red')
    console.log(header.classList)

## classList.contains()
Проверяем, содержится ли класс у выбранного элемента, вернёт `true` или `false`:

    header = document.getElementById('header')
    console.log(header.classList.contains('box--red'))

## classList.toggle()
Добавляем убираем класс.

    out.classList.toggle('out2');
