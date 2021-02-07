# Создание элементов
Создаём элемент, манипулируем им, выводим. Или создаём, выводим, манипулируем.

* **document.createElement('tagName', 'куда вставлять')** - создаем элемент
* **insertAdjacentElement('куда', элемент)** - помещаем элемент внутрь другого элемента

## Создаём элемент div
    const out = document.querySelector('.out')

    const div = document.createElement('div') // создать элемент по тегу
    div.innerHTML = 'privet' // добавляем текст внутр элемента
    div.classList.add('out') // добавляем класс элементу

    div.addEventListener('click', function() {
        console.log('hello');
    });

    out.appendChild(div)     // внедряем элемент внутрь другого элемента
    console.log(div)