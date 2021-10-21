# Размеры элемента

## offset/client & scroll (element)

Метрики элемента (CSS): border, padding, width, height, scrollbar (ширина прокрутки), overflow.

## Метрики элемента (JavaScript)

Значения числа (пиксели).

## offset
- offsetParent - предок элемента который используется при вычислении координат, по умолчанию `body`, позиционированный элемент, таблица или ячейка
- offsetLeft - расстояние от края экрана или offsetParent (слева)
- offsetTop - расстояние от края экрана или offsetParent (сверху)

offsetLeft, offsetTop - координаты x, y относительно левого верхнего угла offsetParent

- offsetWidth - width + padding + border
- offsetHeight - height + padding + border

## client
- clientLeft - border-left
- clientTop - border-top
- clientWidth - width + padding - ширина полосы прокрутки (если есть)
- clientHeight - height + padding - высота полосы прокрутки (если есть)

## scroll
- scrollLeft - ширина прокрутки скрола
- scrollTop - высота прокрутки скрола
- scrollWidth - равен clientWidth, если нет горизонтальной прокрутки
- scrollHeight - высота всего контента + padding (равна clientHeight если нет скрола)

scrollLeft, scrollTop - можно изменять, остальные значения доступны только для чтения.

scrollTop = 0 прокрутит в самый верх, Infinity - вниз.

`offset/client/scroll` это DOM-свойства. Лучше в скриптах использовать эти DOM-свойства. Если хотите использовать ширину и высоту из CSS, то помните о свойстве `box-sizing`, значении `auto`, полосе прокрутки и прочем.
