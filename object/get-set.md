# Геттеры и сеттеры
https://learn.javascript.ru/property-accessors

У объектов есть два типа свойств:
- обычные - свойства данные
- аксессоры - геттеры и сеттеры

Аксессоры - это функции используемые для присвоения и получения значения:
- Геттер - читает данные,
- Сеттер - записывает данные.

Пример (ниже понятнее):

    const user = {
      name: 'Ivan',
      surname: 'Petrov',

      get fullName() {
        // геттер, сработает если вы прочитаете user.fullName
        return 'hello'
      },

      set fullName(value) {
        // сеттер, сработает если вы запишите user.fullName = value
      }
    }

    console.log(user.fullName)         // hello
    console.log(user.fullName = 'Dan') // Dan
    console.log(user)                  // { name: "Ivan", surname: "Petrov", fullName: Getter & Setter }

Здесь `fullName` это виртуальное свойство, которое можно читать и изменять. Несмотря на скобки `()` это не метод, а свойство.

Продолжение примера:

    const user = {
      name: 'Ivan',
      surname: 'Petrov',

      get fullName() {
        // геттер, сработает если вы прочитаете user.fullName
        return `${this.name} ${this.surname}`
      },

      set fullName(value) {
        // сеттер, сработает если вы запишите user.fullName = value
        this.name = value
      }
    }

    console.log(user.fullName)          // Ivan Petrov
    console.log(user.fullName = 'Petr') // Petr
    console.log(user)                   // { name: "Petr", surname: "Petrov", fullName: Getter & Setter }

Геттеры (свойства) нужны для того чтобы манипулировать имеющимися данными и не дублировать их. В примере выше у нас есть свойство `fullName` он и геттер и сеттер, его можно читать и изменять.

Сеттер принимает один аргумент, его значением выступает присваиваемое значение.

Деструктуризация в `set fullName(value)`:

    set fullName(value) {
      // сеттер, сработает если вы запишите user.fullName = value
      [this.name, this.surname] = value.split(' ')
    }

    user.fullName = 'Petr Ivanov'

## Флаги аксессоров
Флаги аксессоров не имеют `value` и `writable`, но имеют `get` и `set`.

## Умные геттеры/сеттеры
Например можно использовать для проверки установки значений свойств объекта.
