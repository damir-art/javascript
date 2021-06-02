# Одно событие, несколько элементов
Вешаем одно и тоже событие на несколько элементов DOM, например на кнопки вызова модального окна.

Через классический цикл `for`:

    const btnCalls = document.querySelectorAll('.btn')

    for (let i = 0; i < btnCalls.length; i++) {
        btnCalls[i].addEventListener('click', function() {
            const a = 'Привет'
            const b = 'МИР!'

            console.log(`${a} ${b}`)
        })
    }

Через `for of`:

    const btnCalls = document.querySelectorAll('.btn')

    for (const btnCall of btnCalls) {
        btnCall.addEventListener('click', function() {
            const a = 'Привет'
            const b = 'МИР!'

            console.log(`${a} ${b}`)
        })
    }
