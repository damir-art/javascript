# Ассоциативный массив
Ассоциативные массивы до ES6 это объект, после можно делать через Map. В обычном массиве, индексом выступает число, а в ассоциативном - строка.

    const male = {
      "age": 56,
      "height": 187,
      "weight": 80,
      "nationality": "rus",
    }

    for (const key in male) {
      console.log( key );         // Имя ключа
      console.log( male[key] );   // Значение массива
      console.log( [key] );       // Массив с одним элементом
      console.log( male.key );    // undefined
      console.log( male["key"] ); // undefined
    }

Другой пример:

    const male = {
      'age': 56,
      'height': 187 + 'sm',
      weight: 80 + 'kg',
      'nationality': 'rus'
    }

    male.age     // 56
    male['age']  // 56
    male[weight] // error

    let w = 'weight'
    male[w] // 80kg

    male.a = '111' // добавляем новый элемент в массив

    male.age = 33 // изменить значение элемента массива

    delete male.height // удалить элемент массива

- `age` - ключ, можно кавычки опустить, но с кавычками ключи можно задавать с пробелами.
- `56` - значение, строка, число, объект, массив и т.д.

## Цикл и ассоциативный массив (for in)

    let t = ''
    for (let key in male) {
      t += key + ' '
    }
    console.log(t) // имена ключей

    let t = ''
    for (let key in male) {
      t += male[key] + ' '
    }
    console.log(t) // значения ключей
