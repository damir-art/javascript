# CodeWars
Решаем задачи по JavaScript.

## 8kyu
Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.  
Примечание. Пустые массивы должны возвращать 0.

    const array = [ 1, 2, 3, 4, 5 ];

    function findAverage(array) {
      if (array.length) {
        const sum = array.reduce((acc, item) => acc + item, 0);
        return sum / array.length;
      }
      return 0;
    }

    console.log( findAverage(array) );
