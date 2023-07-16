# Деструктуризация объектов ES6(2015)
Чаще всего в JavaScript используются две структуры данных - это Object и Array. Деструктурирующее присваивание используется, если нужно передать в функцию не объект/массив, а их элементы. 

Деструктуризация разбивает объект/массив на переменные при присвоении.

## Деструктуризация объекта 
Переменные по именам должны совпадать с именами свойств объекта.

    const man = {
      name: 'Peter',
      surname: 'Smith'
    }

    let { name, surname } = man

    console.log(name)    // Peter
    console.log(surname) // Smith

При этом, порядок не имеет значения `{ surname, name }`.

### Изменяем названия переменных :
Присваиваем переменным с другим названием:

    const man = {
      name: 'Peter',
      surname: 'Smith'
    }

    let { name: n, surname: u } = man

    console.log(n) // Peter
    console.log(u) // Smith

### Переменные по умолчанию =

    const man = {
      name: 'Peter'
    }

    let { name, surname = "Смит", job = "Водитель" } = man

    console.log(name)    // Peter
    console.log(surname) // Смит
    console.log(job)     // Водитель

По умолчанию сработает, если свойство отсутствует.

### Совмещаем : и =

    const man = {
      name: 'Peter'
    }

    let { name: n, surname: s = "Смит", job: j = "Водитель" } = man

    console.log(n) // Peter
    console.log(s) // Смит
    console.log(j) // Водитель

### ...rest
Остаток объекта

    const man = {
      name:    'Peter',
      surname: 'Smith',
      job:     'Voditel'
    }

    let { name, ...rest } = man

    console.log(name)         // Peter
    console.log(rest.surname) // Smith
    console.log(rest.job)     // Voditel
    console.log( rest );      // { surname: "Smith", job: "Voditel" }

### Деструктуризация параметров функций
Если параметров у функции много то можно передать в неё объект.

## Разное
- let [ a, , b ] - второй элемент массива будет пропущен
- let [ a, b ] = [] - значения a и b будут `undefined`
- работает с любым перебираемым объектом: массив, строка, set и т.п
- присваивать можно даже свойствам объекта [ obj.val, obj.val2 ]
- можно деструктурировать вложенные объекты и массивы

## Деструктуризация строк
Деструктуризация строк с помощью метода возврашщающего массив:

    const str = 'hello'
    const [one, two] = str
    console.log(one) // h

Пример со `split()`:

    let str = "Всем привет!"
    let arr = str.split(' ') // Array [ "Всем", "привет!" ]
    let [ a, b ] = arr

    console.log(a); // Всем
    console.log(b); // привет!

## Старая запись
### Деструктуризация объектов
Деструктуризация свойств объекта:

    const people = {
      name: 'Петя',
      lastname: 'Петров',
      age: 27,
      programmer: true,
    }

    // const name = people.name
    // const lastname = people.lastname
    // const age = people.age
    // const programmer = people.programmer

    // Синтаксис деструктуризации
    const {name, lastname, age, programmer} = people // people - название переменной в которой хранится объект
    // в скобки {} записываем имена свойств которые хотим деструктурировать в переменные

    console.log(name)       // Петя
    console.log(lastname)   // Петров
    console.log(age)        // 27
    console.log(programmer) // true

Значение параметра по-умолчанию:

    const {name, lastname, age, programmer, car = 'bmw'} = people

### Объект как параметр
Деструктуризация объекта, который является параметром функции:

    function f (obj) {
      const { a, b } = obj
      // return obj.a + obj.b
      return a + b
    }

    const ob = { a: 3, b: 5 }
    console.log( f(ob) ); // 8

    или

    function f (obj) {
      const { a, b } = obj
      return a + b
    }

    console.log( f({ a: 3, b: 5 }) ); // 8

Обычно деструктуризацию используют чтобы деструктурировать параметр, который является объектом или массивом.
