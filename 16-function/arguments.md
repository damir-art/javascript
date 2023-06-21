# arguments
Все аргументы функции располагаются в псевдомассиве `arguments`:

    function sum() {
      console.log(arguments); // Arguments { 0: 1, 1: 2, 2: 3, … }
    }

    sum( 1, 2, 3 );

- Так как это псевдомассив, то в отличии от `...`, arguments не поддерживает методы массивов,
- У стрелочной функции нет своего контекста и `this`, поэтому нет и `arguments`,
- Для более удобной работы с аргументами рекомендется использовать не `arguments` а `...`.

## Превращаем псевдомассив arguments, в настоящий массив

    function getArgs () {
      const args = Array.prototype.slice.call(arguments);
      console.log(args);
    }

    getArgs(1, 2)
