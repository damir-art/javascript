# JavaScript
Учебник по основам программирования на примере языка JavaScript. Программирование - это управление данными: ввод, обработка, вывод. JavaScript - асинхронный язык программирования.

## Содержание
- Основы, `begin`
- Формы, `form`
- CSS, `css`
- Типы данных, `data-type`
- Операторы, `operator`
- Условия, `condition`
- Циклы, `loop`
- Массивы, `array`
- Функции, `function`
- Объекы, `object`
- ООП (prototype, class), `oop`
- DOM, `dom`
- События, `event`
- Асинхронность, `asynchrony`
- Работа с сетью, `network`
- Модули ES6, `module`
- BOM, `bom`
- Нативные объекты
- UI компоненты
- Плагины
- Организация проекта
- Создание SPA приложения

## Разное
- Задачи, `task`
- `spread` и `rest` записи располагаются в разделах: функции, массивы, объекты.

## JavaScript клиентский
JavaScript клиентский, это:
- DOM - работа со страницей: теги, события
- BOM - работа с браузером: окно, куки, история, хранилища, таймер, таймоут
- HTTP - работа с сетью: запрос/ответ
- `<canvas>` - создание графики

## Контекст и область видимости
Область видимости основана на том где функция вызывается (какие переменные ей доступны), а контекст основан на том, кем функция вызывается (каким объектом). Другими словами, область видимости относится к доступу функции к переменным при ее вызове и является уникальной для каждого вызова. Контекст - это всегда значение ключевого слова `this`, которое является ссылкой на объект, "владеющий" текущим исполняемым кодом.

## Проверка на итерируемость
obj - итерируемая сущность

    typeof obj[Symbol.iterator] === "function"
