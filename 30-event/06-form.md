# Форма
Работаем с событиями формы и её элементами.

- console.log(myForm.elements) `HTMLFormControlsCollection` получаем объект со свойствами, имена которых совпадают со значениями атрибутов `name` у элементов, получаем доступ к нужным нам полям
- `myForm.elements` хранилище полей формы
- `myForm.elements.lastName` (myForm.lastName) получаем доступ к элементам формы можно через атрибут `name`
- `myForm.elements.lastName.value` получаем значение которое ввели в текстовое поле

## Пример формы

    <form id="myForm" action="#">
        <div>
            Имя:<br />
            <input type="text" name="name" placeholder="Имя" />
        </div><br />

        <div>
            Фамилия:<br />
            <input type="text" name="lastName" placeholder="Фамилия" />
        </div><br />

        <div>
            Пол:<br />
            <select name="gender">
                <option value="m">М</option>
                <option value="f">Ж</option>
            </select>
        </div><br />

        <div>
            <input type="checkbox" name="auto" /> авто
        </div><br />

        <button id="sendButton" type="submit">Отправить</button>
    </form>

## Получаем доступ к текстовым полям формы

    const myForm = document.querySelector('#myForm')
    const sendButton = document.querySelector('#sendButton')

    sendButton.addEventListener('click', function (e) {
        e.preventDefault()
        console.log(myForm.elements) // HTMLFormControlsCollection
        console.log(myForm.elements.name) // получаем доступ к элементу через значение атрибута `name`
        console.log(myForm.elements.name.value) // получаем доступ к значению элемента через `value`
        console.log(myForm.elements.lastName.value)
    })

## Получаем доступ к спискам select
Получаем доступ к значению option у элемента select:

    console.log(myForm.elements.gender.value)

## Получаем доступ к состоянию checkbox
`on/off` выбран/не выбран

    myForm.elements.auto.checked
    querySelector('input:checked') // селектор состояния

## Разное
- если данные из формы отправляются на сервер, то у элементов формы обязательно должен быть атрибут `name`
- если искать `checked` через `querySelector('input[checked]')` то найдётся `checked` отмеченный в разметке по умолчанию, а не текущее его состояние
