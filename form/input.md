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

## input обработка ввода

    <!-- Обработка ввода текста в поле input -->
    <!-- Перехват нажатия клавиш внутри этого поля -->
    <!-- Создаём возможность ввода только цифр и тире -->
    <!-- Создаём возможность использования клавиш пробела и стрелок влево/вправо -->
    <input type="text" id="phone" />

    const phone = document.querySelector("#phone");

    phone.addEventListener("keydown", function(evt) {
      // evt.type; // имя события
      // evt.key; // код нажатой клавиши

      let isDigit = false; // переменная флаг, имеющая значение true или false в зависимости от нажатия клавиши
      let isDash = false; // для тире
      let isControl = false; // для пробела и стрелок влево/вправо

      if ( evt.key >=0 && evt.key <= 9 ) {
        isDigit = true;
      }

      if ( evt.key == "-" ) {
        isDash = true;
      }

      if ( evt.key == "ArrowLeft" || evt.key == "ArrowRight" || evt.key == "Backspace" ) {
        isControl = true;
      }

      if ( !isDigit && !isDash && !isControl ) {
        evt.preventDefault(); // отменяем ввод не цифр
        // console.log(evt.preventDefault);
        console.log("Не цифра и не тире!");
      }
    });
