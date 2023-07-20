# ...spread
spread передаем элементы массива в функцию, заменяет собой `arguments`.  
Spread-оператор упрощает разброс элементов по массиву, объектам или аргументам функции.

`...` - в этом контексте, три точки это spread оператор.  
Вычислим сумму чисел массива, переданную в функцию (в функцию передается один аргумент который является массивом):

    let numbers = [ 1, 2, 3, 4 ];

    function sum() {
      // console.log( arguments[0] ); // Array(4) [ 1, 2, 3, 4 ]

      let result = 0;
      for ( var i = 0; i < arguments[0].length; i++ ) {
        result += arguments[0][i];
      }
      return result;
    }

    let result = sum( numbers );

    console.log( result ); // 10

Чтобы передать множество аргументов, являющиеся значениями, в нашем случае простыми цифрами, можно воспользоваться оператором `...spread` (преобразовываем один массив элементов в множество аргументов):

    let numbers = [ 1, 2, 3, 4 ];

    function sum() {
      console.log( arguments ); // Arguments { 0: 1, 1: 2, 2: 3, 3: 4 }
      let result = 0;
      for ( let i = 0; i < arguments.length; i++ ) {
        result += arguments[i];
      }
      return result;
    }

    let result = sum( ...numbers );

    // console.log( ...numbers ); // 1 2 3 4
    console.log( result ); // 10

Эти инструкции аналогичны:

    let result = sum( ...numbers );
    let result = sum( ...[ 1, 2, 3, 4 ] );
    let result = sum( 1, 2, 3, 4 );

Spread-оператор "разбрасывает" элементы передаваемого в функцию массива по аргументам функции.

## Объединяем массивы
Стандартный способ через `concat()`:

    const numbers  = [ 1, 2, 3, 4 ];
    const numbers2 = [ 5, 6, 7, 8 ];
    const result   = numbers.concat(numbers2);
    console.log(result); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

Делаем тоже самое, но уже через `...spread` оператор:

    const numbers  = [ 1, 2, 3, 4 ];
    const numbers2 = [ 5, 6, 7, 8 ];
    const result   = [ ...numbers, ...numbers2 ];
    console.log(result); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

## Разное
На основе итераторов работает цикл `for ... of` и spread-оператор.

# Старая запись
rest ...spread при работе с массивами.

Бывают ситуации, в которых нам нужно сохранить все, что осталось от изначального массива в отдельную переменную. Это можно сделать при помощи специального символа  `...` после которого указывается имя переменной для сохранения массива.

В результате мы получим несколько переменных со значениями, равными одному элементу массива и массив из оставшихся элементов в новой переменной.

    const person = ['Юлий', 'Цезарь', 'Император', 'Рима']
    const [firstName, lastName, ...restElements] = person

    console.log(firstName)    // Юлий
    console.log(lastName)     // Цезарь
    console.log(restElements) // ['Император', 'Рима']

Ещё пример:

    const person = ['Юлий', 'Цезарь', 'Император', 'Рима']
    const [...restElements] = person
    console.log(restElements) // Array(4) [ "Юлий", "Цезарь", "Император", "Рима" ]

## Деструктурирующее присваивание + ...rest
Если элементов у массива много, то можно воспользоваться оператором - остаточные параметры `...`.

    const cities = ['Москва', 'Пекин', 'Лондон', 'Берлин', 'Вашингтон', 'Париж']
    let [ a, b, c, ...rest ] = cities
    console.log(rest) //  [ "Берлин", "Вашингтон", "Париж" ]

`rest` - это массив, вместо rest можно использовать любое другое слово.
