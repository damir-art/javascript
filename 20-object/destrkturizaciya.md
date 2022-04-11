# Деструктурирующее присваивание
Чаще всего в JavaScript используются две структуры данных - это Object и Array. Деструктурирующее присваивание используется если нужно передать в функцию не объект/массив, а их элементы. 

Деструктуризация разбивает объект/массив на переменные при присвоении.

## Деструктуризация масива

    let arr = [ 'banan', 'orange' ]
    let [ a, b ] = arr

    console.log(a) // banan
    console.log(b) // orange

Деструктуризация, не уничтожает массив, а копирует его элементы в переменные. Деструктуризация это короткий аналог записи:

    let a = arr[0]
    let b = arr[1]

### Деструктурирующее присваивание + ...rest
Если элементов у массива много то можно воспользоваться оператором - остаточные параметры `...`.

    const cities = ['Москва', 'Пекин', 'Лондон', 'Берлин', 'Вашингтон', 'Париж']

    let [ a, b, c, ...rest ] = cities

    console.log(a)
    console.log(rest[0]

`rest` - это массив, вместо rest можно использовать любое другое слово.

### Значения по-умолчанию

    const cities = ['Москва']

    let [ a = 'Питер', b = 'Казань'] = cities

    console.log(a) // Москва
    console.log(b) // Казань

## Деструктуризация объекта 
Переменные по именам должны совпадать с именами свойств объекта.

    const man = {
        name: 'Peter',
        surname: 'Smith'
    }

    let { name, surname } = man

    console.log(name)    // Peter
    console.log(surname) // Smith

Порядок не имеет значения `{ surname, name }`.

### Изменяем названия переменных `:`
Присваиваем переменным с другим названием:

    const man = {
        name: 'Peter',
        surname: 'Smith'
    }

    let { name: n, surname: u } = man

    console.log(n) // Peter
    console.log(u) // Smith

### Переменные по умолчанию `=`

    const man = {
        name: 'Peter'
    }

    let { name, surname = "Смит", job = "Водитель" } = man

    console.log(name)    // Peter
    console.log(surname) // Смит
    console.log(job)     // Водитель

По умолчанию сработает, если свойство отсутствует.

### Совмещаем `:` и `=`

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
    console.log(rest.job)     // Smith

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

    let str = "Всем привет!"
    let arr = str.split(' ') // Array [ "Всем", "привет!" ]
    let [ a, b ] = arr

    console.log(a)
    console.log(b)

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

    или

    function f ({ a, b }) {
        return a + b
    }

Обычно деструктуризацию используют чтобы деструктурировать параметр, который является объектом или массивом.

### Деструктуризация массивов
Порядок ключей важен.

    const arr = ['moskva', 'piter']
    const [one, two] = arr
    console.log(one) // moskva

### Деструктуризация строк

    const str = 'hello'
    const [one, two] = str
    console.log(one) // h