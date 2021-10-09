# Валидация
Валидация - проверка на правильность, введённых пользователем данных.

Валидация форм это:
- проверка на правильность формата введенных данных
- ограничение значений (min, max)
- реакция на изменение
- запрет на отправку

## HTML5 валидация без JavaScript
С помощью атрибутов HTML5 для форм.
- специальные типы полей: number, date, email
- атрибуты задающие ограничения на ввод: min/max, required, pattern
- свойство `validity` DOM-объектов элементов форм
- событие oninvalid у объектов элементов форм

Существует проблема не совместимости браузеров.

## Валидация с JavaScript
HTML5 закрывает большинство задач касаемо валидации на фронтенде, для JavsScript остаётся только реализация реакции на изменение значений.

`validity` - свойство у JS-объектов форм, описывающие валидность каждого из полей. Содержит информацию об ошибке и сообщение которое выведет браузер. `validity` является объектом.

Свойства объекта `validity`:
- badInput - введено неправильное значение
- customError - задано кастомное сообщение об ошибке
- patternMismatch - не соответствует паттерну
- rangeOverflow - больше значения max
- rangeUnderflow - меньше значения min
- stepMismatch - значение не попадает в step
- tooLong - больше максимальной длины
- tooShort - слишком короткое значение
- typeMismatch - не совпадает тип
- valid - валидно ли поле
- valueMissing - нет значения

Все эти свойства - флаги, булевы значения `true/false`.

Пример кода обработки валидации и вывода кастомных сообщений:

    <form method="POST" action="#">
        <input class="userNameInput" type="text" name="username" value="damir" minlength="2" maxlength="10" required />
        <button type="submit">Отправить</button>
    </form>
    
    const userNameInput = document.querySelector('.userNameInput')

    userNameInput.addEventListener('invalid', function (e) {
        if(userNameInput.validity.tooShort) {
            userNameInput.setCustomValidity('Вы ввели меньше 2х символов!')
        }
    })

`invalid` - событие которое происходит на каждом элементе формы перед её отправкой, если значения элементов не верны

## Разное
- валидация на фронтенде это не вопрос безопасности, а вопрос пользовательского взаимодействия, вопрос удобства интерфейса