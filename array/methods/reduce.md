# reduce()
reduce() используется если в результате обработке массива (строки) нужно получить 1 элемент. `reduceRight()` аналогичен `reduce()` но проходит по массиву справа налево.

- reduce() возвращает результат обрабоки массива,
- reduce() используется для свертки массивов,
- reduce() принимет 2 обязательных аргумента: накопитель (accum), текущее значение (item) и 2 не обязательных аргумента (index, array).

reduce() - это аналог записи с циклом:

    let result = ''
    for () {
      result += ...
      ...
    }

Схема:

    let value = arr.reduce(function (previousValue, item, index, array) {
      //
    }, [initial])

Функция применяется по очереди ко всем элементам массива. Переносит свой результат на следующий вызов.

- `previousValue` - результат предыдущего вызова функции, при первом вызове равен `initial`, если он передан
- `item`  - элемент массива
- `index` - индекс массива
- `array` - массив

Пример:

    const arr = [ 1, 2, 3, 4, 5 ];

    let res = arr.reduce(function (acc, item) {
      return acc + item;
    });

    console.log(res) // 15

Пример с `initial`:

    const arr = [ 1, 2, 3, 4, 5 ];

    let res = arr.reduce(function (acc, item) {
      return acc + item;
    }, 5)

    console.log(res) // 20

Если использовать `reduce` без `initial` и обращаться к пустому массиву, то возникнет ошибка.

## Примеры кода

    const a = [22, 33, 44];

    const b = a.reduce( (accum, item) => {
      // console.log(accum) // 22, undefined
      // console.log(item)  // 33, 44
      return accum          // 22
      // return item        // 44
    })

    console.log(b) // 22

- в `accum` помещается первый элемент массива, оставшиеся пропускаются по циклу,
- в `b` попадает то что накопилось в накопителе.

Сумма или строка из элементов массива через `reduce()`:

    const a = [ 22, 33, 44 ];

    const b = a.reduce(( accum, item ) => {
      accum = accum + item
      // accum = accum + ' ' + item // строка: 22 33 44
      return accum
    })

    console.log(b) // 99

Сумма элементов, которые больше 0:

    const a = [ 2, 3, 4, -7 ];

    const b = a.reduce( (accum, item) => {
      if (item > 0)
        accum += item
      return accum
    })

    console.log(b) // 9

Если первым элементов будет отрицательное число, то сумма в условии будет неправильной, поэтому после калбека нужно для `accum` задать стартовое чиcло, например `0`:

    const a = [-4, 2, 3, 4, -7]

    const b = a.reduce( (accum, item) => {
        ...
    }, 0)

Находим самое большое число в массиве:

    const a = [-4, 2, 3, 4, -7]

    const b = a.reduce( (accum, item) => {
        if (item > accum)
            accum = item
            
        return accum
    })

    console.log(b) // 9

Переиндексация массива это создание объекта на основе массива. Превращаем JSON в одномерный массив.
