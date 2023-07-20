# Деструктуризация объектов ES6(2015)
Чаще всего в JavaScript используются две структуры данных - это Object и Array. Деструктурирующее присваивание также используется, если нужно передать в функцию не объект/массив, а их элементы. 

Деструктуризация разбивает объект/массив на переменные при присвоении.  
Деструктуризацию объекта используют для того, чтобы при обращению к свойству не писать постоянно имя объекта.

## Деструктуризация объекта 
При деструктуризации объекта, имена переменных должны совпадать с именами свойств объекта.

    const man = {
      name: 'Peter',
      surname: 'Smith'
    }

    let { name, surname } = man

    console.log(name)    // Peter
    console.log(surname) // Smith

При этом, в отличии от массива, порядок  не имеет значения `{ surname, name }`.

## Изменяем названия переменных :
Присваиваем переменным с другим названием:

    const man = {
      name: 'Peter',
      surname: 'Smith'
    }

    let { name: n, surname: s } = man

    console.log(n) // Peter
    console.log(s) // Smith

## Переменные по умолчанию =

    const man = {
      name: 'Peter'
    }

    let { name, surname = "Смит", job = "Водитель" } = man

    console.log(name)    // Peter
    console.log(surname) // Смит
    console.log(job)     // Водитель

По умолчанию сработает, если свойство отсутствует.

## Совмещаем : и =

    const man = {
      name: 'Peter'
    }

    let { name: n, surname: s = "Смит", job: j = "Водитель" } = man

    console.log(n) // Peter
    console.log(s) // Смит
    console.log(j) // Водитель

## Деструктуризация параметров функций
Если параметров у функции много то можно передать в неё объект.

Объект как параметр функции. Деструктуризация объекта, который является параметром функции:

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

## Старая запись
## Деструктуризация объектов
Деструктуризация свойств объекта:

    const people = {
      name:       'Петя',
      lastname:   'Петров',
      age:        27,
      programmer: true,
    }

    // const name       = people.name
    // const lastname   = people.lastname
    // const age        = people.age
    // const programmer = people.programmer

    // Синтаксис деструктуризации
    // people - название переменной в которой хранится объект
    // в скобки {} записываем имена свойств которые хотим деструктурировать в переменные
    const {name, lastname, age, programmer} = people

    console.log(name)       // Петя
    console.log(lastname)   // Петров
    console.log(age)        // 27
    console.log(programmer) // true

Значение параметра по-умолчанию:

    const {name, lastname, age, programmer, car = 'bmw'} = people

## Переменная отсутствует
Свойство `c` в объекте отсутствует, в переменную запишется undefined:

    const obj = {
      a: 1,
      b: 2
    }

    const { a, b, c } = obj;
    console.log( a, b, c ); // 1 2 undefined

## Переменная по-умолчанию
Запишем в отсутствующую переменную `c` значение по-умолчанию:

    const { a, b, c = 3 } = obj;
    console.log( a, b, c ); // 1 2 3
