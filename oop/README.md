# ООП
ООП - это представление сущностей из реального мира с помощью объектов. Организация взаимодествия между объектами. Архитектура.

Теория ООП, `theory.md`
- Наследование, `inheritance.md`
- Полиморфизм, `polymorphism.md`
- Инкапсуляция, `encapsulation.md`

## Разное:
- https://www.youtube.com/watch?v=5l01s6Vkqp0 прототипы, Сергей Мелюков

# Объект, функция конструктор, класс

## Объект

    const userVlad = {
      name: "Vlad",
      age: 21,
      city: "Moscow",

      print() {
        console.log(this.name);
      }
    }

    const userVasya = {
      name: "Vasya",
      age: 25,
      city: "Piter",

      print() {
        console.log(this.name);
      }
    }

    userVlad.print();
    console.log( userVasya.city );

## Функция конструктор
Функция без `new`. Используется в старом коде, а также в библиотеках и фреймворках. Напишем функцию конструктор, которая будет создавать однотипные объекты (без new тоже почемуто работает).

    function User(name, age) {
      return {
        name,
        age,

        print() {
          console.log( name );
        }
      }
    }
    const ivan = User("Иван", 25);
    const petr = User("Петр", 30);
    console.log( ivan.print() );
    console.log( petr.print() );

Сокращённая запись:

    function User(name, age) {
      return {
        name,
        age
      }
    }

Функция конструктор с `new`, появляется constructor. С помощью `new` можно узнать какая функция создала объект. Оператор `new` каждый раз создаёт новый контекст `this = { __proto__: ... }` и информацию кем этот объект был создан. Наполянем контекст. Оператор new сам возвращает контекст.

    function User(name, age) {
      // this = { __proto__: ... }

      // this ...

      // return this
    }

Пример с new:

    function User(name, age) {
      // this = { __proto__: ... }

      this.name = name;
      this.age = age;

      this.print = function() {
        console.log( this.age );
      }

      // return this
    }
    const ivan = new User("Иван", 25);
    const petr = new User("Петр", 30);

    console.log( ivan ); // появился constructor: function User(name, age)

    ivan.print();
    petr.print();

Функция конструктор, это функция которая конструирует объекты.

## Класс
Класс можно создать один раз и на его основе создать сотни объектов у которых будут одни и теже свойтсва и методы, изменять для сотен и тысяч объектов свойства и методы можно в одном месте, а именно в классе.Классы нужны для того, чтобы создавать однотипыне объекты, похожие по своей структуре.

Классы пришли в ES6 как замена функций конструкторов. Класс это отдельная сущность в JavaScript. Классы пришли из ООП.

- constructor() - зарезервированный метод в классах, вызывается один раз в момент создания объекта
  - в нем сам собой появляется объект this
  - функция которая вызывается в момент создания экземпляра
- this это ссылка на объект, а не на класс
- объект созданный на основе какого либо класса, называется экземпляром
- у функции конструктора сложно делать методы, наследование

Пример:

    class User {
      constructor(name, age) {
        // this = {}
        this.name = name;
        this.age = age;

      }
      isAdult() {
        return this.age > 18;
      }
    }

    const user = new User("Ivan", 17);
    console.log( user.isAdult() );

Класс без конструктора, пример из геймдева с точкой координат, по-умолчанию x и y равен 0. Если ваш класс не делает никакой работы на старте, на моменте создания объекта, то вам не нужен конструктор:

    class Point {
      x = 0;
      y = 0;

      toVector() {
        console.log( this.x + this.y );
      }
    }

    const point = new Point();
    point.x = 10;
    point.y = 12;

    point.toVector(); // 22

### Модификаторы доступа
При проектировании классов мы должны продумать какие свойства и методы публичные, а какие скрытые.
