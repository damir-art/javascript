# focus/blur
События focus и blur. Событие `focus` возникает по клику мышкой, через клавишу `Tab` или атрибут `autofocus`. Событие `blur` возникает при потере фокуса.

## Методы focus(), blur()
- el.focus() - устанавливает фокус на элементе
- el.blur() - снимает фокус с элемента

## tabindex
Теги `button`, `input`, `select`, `a` и т.д. имеют поддержку фокуса.

Атрибут `tabindex` может дать поддержку фокуса тем элементам которые его не имеют.

## focusin/focusout
События `focus/blur` не всплывают, а `focusin/focusout` всплывают.

## Разное
- document.activeElement - узнаём текущий элемент
