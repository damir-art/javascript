# Многомерные массивы
Многомерные массивы, массив массивов.

## Двуменый массив
Двумерный массив (многомернный массив, массив массивов).

    const countries = [
        ['Россия',   'Москва', 'Рубль'],
        ['Китай',    'Пекин',  'Юань'],
        ['Англия',   'Лондон', 'Фунт'],
        ['Германия', 'Берлин', 'Евро']
    ]

    console.table(countries)
    console.log(countries[2][1]) // Лондон

## Обход циклом
При обходе многомерного массива циклом, используются вложенные циклы. Выводим массив в виде таблицы:

    const btn = document.querySelector('.btn')
    const out = document.querySelector('.out')

    const countries = [
      ['Россия', 'Москва', 'Рубль'],
      ['Китай', 'Пекин', 'Юань'],
      ['Англия', 'Лондон', 'Фунт'],
      ['Германия', 'Берлин', 'Евро']
    ]

    let t = '';

    for (let i = 0; i < countries.length; i++) {
      for (let k = 0; k < countries[i].length; k++) {
        t += countries[i][k] + ' '
      }
      t += '<br />'
    }

    out.innerHTML = t

Пример с `for ... of`, также сортируем по алфавиту:

    countries.sort()

    for (const arr of countries) {
      arr.sort()
      for (const item of arr) {
        console.log( item );
      }
    }
