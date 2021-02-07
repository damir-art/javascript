# Массивы и циклы
Обходим массивы циклом.

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
