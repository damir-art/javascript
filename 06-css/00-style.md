# Работаем со style
style - объект, свойство HTML-элемента, который хранит в себе CSS-свойства.

    const out = document.querySelector('.out')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function () {
        out.style.color = 'green'
        console.log(out.style.color) // выводим стиль color
        console.log(out.style) // выводим все стили
    })

Значения свойств у `style`, всегда должны быть строкой.
