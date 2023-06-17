# for of `ES6 - 2015`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

Цикл для перебора итерируемых объектов (массивы, аргументы, DOM-коллекции, строки, map, set, генератор и т.п.), на каждом шаге, переменной присваивается значение нового элемента массива. Массивы и строки это объекты.

    for (const item of object) {
      инструкции;
    }

    const cities = ['Moscow', 'London', 'Berlin', 'Paris', 'Beijing']

    for (const city of cities) {
      console.log(city);
    }

## Дополнительно
- `for ... of` не может перебрать объект, чтобы сделать его итерируемым, нужно добавить в него `Symbol.iterator`,
- `for ... of` может перебрать строку посимвольно.
