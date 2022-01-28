# Math
Объект Math - работаем с числами. С помощью данного объекта можно решать различные задачи по математике, геометрии, физики и т.д.

Объект Math - позволяет решать следующие задачи: округление, случайные числа, максимум и минимум, возведение в степень и корни, тригонометрия, логарифмы.

## Math.random() - получить случайное число
Math.random() - получить случайное число от 0 до 1 (не включая единицу)).

    console.log(Math.random()) // 0.6968064196851498

Получаем случайное число от 0 до 10:

    console.log(Math.floor(Math.random() * 10))

Получаем случайное число от 0 до 2:

    Math.floor( Math.random() * 3 )

## Получить max/min число

    Math.max(2, 4, 1, 5, 3) // 5
    Math.min(2, 4, 1, 5, 3) // 1

## Возведение в степень
Два в восьмой степени:

    Math.pow(2, 8) // 256

## Округление до целого числа
### Math.round()
Нормальное округление. Округление до ближайшего целого.

    const num = 5.5
    console.log(Math.round(num)) // 6

    const num2 = -5.5
    console.log(Math.round(num2)) // -5

### Math.floor()
Math.floor() - округление чисел вниз.

    const num = 3.7
    console.log(Math.floor(num)) // 3
    
    const num = -1.1
    console.log(Math.floor(num)) // -2

### Math.ceil()
Math.ceil() - округление чисел вверх.

    const num = 3.1
    console.log(Math.ceil(num)) // 4

    const num = -1.7
    console.log(Math.ceil(num)) // -1

## Округление до дробного числа
Окруляем до 2х знаков после запятой:

    const num = 1.2345
    console.log(Math.round(num * 100) / 100) // 1.23

Метод `toFixed(n)`:

    const num = 1.2345
    console.log(num.toFixed(2)) // "1.23" строка

Переводим строку в число через `+` или `Number()`.

## Math.E

    console.log(Math.E) // экспонента
