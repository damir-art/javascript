# Массивы
Массив - это конструкция, которая позволяет упорядоченно хранить данные.

Массив - структура, позволяющая хранить коллекцию элементов и предоставляющая методы для манипулирования этими элементами.

Индекс массива - целое число, которое указывает на конкретный элемент массива.

## Создание массива
    // создание массива
    const array = [1, 'string', true]

    // получение доступа ко второму элементу массива
    array[1]

    // меняем значение третьего элемента массива
    array[2] = false

    console.log(array)

Обычно, в массиве хранят данные одного типа: строки, числа или объекты.

## Свойство массива
    array.length          // длина массива
    array[array.length-1] // получить доступ к последнему элементу массива

## Перебор массива циклом
    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing']

    for (let i = 0; i < cities.length; i++) {
        console.log('cities[' + i + '] = ' + cities[i]);
    }

## Методы массива
### array.push(значение(я))
Добавить элемент(ы) в конец массива, возвращает количество элементов в массиве.

Пример: 

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing']
    let push = cities.push('Rome', 'Vein')
    console.log(cities, push)

### array.pop()
Удалить последний элемент массива, возвращает удаленный элемент.

Пример:

    const cities = ['Moscow', 'London', 'Berlin']
    let pop = cities.pop()
    console.log(pop)
    console.log(cities)

### array.unshift()
Добавить элемент(ы) в начало массива возвращает количество элементов в массиве, после добавления новых.

Пример:

    const cities = ['Moscow', 'London', 'Berlin']
    const unshift = cities.unshift('Rome', 'Vein')
    console.log(cities)
    console.log(unshift)

### array.shift()
Удалить первый элемент массива, возвращает удаленный элемент.

Пример:

    const cities = ['Moscow', 'London', 'Berlin']
    const shift = cities.shift()
    console.log(cities)
    console.log(shift)

### array.slice()
Копировать массив целиком, не по ссылке. Может принимать один или два аргумента.

* slice() - копировать весь массив
* slice(2) - копировать весь массив, начиная со второго элемента
* slice(1, 3) - копировать со второго по третий элементы, четвертый не копирует
* slice(-4, -1) - копировать со второго второго по четвёртый элементы с конца

Пример №1:

    const cities = ['Moscow', 'London', 'Berlin']
    const cities2 = cities // массив скопировался по ссылке
    cities2.pop() // у cities последний элемент тоже удалился

    console.log(cities)
    console.log(cities2)

Пример №2:

    const cities = ['Moscow', 'London', 'Berlin']
    const cities2 = cities.slice() // массив скопировался не по ссылке
    cities2.pop()

    console.log(cities)
    console.log(cities2)

### array.splice()
Вырезать элменты, весь массив, заменить добавить элементы. Может принимать 1-n аргументов.
* splice() - ничего не вырезать, вернуть пустой массив
* splice(0) - вырезать весь массив, вернуть весь массив
* splice(2) - вырезать всё начиная со второго индекса, вернуть вырезанный массив
* splice(2, 4) - вырезать четыре элемента, начиная со второго индекса, вернуть вырезанный массив
* splice(1, 2, 3, 4, 5) - вырезать два элемента, начиная с первого индекса, вернуть вырезанный массив, `3, 4, 5` заменяет вырезанные элементы

Пример №1

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing']
    const cities2 = cities.splice(2)

    console.log(cities)
    console.log(cities2)

Пример №2

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing', 'Rome', 'Vein']
    const cities2 = cities.splice(1, 2, 'Лондон', 'Берлин', 'Бонн')

    console.log(cities)
    console.log(cities2)

### array.indexOf(значение)
Вернет индекс элемента, при совпадении значения:

* array.indexOf(значение), возвращает индекс, найденного элемента или `-1` если ничего не найдено
* array.indexOf(значение, 2) - искать со второго элемента

Пример №1

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing', 'Rome', 'Vein']

    console.log(cities.indexOf('Rome')

Пример №2

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing', 'Rome', 'Vein']

    console.log(cities.indexOf('London', 2)) // -1

### array.lastIndexOf()
Вернет индекс элемента, при совпадении значения. Ищет с конца.

### join()
Создаёт из элементов массива строку и возвращает его. Изначальный массив не изменяется.

* join() - строка из массива
* join('') - разделитель элементов размещаем между кавычками

    var arr = ['Юлий', 'Цезарь', 'Император', 'Рима'];
    var arrTxt = arr.join();

    console.log(arr)    // ['Юлий', 'Цезарь', 'Император', 'Рима']
    console.log(arrTxt) // Юлий,Цезарь,Император,Рима

## ES6(2015) - деструктуризация
Деструктуризация позволяет присвоить нескольким переменным, несколько элементов массива сразу. Изначальный массив при этом не изменяется.

    const person = ['Иван', 'Царевич', 'Москва']
    const [firstName, lastName, city] = person

    console.log(firstName) // Иван
    console.log(lastName)  // Царевич
    console.log(city)      // Москва
    console.log(person)    // ['Иван', 'Царевич', 'Москва']

Присваиваем одной переменной:

    const person = ['Иван', 'Царевич', 'Москва']
    const [ , , city] = person

    console.log(city)      // Москва
    console.log(person)    // ['Иван', 'Царевич', 'Москва']

## ES6(2015) spread ...
Бывают ситуации, в которых нам нужно сохранить все, что осталось от изначального массива в отдельную переменную. Это можно сделать при помощи специального символа  `...` после которого указывается имя переменной для сохранения массива.

В результате мы получим несколько переменных со значениями, равными одному элементу массива и массив из оставшихся элементов в новой переменной.

    var person = ['Юлий', 'Цезарь', 'Император', 'Рима']
    var [firstName, lastName, ...restElements] = person

    console.log(firstName);    // Юлий
    console.log(lastName);     // Цезарь
    console.log(restElements); // ['Император', 'Рима']
