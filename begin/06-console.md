# Консоль
Работаем с `console.log()` в JavaScript. При запуске интерпретатора JavaScript, в глобальной области видимости автоматически создаются некоторые объекты, в том числе объект console.

При создании скриптов на JavaScript, постоянно приходится работать с консолью браузера и командой `console.log()`, чтобы проверять данные, выявлять ошибки. Поэтому сразу изучим их.

    console.log( 'hello' )                    // hello
    console.log( 3 + 5 )                      // 8
    console.log( window )                     // или просто window, в консоли
    console.log( 'Всем \nПривет!' )           // перевод строки
    console.log( `Привет ${username}` )       // косые кавычки, бэктики
    console.log( var1, var2 )                 // несколько аргументов через запятую
    console.log( +key + 1 + ': ' + arr[key] ) // вывод в цикле for in

Чтобы очистить консоль, нужно нажать по кнопке `Очистить вывод веб-консоли`.

## console.table();
С помощью `console.table(arr)` удобно выводить табличные данные, например массивы.

    const arr = [ 'Берлин', 'Москва', 'Пекин' ]
    console.table(arr)

## Посмотреть свойства элемента
- Кликаем правой кнопкой мыши по тегу на странице
- Жмём по строке `Исследовать`
- Кликаем правой кнопкой мыши по тегу в коде
- Жмём по строке `Показать свойства DOM`
- Переходим во вкладку `Консоль`

Также можно посмотреть свойства элемента, поместив его в console.log(elem) или console.dir(elem).

    let head = document.getElementById( "head" );
    console.dir( head );

## Проверяем сколько времени выполняется код

    console.time('q')
    for (let i = 0; i < 1000000000; i++) {
      let a = i / i
    }
    console.timeEnd('q')

## Методы объекта console
- `console.warn(object)` - аналог console.log(), но текст выводится на желтом фоне;
- `console.error(object)` - аналог console.log(), но текст выводится на красном фоне. Обычно используется для вывода объектов с сообщениями об ошибках;
- `console.assert(expression, object)` - если значением выражения (expression) является false, то сообщение (message) выводится в консоли с трассировкой стека;
- `console.trace()` - вывод трассировки стека;
- `console.count(label)` - вывод количества вызовов метода с данным именем (label);
- `console.dir(object)` - вывод всех свойств объекта в виде разворачивающегося древовидного списка;
- `console.group()` - создает новую группу с заданным именем. Все последующие сообщения в консоли выводятся под этим заголовком и с отступом, так что кажутся логически связанными частями одного раздела. Чтобы закрыть группу, используется метод console.groupEnd();
- `console.time(label)` - запускает таймер с заданным названием (label);
- `console.timeEnd(label)` - останавливает таймер с заданным названием (label) и выводит истекшее время;

## Написать код в консоли
В консоли можно написать код JavaScript и выполнить его.
- `F12` - введите код в консоли и нажмите `Энтер`
- если хотите выполнить несколько строк, нажимайте `Шифт + Энтер`
- если хоите повторить выполнение кода который уже вводили нажмите стрелку вверх
- если вы создали переменную через let или const, то еще раз создать такую же переменную в консоли не получится, введите location.reload() или просто обновите страницу или заключайте код в фигурные скобки `{ }` 
