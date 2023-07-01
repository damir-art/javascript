# preventDefault()
Отмена действия по-умолчанию.

- `prevent` предотвратить
- `default` по-умолчанию

Многие действия пользователя влекут за собой события браузера: переход на другую страницу, отсылка данных формы на сервер, выделение текста при движении мыши с зажатой левой кнопкой мыши и т.д.

При возникновении события, сначала выполняются пользовательские обработчики событий, а затем уже действия по-умолчанию такие как: клик по ссылке, отправка формы, заполнение текстового поля, проставление чекбокса и т.д.

При создании обработчиков, часто бывает так что действия браузера по-умолчанию нам не нужны. Чтобы отменить их нам поможет метод `preventDefault()`:

- `event.preventDefault()`,
- addEventListener('event', 'handler', {passive: true}),
- `{passive: true}` - обработчик события будет игнорировать метод event.preventDefault().

## Примеры
Отменяем действие (событие) по умолчанию, клик по ссылке:

    a.addEventListener('click', link_click)

    function link_click(evt) {
      evt.preventDefault()

      var div = divs[0]
      div.style.display = div.style.display === 'none'
        ? 'flex'
        : 'none'

      console.log(div.style.display)
    }

Фильтруем ввод в текстовое поле, создаём возможность фильтрации, а именно ввода только цифр, стрелок и backpace:

    const iName = document.querySelector('.name')

    iName.addEventListener('keydown', function (e) {
      let isDigit = false // флаг

      if (
        e.key >= 0            ||
        e.key <= 9            ||
        e.key == '-'          ||
        e.key == 'ArrowLeft'  ||
        e.key == 'ArrowRight' ||
        e.key == 'Backspace'
      ) {
        isDigit = true
      }

      if (isDigit == true) {
        console.log('Да')
      } else {
        console.log('Нет')
        e.preventDefault()
      }

    });

## Разное
- свойство `event.defaultPrevented` имеет одно из двух значений `true/false` в зависимости от того отработано событие или нет, может применяться вместо `stopPropagation()` при всплытии, если у родителя есть событие как и у дочернего и его обработчик не должен включаться если он уже отработал на дочернем
- если событие по умолчанию отменено, то значение `event.defaultPrevented` становится true, иначе false
- обработчики событий ничего не возвращают и `return` игнорируется, единственный случай это `return false` у события HTML-атрибута или DOM-свойства, которое идентично `preventDefault()`.
