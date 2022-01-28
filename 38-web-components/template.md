# template (шаблонизация)
Чтобы ускорить процесс размножения одних и тех же элементов страницы, например карточек товаров, можно использовать тег `template`, который относится к WebComponents.

Тег `template`:
- не видим на странице
- содержит внутри разметку, которую нужно скопировать
- не индексируется поисковиками
- понимает методы DOM
- содержит специальный DOM-узел `DocumentFragment`

Благодаря `DocumentFragment` template не видим на странице. DocumentFragment не отображается на странице, но может содержать другие элементы. С помощью `content` можно получить доступ к тому, что прячет в себе фрагмент.

Шаблонизация - это когда мы на основе каких-то данных создаем разметку. Клонируем разметку, вставляем данные.

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
