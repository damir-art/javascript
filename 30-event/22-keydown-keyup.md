# keydown / keyup
События keydown и keyup.

- keydown    - клавиша нажата
- keyup      - клавиша отжата
- event.key  - получить символ
- event.code - получить код клавиши

Нажимаем клавишу `a` в английской раскладке:

    keydown key=a code=KeyA
    keyup   key=a code=KeyA

Нажимаем комбинацию клавиш `shift + a` в английской раскладке:

    keydown key=Shift code=ShiftLeft shiftKey
    keydown key=A     code=KeyA      shiftKey
    keyup   key=A     code=KeyA      shiftKey
    keyup   key=Shift code=ShiftLeft

## event.code
- буквенные клавиши имеют код: `Key<буква>`, например `KeyA`, `KeyB` и т.д.
- числовые клавиш имеют код:   `Digit<число>`, например `Digit0`, `Digit1` и т.д.
- специальные клавиши код:     по имени, например `Enter`, `Backspace`, `Tab` и т.д.

## Разное
- если нажать клавишу `keydown` и не отпускать то постоянно будет возникать событие `keydown` в этом случае `event.repeat` у события будет равно `true`
- `keypress` - устаревшее событие
- `keyCode`, `charCode`, `which` - устаревшие свойства
- для отслеживания ввода данных в поля формы лучше использовать не клавиатурные события, а события `input` и `change`