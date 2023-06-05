# getComputedStyle()
Вычисляем значения CSS-свойств из файла стилей.

    .wrapper {
        width: 800px;
        margin: 0 auto;
    }

    const wrapper = document.querySelector('.wrapper')
    console.log(wrapper.style.width) // empty

Прочтем значение свойства с помощью `getComputedStyle()`:

    console.log(getComputedStyle(wrapper).width) // 800px

Другой пример:

    let head = document.querySelector(".head");

    console.log(getComputedStyle(head));                 // CSS2Properties(359) множество CSS-свойств
    console.log(getComputedStyle(head).color);           // rgb(255, 255, 255)
    console.log(getComputedStyle(head).backgroundColor); // многословные свойства

При обращении к свойствам с помощью `getComputedStyle()` используйте их полные наименования:

    marginTop
    borderTopWidth

Работаем с псевдоэлементами:

    getComputedStyle(el, ':before')
