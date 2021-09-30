# Math
Объект Math - работаем с числами. С помощью данного объекта можно решать различные задачи по математике, геометрии, физики и т.д.

Объект Math - позволяет решать следующие задачи: округление, случайные числа, максимум и минимум, возведение в степень и корни, тригонометрия, логарифмы.

## Math.random()
Math.random() - получить рандомное число от 0 до 1.

    console.log(Math.random())

    // округляем рандомное число
    console.log(Math.floor(Math.random() * 10))

Получаем случайное число от 0 до 2:

    Math.floor( Math.random() * 3 )

## Math.round()
Нормальное округление.

## Math.floor()
Math.floor() - округление чисел вниз.

    var num = 3.2
    var num_floor = Math.floor(num) // 3 обычное округление

    console.log(num_floor)

## Math.ceil()
Math.ceil() - округление чисел вверх.

    var num = 3.2
    var num_ceil = Math.ceil(num) // 4

    console.log(num_ceil)

## Math.E

    console.log(Math.E) // экспонента
