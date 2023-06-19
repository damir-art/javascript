# some()
some() - проверяет, если хотябы один элемент в массиве соответствует условию, то возвращает `true`.  
Если массив пустой, то будет возвращен `false`, независимо от условия или даже его отсутствия, а например присутствия только лишь строки `return true`.

Пример:

    const a = [ 1, 2, 3, 4, 5 ];

    const b = a.some( item => {
      if ( item > 4 ) {
        return true;
      }
    })

    console.log(b); // true

## Пример с JSON

    const a = [
      { name: 'Ivan ', age: 33 },
      { name: 'Petr',  age: 45 },
      { name: 'Sidor', age: 27 },
      { name: 'Marat', age: 17 }
    ]

    const b = a.some( item => {
      if ( item.age > 44 ) {
        return true;
      }
    });

    console.log(b) // true
