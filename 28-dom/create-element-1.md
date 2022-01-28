# Создание элементов

    textContent - вставляет/возвращает текст
    innerHTML   - вставляет/возвращает текст и теги внутри элемента
    insertAdjacentHTML('куда вставлять', 'HTML-код') - вставляет HTML-код
    insertAdjacentText('куда вставлять', 'текст')    - вставляет текст
    createElement('tag')     - объектный способ создания элементов
    createDocumentFragment() - создание "ящика" куда можно сложить все элементы
    <template>               - создание элементов с помощью шаблонов

## Разница между innerHTML и insertAdjacentHTML()
Пример параграфа:

    <p class="hello">Всем привет</p>

Создаём кнопку с помощью `innerHTML`:

    document.body.innerHTML = document.body.innerHTML + '<button type="button">Кнопка</button>'

Здесь текст параграфа `p` не изменится:

    const hello = document.querySelector('.hello')
    document.body.innerHTML += '<button type="button">Кнопка</button>'
    hello.textContent = 'Всем пока'

Здесь текст параграфа `p` изменится, кнопку создали с помощью `insertAdjacentHTML`:

    const b = document.querySelector('b')
    document.body.insertAdjacentHTML('beforeend', '<button type="button">Кнопка</button>')
    hello.textContent = 'Всем пока'

## createElement('tag')

    const pool_2 = document.querySelector('.pool-2')
    const poolElement = document.createElement('div')
    poolElement.classList.add('el')
    poolElement.innerHTML = '<span>1</span>'
    pool_2.appendChild(poolElement)

    console.log(poolElement);

## Примеры

Создаём элемент, манипулируем им, выводим на страницу. Или создаём, выводим, манипулируем.

- `createElement('div')`           - создаём элемент с тегом div
- `appendChild(div)`               - вставляем созданный элемент в другой элемент, в конец
- `document.body.appendChild(div)` - вставляем элемент в body

### Создаём элемент div

    // контейнер куда будет помещён созданный элемент
    const out = document.querySelector('.out')

    // создаём элемент div
    const div = document.createElement('div')
    div.textContent  = 'Элемент'                 // добавляем текст внутрь элемента
    // div.innerHTML = '<b>Элемент с тегами</b>' // добавляем текст и теги внутрь элемента
    div.classList.add('new')                     // добавляем класс элементу
    out.appendChild(div)                         // внедряем элемент внутрь другого элемента

    btn.addEventListener('click', function() {
        console.log('Элемент создан')
        console.log(div)
    });

### Создаем элемент списка
Создаем элемент списка вводя текст элемента в текстовое поле и нажимая на кнопку. Каждый элемент списка можно удалить, нажав на кнопку рядом с элементом.

    const myInp = document.querySelector('#myInp')
    const myBtn = document.querySelector('#myBtn')
    const myList = document.querySelector('#myList')

    myBtn.addEventListener('click', function () {
        const myLi = document.createElement('li')
        myLi.classList.add('item') 
        myLi.textContent = myInp.value

        const delBtn = document.createElement('button')
        delBtn.textContent = 'delete'

        myLi.appendChild(delBtn)
        myList.appendChild(myLi)

        myInp.value = ''

        delBtn.addEventListener('click', function () {
            myList.removeChild(myLi) // удалить элемент рядом с кнопкой
        })
    })

Каким образом JavaScript понимает, какой именно дочерний элемент нужно удалить? За это отвечает замыкание.

Замыкание это способность функции запоминать область видимости, в которой эта функция была объявлена и пользоваться переменными этой области.
