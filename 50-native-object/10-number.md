# Числа
## Числа в JavaScript

Числа в JavaScript, бывают:

    let a = 5   // целое число
    let b = 2.7 // число с плавающей точкой

NaN &ndash; не число, получается если произвести арифметическую операцию с не числом

    let a = 'Hello' * 2
    console.log(a) // NaN

Infinity &ndash; бесконечность, получается разделив любое число на 0

    let a = 12 / 0
    console.log(a) // Infinity