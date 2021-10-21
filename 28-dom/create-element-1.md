# Создание элементов

    textContent - возвращает текст
    innerHTML - текст и теги внутри элемента
    insertAdjacentHTML('куда вставлять', 'HTML-код') - вставляет HTML
    insertAdjacentText('куда вставлять', 'текст') - вставляет текст
    createElement('tag') - объектный способ создания элементов
    createDocumentFragment() - создание "ящика" куда можно сложить все элементы
    <template> - создание элементов с помощью шаблонов

Пример текста:

    <p class="hello">Всем <b>привет</b>!!!</p>

Создаём кнопку с помощью `innerHTML`:

    document.body.innerHTML = document.body.innerHTML + '<button type="button">Кнопка</button>'

Здесь текст элемента `b` не изменится:

    const hello = document.querySelector('b')
    document.body.innerHTML = document.body.innerHTML + '<button type="button">Кнопка</button>'
    hello.textContent = 'Poka'

Здесь текст элемента `b` изменится:

    const b = document.querySelector('b')
    document.body.insertAdjacentHTML('beforeend', '<button type="button">Кнопка</button>')
    b.textContent = 'Poka'

## createElement('tag')

    const pool_2 = document.querySelector('.pool-2')
    const poolElement = document.createElement('div')
    poolElement.classList.add('el')
    poolElement.innerHTML = '<span>1</span>'
    pool_2.appendChild(poolElement)

    console.log(poolElement);

## createDocumentFragment()
createDocumentFragment - улучшает производительность старых и мобильных браузеров. У фрагмента такие же методы как и DOM-элементов.

    const pool_2 = document.querySelector('.pool-2')
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < 6; i++) {
        const newElement = document.createElement('div')
        newElement.classList.add('el')
        newElement.innerHTML = '<span>' + i + '</span>'
        fragment.appendChild(newElement)
    }

    pool_2.appendChild(fragment)

## template
Создаём элементы с помощью шаблонов. Браузер не отображает теги внутри `<template>` их нельзя найти с помощью `querySelector()`

    <template id="element-template">
        <div class="el">
            <span>
                <!-- Номер элемента -->
            </span>
        </div>
    </template>

    const pool_2 = document.querySelector('.pool-2')
    const templateFragment = document.querySelector('#element-template').content // фрагмент с содержимым шаблона
    const template = templateFragment.querySelector('div') // элемент внутри шаблона
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < 6; i++) {
        const element = template.cloneNode(true)
        element.classList.add('el-' + (i + 1))
        element.children[0].textContent = i
        fragment.appendChild(element)
    }

    pool_2.appendChild(fragment)

    console.log(fragment)

## Старая запись

Создаём элемент, манипулируем им, выводим на страницу. Или создаём, выводим, манипулируем.

- `createElement('div')` - создаём элемент с тегом div
- `appendChild(div)` - вставляем созданный элемент в другой элемент, в конец
- `document.body.appendChild(div)` - вставляем элемент в body

## Создаём элемент div

    // контейнер куда будет помещён созданный элемент
    const out = document.querySelector('.out')

    // создаём элемент div
    const div = document.createElement('div')
    div.textContent  = 'Элемент'                 // добавляем текст внутрь элемента
    // div.innerHTML = '<b>Элемент с тегами</b>' // добавляем текст и теги внутрь элемента
    div.classList.add('new')                     // добавляем класс элементу
    out.appendChild(div)                         // внедряем элемент внутрь другого элемента

    btn.addEventListener('click', function() {
        console.log('Элемент создан')
        console.log(div)
    });

## Создаем элемент списка
Создаем элемент списка вводя текст элемента в текстовое поле и нажимая на кнопку. Каждый элемент списка можно удалить, нажав на кнопку рядом с элементом.

    const myInp = document.querySelector('#myInp')
    const myBtn = document.querySelector('#myBtn')
    const myList = document.querySelector('#myList')

    myBtn.addEventListener('click', function () {
        const myLi = document.createElement('li')
        myLi.classList.add('item') 
        myLi.textContent = myInp.value

        const delBtn = document.createElement('button')
        delBtn.textContent = 'delete'

        myLi.appendChild(delBtn)
        myList.appendChild(myLi)

        myInp.value = ''

        delBtn.addEventListener('click', function () {
            myList.removeChild(myLi) // удалить элемент рядом с кнопкой
        })
    })

Каким образом JavaScript понимает, какой именно дочерний элемент нужно удалить? За это отвечает замыкание.

Замыкание это способность функции запоминать область видимости, в которой эта функция была объявлена и пользоваться переменными этой области.
