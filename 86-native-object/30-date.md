# Объект Date
Работаем с датой и временем в JavaScript.

**Date** - встроенный объект, содержащий дату и время, предоставляет методы для управления ими.
**timestamp** - целое число в миллисекундах прошедшее с 1 января 1970 года. До этого числа все таймстампы отрицательные (см. ниже).

## Создание Date
Создать объект `Date` с текущими датой и временем:

    let now = new Date()
    console.log(now) // Date Tue Feb 15 2022 11:28:24 GMT+0300 (Москва, стандартное время)

Показать дату `1 января 1970 года UTC + 0`

    let now = new Date(0)
    console.log(now) // Date Thu Jan 01 1970 03:00:00 GMT+0300 (Москва, стандартное время)

Показать дату `2 января 1970 года UTC + 0`

    let now = new Date(24 * 3600 * 1000)
    console.log(now)

Показать дату `31 декабря 1969 года UTC + 0`

    let now = new Date(-24 * 3600 * 1000)
    console.log(now)

## Аргумент строка `Date(str)`
Когда аргумент строка, то JS из неё пытается прочитать дату:

    let date = new Date("2015-01-25")
    console.log(date) // Sun Jan 25 2015 03:00:00 GMT+0300 (Москва, стандартное время)

## new Date(year, month, date, hours, minutes, seconds, ms)
year, month - обязательны.

    year  - 4 цифры
    month - начинается с 0
    date  - день месяца, 1 по умолчанию
    hours, minutes, seconds, ms - 0 по умолчанию

## `get` Date (получение даты и времени)

    let date = new Date()
    console.log(date)
    console.log(date.getFullYear())   // получить текущее значение года
    console.log(date.getMonth())      // получить текущее значение месяца начиная с 0
    console.log(date.getDate())       // получить текущее значение дня месяца
    console.log(date.getHours())      // получить текущее значение часа
    console.log(date.getMinutes())    // получить текущее значение минут
    console.log(date.getSeconds())    // получить текущее значение секунд
    console.log(date.Milliseconds())  // получить текущее значение секунд

День недели:

    console.log(date.getDay ()) // Получаем день недели 0 воскресенье, 6 суббота

UTC+0 (лондонское время без перехода на летнее):

    getUTCFullYear(), getUTCMonth() getUTCDay() // показать год месяц день по UTC+0

    getTimezoneOffset() // возвращает разницу между UTC+0 и местным часовым поясом, в минутах

Timestamp:

    // получить текущую метку времени
    console.log(Date.now())         // получить дату и время в милисекундах (timestamp) с 01.01.1970, set не влияет

    console.log(date.getTime())     // получить дату и время в милисекундах (timestamp) с 01.01.1970, можно получить для заданной даты

    let date = new Date() // преобразуем в число
    console.log(+date) // 1645012308076

    Date.parse('строка в определенном формате') // парсит строку и выдает timestamp

## `set` Date (установка даты и времени)
Для любого get, есть свой set:

    console.log(date.setDate(13))   // задать текущее значение дня месяца в милисекундах (timestamp)
    console.log(date.getDate())     // получить текущее значение дня месяца

## Разное
- для работы с датой и временем, можно использовать библиотеку `moment.js` или `luxon.js`
- автоисправление дат Date(2001, 2, 32) // покажет первое апреля
- `Date.now()` используетс когда нужно измерить время, например при разработке игр
