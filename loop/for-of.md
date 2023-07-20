# for of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

Цикл `for ... of` упрощает нам работу, позволяя не вычислять значения индексов массива.  
Цикл `for ... of` перебирает всё, у чего есть итератор.

Цикл для перебора итерируемых объектов (массивы, аргументы, DOM-коллекции, строки, map, set, генератор и т.п.), на каждом шаге, переменной присваивается значение нового элемента массива. Массивы и строки это объекты.

    for (const item of object) {
      инструкции;
    }

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing']

    for (const city of cities) {
      console.log(city);
    }

Упрощает перебор массивов:

    const numbers = [ 1, 2, 3, 4 ];

    for ( let i = 0; i < numbers.length; i++ ) {
      console.log(numbers[i]); // 1 2 3 4
    }

Заменяем на:

    for (const item of numbers) {
      console.log(item); // 1 2 3 4
    }

## for ... of и arguments

    function sum() {
      var result = 0;
      for (var arg of arguments) {
        result += arg;
      }
      return result;
    }
    console.log(sum(1, 2, 3, 4)); // 10

## Дополнительно
- `for ... of` не может перебрать обычный объект, он не итерируемый, чтобы сделать его итерируемым, нужно добавить в него `Symbol.iterator`,
- `for ... of` может перебрать строку посимвольно.
