# Массивы и циклы
Обходим массивы и объекты циклом.

## for
Классический вариант:

    const btn = document.querySelector('.btn');
    const out = document.querySelector('.out');

    console.log(out);

    const cities = ['Москва', 'Пекин', 'Лондон', 'Берлин', 'Вашингтон', 'Париж'];

    btn.addEventListener('click', function () {
        out2 = ''; // переменную вместо элемента, используем для производительности

        for (let i = 0; i < cities.length; i++) {
            out2 += `${cities[i]}, `;
        }

        out.innerHTML = ''; // очищаем тег о внутреннего содержимого, если оно есть
        out.innerHTML = out2; // присваиваем значение переменной элементу
    })

Может работать с HTML-коллекцией (HTMLCollection, полученный от getElementsByTagName()).
Может работать со списком узлов (NodeList, полученный от querySelectorAll()).

## for in

    key - выводит индексы, названия ключей

    btn.addEventListener('click', function () {
        out2 = ''; // переменную вместо элемента, используем для производительности

        for (let key in cities) {
            out2 += `${+key + 1}: ${cities[key]} <br /> `;
        }

        console.log(out2);
        out.innerHTML = '';   // очищаем тег о внутреннего содержимого, если оно есть
        out.innerHTML = out2; // присваиваем значение переменной элементу
    })

Не может работать с HTML-коллекцией (HTMLCollection, полученный от getElementsByTagName()).
Не может работать со списком узлов (NodeList, полученный от querySelectorAll()).

## for of

    item - выводит значения

    for (let item of cities) {
        out2 += `${item} `;
    }

Может работать с HTML-коллекцией (HTMLCollection, полученный от getElementsByTagName()).
Может работать со списком узлов (NodeList, полученный от querySelectorAll()).
