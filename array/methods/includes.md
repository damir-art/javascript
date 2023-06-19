# includes()
Ищет элементы в массиве. Возвращает `true` если поиск успешен.  
Применяется там где нужно узнать, есть элемент в массиве или нет.  
includes() - можно использовать в условиях, вместо indexOf().

Пример:

    const a = [ 'Москва', 'Берлин', 'Пекин', 'Лондон', 'Токио', 'Париж' ];
    console.log(a.includes('Пекин'));    // true
    console.log(a.includes('Пекин', 2)); // указываем с какой позиции искать

    const cities = ['Москва', 'Пекин', 'Лондон', 'Берлин', 'Вашингтон', 'Париж'];
    console.log(cities.includes('Лондон')); // true

В отличии от других методов поиска, правильно ищет `NaN`.

## includes() и строки
Работаем со строками, ищет символы в строке:

    const a = 'Москва';
    console.log(a.includes('ос')); // true

## includes() и JSON
Искать все объекты, у которых в свойстве `name` имеется `ov`:

    const users = [
      { name: 'Ivanov',  age: 27 },
      { name: 'Petrov',  age: 25 },
      { name: 'Sidorov', age: 18 }
    ]

    const user = users.filter( item => item.name.includes('ov') );
    console.log( user );
