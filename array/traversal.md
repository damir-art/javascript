# Обход массива
Обход массива циклом.

## for
Классический вариант, наиболее быстрый:

    const cities = ['Москва', 'Пекин', 'Лондон', 'Берлин', 'Вашингтон', 'Париж']

    for (let i = 0; i < cities.length; i++) {
      console.log(cities[i])
    }

Может работать с HTML-коллекцией (HTMLCollection, полученный от getElementsByTagName()).  
Может работать со списком узлов (NodeList, полученный от querySelectorAll()).

## for in
key - выводит индексы, имена ключей:

    const cities = ['Москва', 'Пекин', 'Лондон', 'Берлин', 'Вашингтон', 'Париж'];

    for (let key in cities) {
      console.log(+key + 1 + ': ' + cities[key])
    }

Не может работать с HTML-коллекцией (HTMLCollection, полученный от getElementsByTagName()).  
Не может работать со списком узлов (NodeList, полученный от querySelectorAll()).  
Не рекомендуется для массивов, медленный.

## for of
item - выводит значения (нет доступа к индексам), наиболее популярный и удобный цикл.

    for (let item of cities) {
      console.log(item)
    }

Может работать с HTML-коллекцией (HTMLCollection, полученный от getElementsByTagName()).  
Может работать со списком узлов (NodeList, полученный от querySelectorAll()).
