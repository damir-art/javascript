# cssText
Задаём несколько стилей в одной строке.

    let head = document.querySelector('.head')

    head.style.cssText = `
        color: green;
        font-size: 22px;
    `;

- Стили поместятся в объект `style`. Данный способ заменяет все стили в атрибуте `style`.
- Данный способ используется редко. Например можно использовать при создании новых элементов.
- Является аналогом установки значения атрибута через `setAttribute('style', '...')`
