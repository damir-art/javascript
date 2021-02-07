# Формы и JavaScript
Рассматриваем JavaScript на примере работы с формами.

## input (элемент)

    input.value
    input.placeholder

Пример с ползунком и вычислением его позиции по клику:

    const formRange = document.querySelector('.form-input-range');

    btn.addEventListener('click', (e) => {
        console.log(formRange.value);
    });

## input (событие)
Событие возникает при изменении элемента формы:

    formRange.addEventListener('input', (e) => {
        // out.innerHTML = `Login: <b>${formName.value}</b>, Date: ${formRange.value} `;
        console.log(formRange.value);
    });
