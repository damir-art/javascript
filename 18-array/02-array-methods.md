# Методы массивов

- pop()
- push()
- delete (оператор)
- splice()
- shift()
- unshift()
- slice()
- indexOf()
- lastIndexOf()
- map()
- filters()
- split()
- join()
- forEach()

Array.prototype.method(). При работе с большими массивами, не изменяйте элементы внутри основного массива, а создавайте новый массив с нужными элементами, так улучшится производительность.

## pop()
Удаляет последний элемент массива, возвращает удаленный элемент.

Пример:

    const cities = ['Moscow', 'London', 'Berlin']
    const pop = cities.pop()

    console.log(pop)    // Berlin
    console.log(cities) // Array [ "Moscow", "London" ]


## push(значение(я))
Добавляет элемент(ы) в конец массива, возвращает количество элементов в массиве.

Пример: 

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing']
    console.log(cities.push()) // 6

    let push = cities.push('Rome', 'Vein')
    console.log(push) // 7

    console.log(cities, push) // Array(7) [ "Moscow", "London", "Berlin", "Paris", "Beijing", "Rome", "Vein" ], 7

## delete
Удаляет значение элемента внутри массива:
    
    const cities = ['Москва', 'Пекин', 'Лондон', 'Берлин', 'Вашингтон', 'Париж'];

    console.log(cities)
    delete cities[2]
    console.log(cities)
    console.log(cities.length)

Элемент под индексом 2 не удалится, он станет пустым `<1 empty slot>`. Длина массива останется прежней.

## splice()
Вырезает элементы, весь массив, заменяет добавляет элементы. Может принимать 1-n аргументов.
* splice() - ничего не вырезать, вернуть пустой массив
* splice(0) - вырезать весь массив, вернуть весь массив
* splice(2) - вырезать всё начиная со второго индекса, вернуть получившийся массив
* splice(2, 4) - вырезать четыре элемента, начиная со второго индекса, вернуть получившийся массив
* splice(1, 4, 'yes', 'no') - вырезать четыре элемента, начиная с первого индекса, добавить два элемента взамен вырезанных вернуть получившийся массив
* splice(1, 2, 3, 4, 5) - вырезать два элемента, начиная с первого индекса, вернуть получившийся массив, `3, 4, 5` заменяет вырезанные элементы

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

## shift()
Удалить первый элемент массива, возвращает удаленный элемент.

Пример:

    const cities = ['Moscow', 'London', 'Berlin']
    const shift = cities.shift()
    console.log(cities)
    console.log(shift)

## unshift()
Добавить элемент(ы) в начало массива возвращает количество элементов в массиве, после добавления новых.

Пример:

    const cities = ['Moscow', 'London', 'Berlin']
    const unshift = cities.unshift('Rome', 'Vein')
    console.log(cities)
    console.log(unshift)

## slice()
Копировать массив целиком, не по ссылке. Может принимать один или два аргумента.

* slice()       - копировать весь массив
* slice(2)      - копировать весь массив, начиная со второго элемента
* slice(1, 3)   - копировать со второго по третий элементы, четвертый не копирует
* slice(-4, -1) - копировать со второго по четвёртый элементы с конца

Пример №1:

    const cities  = ['Moscow', 'London', 'Berlin']
    const cities2 = cities // массив скопировался по ссылке
    cities2.pop()          // у cities последний элемент тоже удалился

    console.log(cities)
    console.log(cities2)

Пример №2:

    const cities = ['Moscow', 'London', 'Berlin']
    const cities2 = cities.slice() // массив скопировался не по ссылке
    cities2.pop()

    console.log(cities)
    console.log(cities2)

## indexOf(значение)
Вернет индекс элемента, при совпадении значения:

- indexOf(значение) - возвращает индекс, найденного элемента или `-1` если ничего не найдено
- indexOf(значение, 2) - искать со второго элемента

Пример №1

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing', 'Rome', 'Vein']

    console.log(cities.indexOf('Rome')

Пример №2

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing', 'Rome', 'Vein']

    console.log(cities.indexOf('London', 2)) // -1

## lastIndexOf()
Вернет индекс элемента, при совпадении значения. Ищет с конца.

## join()
Создаёт из элементов массива строку и возвращает его. Изначальный массив не изменяется.

- join() - строка из массива
- join('') - разделитель элементов размещаем между кавычками

Пример

    var arr = ['Юлий', 'Цезарь', 'Император', 'Рима'];
    var arrTxt = arr.join();

    console.log(arr)    // ['Юлий', 'Цезарь', 'Император', 'Рима']
    console.log(arrTxt) // Юлий,Цезарь,Император,Рима
