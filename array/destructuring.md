# Деструктуризация массивов ES6(2015)
https://learn.javascript.ru/destructuring-assignment  
https://ru.hexlet.io/courses/js-functions/lessons/params-destructuring/theory_unit  

Деструктурирующее присваивание. Деструктуризация позволяет присвоить нескольким переменным, несколько элементов массива сразу. Изначальный массив при этом не изменяется.

    const person = ['Иван', 'Царевич', 'Москва']
    const [firstName, lastName, city] = person

    console.log(firstName) // Иван
    console.log(lastName)  // Царевич
    console.log(city)      // Москва

    console.log(person)    // ['Иван', 'Царевич', 'Москва']

Присваиваем только тем переменным, которые нужны, запятые обязательны:

    const person = ['Иван', 'Царевич', 'Москва']
    const [ , , city] = person

    console.log(city)   // Москва
    console.log(person) // ['Иван', 'Царевич', 'Москва']

Деструктурировать можно массивы и объекты.  
Деструктуризация упрощает процесс извлечения значений из объектов и массивов.

## Пример №1
- строку имя и фамилия, превращаем в массив через `split(" ")`,
- массив деструктурируем помещая имя и фамилию в переменные `name` и `surname`.

Пример без деструктуризации:

    const str = "Иван Петров";
    const arr = str.split(" "); // Array [ "Иван", "Петров" ]

    const name = arr[0];
    const surname = arr[1];

    console.log(arr);           // Array [ "Иван", "Петров" ]
    console.log(name, surname); // Иван Петров

Пример с деструктуризацией:

    const str = "Иван Петров";
    const arr = str.split(" "); // Array [ "Иван", "Петров" ]

    const [name, surname] = arr; // Деструктурирующее присваивание

    console.log(arr);           // Array [ "Иван", "Петров" ]
    console.log(name, surname); // Иван Петров

Переменные можно обявить заранее:

    let name;
    let surname;
    [name, surname] = arr;

## Пример №2
Передаём массив в функцию, деструктурируем его внутри функции:

    const str = "Иван Петров Сидорович";

    function getName(arr) {
      const [name, surname, patronymic] = arr;
      console.log(name, surname, patronymic);
    }

    getName( str.split(" ") );

Деструктуризация в параметре функции:

    function getName([name, surname, patronymic]) {
      console.log(name, surname, patronymic);
    }

Без первого параметра:

    function getName([ , surname, patronymic]) {
      console.log(`${surname} ${patronymic}`); // Петров Сидорович
    }

    const str = "Иван Петров Сидорович";
    getName( str.split(" ") );

Убираем Сидорович:

    function getName([ , surname, patronymic]) {
      console.log(`${surname} ${patronymic}`); // Петров undefined
    }

    const str = "Иван Петров";
    getName( str.split(" ") );

Параметр по-умолчанию при деструктуризации:

    function getName([ , surname, patronymic = "" ]) {
      console.log(`${surname} ${patronymic}`); // Петров
    }

    const str = "Иван Петров";
    getName( str.split(" ") );

# Старая запись
## Деструктуризация масива

    let arr = [ 'banan', 'orange' ]
    let [ a, b ] = arr

    console.log(a) // banan
    console.log(b) // orange

Деструктуризация, не уничтожает массив, а копирует его элементы в переменные. Деструктуризация это короткий аналог записи:

    let a = arr[0]
    let b = arr[1]

## Значения по-умолчанию

    const cities = ['Москва']

    let [ a = 'Питер', b = 'Казань'] = cities

    console.log(a) // Москва
    console.log(b) // Казань

## Разное
- let [ a, , b ] - второй элемент массива будет пропущен
- let [ a, b ] = [] - значения a и b будут `undefined`
- деструктуризация работает с любым перебираемым объектом: массив, строка, set и т.п
- присваивать можно даже свойствам объекта [ obj.val, obj.val2 ]
- можно деструктурировать вложенные объекты и массивы

Операторы деструктурирующего присваивания по массивам и объектам позволяют писать более лаконичный и выразительный код, а также просто указывать значения переменных по умолчанию, не выполняя никаких дополнительных проверок.
