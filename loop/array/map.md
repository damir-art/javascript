# map()
map() - метод массива, используется когда нужно перебрать элементы массива и к каждому из них функцию. Создаёт новый массив. Длина исходного массива совпадает с длиной нового.

Схема:

    const res = arr.map(function (item, index, array) {
      // создаётся новый массив
    })

Пример:

    const cities = ['Moscow', 'London', 'Berlin']

    const newCities = cities.map((item) => item + 1)

    console.log(cities)    // [ "Moscow", "London", "Berlin" ]
    console.log(newCities) // [ "Moscow1", "London1", "Berlin1" ]

Пребразует массив. Один из наиболее полезных и частоиспользуемых методов. Вызывает функцию для каждого элемента массива.

    const a = [ 'Москва', 'Берлин', 'Пекин', 'Лондон', 'Париж' ];

    const b = a.map( el => {
      // console.log( 'Столица: ' + el ) // Столица: Название столицы
      return 'Столица: ' + el
    })

    console.log(b)

- Новый (результирующий) массив по размеру равен исходному,
- `map()` по сути это цикл, который перебирает каждый элемент массива, выполняет над ним операцию и возвращает результат,
- Чтобы создался новый массив с новыми значениями нужно использовать `return`, иначе получится массив со значениями элементов `undefined`,
- Всё что записано в `return` будет возвращено в качестве значения элемента и записано в новый массив.

Пример, убираем пробелы, делаем буквы верхнего регистра:

    const a = [ ' москва', '  берлин  ', ' пекин', 'лондон  ', ' париж' ];

    const b = a.map( el => {
      return el.trim().toLocaleUpperCase();
    });

    console.log(a); // Array(5) [ " москва", "  берлин  ", " пекин", "лондон  ", " париж" ]
    console.log(b); // Array(5) [ "МОСКВА", "БЕРЛИН", "ПЕКИН", "ЛОНДОН", "ПАРИЖ" ]

## Параметры map()
В методе `map()` можно использовать параметры `index`

    const a = [ 'Москва', 'Берлин', 'Пекин', 'Лондон', 'Париж' ];

    const b = a.map( (el, index, array) => {
      // console.log( 'Столица: ' + el ) // Столица: Название столицы
      console.log(index)
      if (index == 1) {
        array[index + 1] = 'Шанхай' // Изменяется также и исходный исходный массив
      }
      return 'Столица: ' + el
    }, context);

    console.log(a);
    console.log(b);

- `index` - индекс элемента,
- `array` - исходный массив,
- `context` - контекст исполнения,
- `if (index == 4) array[index + 1] = 'Шанхай'` - новый элемент добавится в исходный массив, а в новом массиве его не будет,
- всё что делает `map()` можно заменить обычным циклом.

## map и массив объектов

    const arr = [
      { key: 1, value: 10 },
      { key: 2, value: 20 },
      { key: 3, value: 30 },
    ];

    const arrMap = arr.map(({ key, value }) => ({ [key]: value }));

    console.log(arr);
    console.log(arrMap);

С помощью `map` получим массив состоящий из названий государств.

    const a = [
      {
        id: 0,
        country: 'russia'
      },
      {
        id: 1,
        country: 'usa'
      }
    ]

    const b = a.map( aItem => {
      return aItem.country
    })

    console.log(b) // [ "russia", "usa" ]