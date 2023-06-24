# Наследование
В прототипном программировании расширяют один объект на основе другого, здесь же используются классы. Один класс может наследовать другой.

Структура файлов:

    <script src="User.js"></script>
    <script src="Client.js"></script>
    <script src="app.js"></script>

На основе класса `User`:

    class User {
      constructor (username, password) {
        this.username = username
        this.password = password
      }
      validatePassword() {
        // Если длина пароля > 6, то возвращаем true
        if ( this.password.length > 6 ) {
          return true
        } else {
          return false
        }
      }
    }

## Создаём класс наследник
Создаём класс наследник `Client`, расширяем класс `User`.  
Создаем класс `Client`. Класс `Client` будет содержать свойство `phone`. Класс `Client` расширяет класс `User`:

    class Client extends User {
      constructor (username, password, phone) {
        super(username, password)
        this.phone = phone
      }
    }

- внутри класса есть конструктор, который запускается при создании объекта,
- `username`, `password` должны быть отправлены родительскому классу, это его свойства и они будут отданы конструктору родителя,
- для того чтобы обратиться к родительскому классу изнутри дочернего нужно воспользоваться методом `super()` и отправить ему его параметры,
- `super()` нужно указывать в классах наследниках,
- `this.phone = phone` создаём новое свойство для класс `Client`.

В файле `app.js` прописываем:

    const client = new Client()

    // Получаем пустой объект 
    console.log(client) // Object { username: undefined, password: undefined, phone: undefined }

Добавляем данные при создании объекта:

    let a = 'Ivan'
    let b = '111'
    let c = '1234567890'

    const client = new Client(a, b, c)
    console.log(client)

## Добавляем метод

    class Client extends User {
      constructor (username, password, phone) {
        super(username, password)
        this.phone = phone
      }
      getClientPhone() {
        return this.phone
      }
    }

    ...

    console.log(client.getClientPhone()) // Используем метод

## Разное
- при наследовании классов, свойства и методы можно перезаписывать,
- например в классе `Client`, можно создать метод с именем `validatePassword()` со своим функционалом

Чтобы обратиться к родительскому классу из дочернего, нужно использовать ключевое слово `super`:

    getClientPhone() {
      super.validatePassword()
      return this.phone
    }

- `super` это обращение к прототипу
