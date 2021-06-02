# Операторы spread (...objName), rest
Чтобы изучить работу операторов rest и spread, создадим HTML-форму:

    <form>
        <input type="text" name="title" /><br />
        <input type="text" name="text" /><br />
        <button type="submit">Save</button>
    </form>

Создадим скрипт обработчик данной формы:

    const form = document.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const title = form.title.value
        const text = form.text.value

        // console.log(title, text)
        // saveForm({title, text})
    })

Сохраняем данные из формы на сервере. Подготавливаем объект для сохранения:

    function saveForm(data) {
        const formData = {
            title: data.title,
            text:  data.text,
            date: new Date().toLocaleDateString()
        }
        console.log('Form data:', formData)
    }

Проблема, если мы добавим еще одно (например `price`) или несколько полей в форму, то скрипт придется переписывать. Как сделать так чтобы минимизировать внесенией изменений в скрипт? Для этого нам помогут операторы `rest` и `spread`.

## Деструктуризация
Сначала рассмотрим сокращение кода через деструктуризацию:

    function saveForm(data) {
        const {title, text, price} = data

        const formData = {    
            title, text, price,
            date: new Date().toLocaleDateString()
        }

        console.log('Form data:', formData)
    }

Деструктуризация в параметрах функции:
    
    function saveForm({title, text, price}) {

        const formData = {    
            title, text, price,
            date: new Date().toLocaleDateString()
        }

        console.log('Form data:', formData)
    }

## spread (...objName)
**spread (...objName)** - разворачивает объект, в независимости о того сколько свойств туда внесли.

    function saveForm(data) {
        const formData = {    
            ...data,
            date: new Date().toLocaleDateString()
        }
        console.log('Form data:', formData)
    }

## rest
**rest** применяется когда мы незнаем сколько параметров попадет в функцию:

    ...
        saveForm(title, text, price)
    ...

    function saveForm(...args) {
        console.log('Args:', args) // массив

        // производим деструктуризацию массива
        const [title, text, price] = args

        const formData = {
            title, text, price,
            date: new Date().toLocaleDateString()
        }

        console.log('Form data:', formData)
    }
