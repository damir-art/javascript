# Размеры окна
Узнаём ширину и высоту окна браузера.

## offset/client/scroll (window) - ширина высота

    document.documentElement.clientWidth  // ширина окна минус ширина скрола
    document.documentElement.clientHeight // высота окна минус высота скрола

    window.innerWidth // ширина окна не зависит от скрола
    window.innerHeight // высота окна не зависит от скрола

    document.documentElement.scrollWidth // ширина окна минус ширина скрола
    document.documentElement.scrollHeight // высота содержимого

## scrollLeft/scrollTop/pageXOffset/pageYOffset - прокрутка (чтение)
Только для чтения.

    document.documentElement.scrollLeft
    document.documentElement.scrollTop
    window.pageXOffset
    window.pageYOffset (рекомендуется)

`window.pageYOffset` - показывает `float` число, работает во всех браузерах.

## scrollTo/scrollBy/scrollIntoView - прокрутка (установка)

    document.documentElement.scrollTop  // прокрутка страницы
    document.documentElement.scrollLeft // прокрутка страницы

    window.scrollBy(x, y) // прокрутка относительно текущей позиции (рекомендуется)
    window.scrollTo(pageX, pageY) // прокручивает абсолютно

    el.scrollIntoView() // верхняя граница элемента прокручивается до верхнего края окна (типа якорей для элементов)
    el.scrollIntoView(false) // нижняя граница элемента прокручивается до нижнего края окна

## Запрет прокрутки

    document.body.style.overflow = 'hidden' // запрет прокрутки страницы
    el.style.overflow = 'hidden' // запрет прокрутки элемента
    .overflow = '' // восстановить полосу прокрутки

Чтобы стараница не прыгала после исчезновения полосы прокрутки нужно сранить clientWidth до и после, а затем добавить padding для `document.body`.

## Примеры
Получаем точную высоту документа:

const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
)

console.log(scrollHeight)

## Разное
- работая с размерами окон, всегда указывайте DOCTYPE
