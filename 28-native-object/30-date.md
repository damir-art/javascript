# Объект Date
Работаем с датой и временем в JavaScript.

    let now = new Date();
    console.log(now); // Thu Dec 07 2016 16:03:53 GMT+0400 (+04)

Создаём объект Date:

    var date = new Date()
    console.log(date)               // Date Mon Aug 12 2019 07:52:55 GMT+0300 (Москва, стандартное время)

    console.log(date.getSeconds())  // получить текущее значение секунд

    console.log(date.getFullYear()) // получить текущее значение года

    console.log(date.getDate())     // получить текущее значение дня месяца

    console.log(date.getMonth())    // получить текущее значение месяца начиная с 0

Для любого get, есть свой set:

    console.log(date.setDate(13))   // задать текущее значение дня месяца в милисекундах (timestamp)
    console.log(date.getDate())     // получить текущее значение дня месяца

UTC:

    console.log(date.getUTCDate())  // получить текущее значение дня месяца (timezone 0)

Timestamp:

    console.log(date.getTime())     // получить дату и время в милисекундах (timestamp) с 01.01.1970
    console.log(Date.now())         // получить дату и время в милисекундах (timestamp) с 01.01.1970, set не влияет
    
## Получаем нужную дату
    var date = new Date(60 * 60 * 24 * 1000)
    console.log(date) // Date Fri Jan 02 1970 03:00:00 GMT+0300 (Москва, стандартное время)

## Разное
Обычно используют библиотеку `moment.js`.