# Работаем со style
style - объект, свойство HTML-элемента, который храит в себе CSS-свойства.

    const formBtn = document.querySelector('.form-btn');
    const out     = document.getElementById('out');

    formBtn.addEventListener('click', () => {
        out.style.color = 'green';
        console.log(out.style) // выводим все стили
    })

Значения свойств у `style`, всегда должны быть строкой.
