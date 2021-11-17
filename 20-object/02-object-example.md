# Пример форма-логина
- структурированный подход
- наследование через прототип
- Объект `user` - пользователь пытается авторизоваться
- в момент вхождения, объект user, позволяет проверить пароль
- Объект `user_profile` пользователь вошел, с БД постапают данные и заполняют профиль пользователя
- метод `user_profile.getUserData()` обращается к бэкенду, чтобы получить данные относящиеся к конкретному логину

Создаём с помощью ООП скрипт, обрабатывающий форму регистрации пользователя:

## user.js

    // Объект user, в базе данных есть таблица user, где хранятся логины и пароли пользователей
    const user = {
        'login': '',
        'password': '',
        'validatePassword': function() {
            if ( this.password.length > 6 ) {
                return true
            } else {
                return false
            }
        }
    }

## user_profile.js

    // Объект user_profile, наследуется от объекта user
    // в базе данных есть таблица user_profile, где хранятся различные данные пользователей
    const user_profile = {
        username: '',
        photo: '',
        age: '',
        getUserData: function () {
            // this.login
        },
        __proto__: user
    }

## app.js

    // Присваиваем паролю значние
    user.password = 'hello'

    // Проверяем прошель ли пароль валидацию
    console.log(user.validatePassword()) // false, длина пароля меньше 7

    // user_profile.username = 'John'
    // user_profile.age = 25
    // console.log(user_profile

    // получаем данные пользователя
    user_profile.getUserData()

## Расположение файлов

    <script src="user.js"></script>
    <script src="user_profile.js"></script>
    <script src="app.js"></script>
