# input
Примеры с `input` элементами формы.

## input (элемент)

    input.value
    input.placeholder

Пример с ползунком и вычислением его позиции по клику:

    const formRange = document.querySelector('.form-input-range');

    btn.addEventListener('click', (e) => {
      console.log(formRange.value);
    });

## input (событие)
Событие возникает при изменении элемента формы.

Двигаем ползунок. Позиция ползунка (число) вставляется в заголовок.

    const h1 = document.querySelector('h1')
    const range = document.querySelector('.range')

    range.addEventListener('input', function () {
      h1.textContent = range.value;
    })
