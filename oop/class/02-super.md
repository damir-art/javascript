# super()
- `super()` - позволяет обращаться к методам родителя: `super.метод()`,
- `super()` используют в 2х случаях, в конструкторе наследнике и при обращении к классу родителю/предку из метода наследника

    // Создаем класс
    class User {
      constructor (username) {
        this.username = username
      }
      getUserName() {
        return this.username
      }
    }

    // Наследуемый класс
    class Client extends User {
      constructor (username, phone) {
        super(username)
        this.phone = phone
      }
      getClientPhone() {
        console.log(super.getUserName()) // Обращаемся к методу родителя
        return this.phone
      }
    }

    // Создаем данные, получаемые от формы
    let a = 'Ivan'
    let b = '1234567890'

    const user = new User(a)
    console.log(user.getUserName()) // Ivan

    const client = new Client(a, b)
    console.log(client.getClientPhone()) // Ivan, 1234567890

К методу можно обратиться даже при перезаписи метода в дочернем классе:

    getUserName() {
      super.getUserName() // Обращаемя к родительскому методу из дочернего, с таким же именем
      return this.username
    }
