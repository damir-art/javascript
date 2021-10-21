# Координаты
Система координат позволяет передвигать элементы по экрану.

Система координат делится на:
- относительно окна браузера (position: fixed) clientX, clientY
- относительно документа (position: absolute) pageX, pageY

Левый верхний угол окна по координатам совпадает с документом при условии что страница прокручена вверх. Различия начинаются при прокрутке страницы.

## Координаты относительно окна браузера `getBoundingClientRect()`

    myDiv.getBoundingClientRect()

    bottom: 455.6666717529297
    height: 324
    left: 368
    right: 808
    top: 131.6666717529297
    ​width: 440
    x: 368
    y: 131.6666717529297

Дополнительно:

    left = x
    top = y
    right = x + width
    bottom = y + height

- отрицательные числа могут появиться, если при прокрутке элемент вышел за пределы окна
- отрицательные width/height могут появиться если например началом прямоугольника является нижний правый угол и он "растет" справа на лево

## elementFromPoint(x, y)
Возвращает элемент, по указанным координатам, самый глубоко вложенный.

    const centerX = document.documentElement.clientWidth / 2
    const centerY = document.documentElement.clientHeight / 2

    const el = document.elementFromPoint(centerX, centerY)

    console.log(el.tagName)

- elementsFromPoint(centerX, centerY) - возвращает массив элементов по координатам, которые пересекают эту точку
- работает только внутри окна, если координаты выходят за пределы то возвращает `null`

## getBoundingClientRect()
getBoundingClientRect() применяется для того чтобы показать что-либо возле элемента. Работает как fixed позиционирование.

Перемещаем кнопку к низу заголовка:

    const title       = document.querySelector('.title')
    const titleCoords = title.getBoundingClientRect()

    console.log(titleCoords)
    console.log(titleCoords.left)
    console.log(titleCoords.bottom)

    // перемещаем кнопку к заголовку
    const btn = document.querySelector('.btn')

    btn.style.position = 'fixed'
    btn.style.left     = titleCoords.left + 'px'
    btn.style.top      = titleCoords.bottom + 'px'

При прокрутке, кнопка останется зафиксированной на экране. Если этого не нужно то пропишите `btn.style.position = 'absolute'`

## Координаты относительно документа, а не окна
Получаем координаты относительно документа, а не окна:

    pageY = clientY + прокрутка вертикальная
    pageX = clientX + прокрутка горизонтальная

## Разное
Любая точка на странице имеет координаты:
- относительно окна браузера: el.getBoundingClientRect()
- относительно документа: el.getBoundingClientRect() + pageYOffset (вертикальная/горизонтальная прокрутка)
