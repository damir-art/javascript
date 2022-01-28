# Методы примитивов
Каждый примитив имеет собственный объект-обёртку: `String`, `Number`, `Boolean`, `Symbol`.

## Примеры

Сделать буквы заглавными:

    const str = 'Hello'
    console.log(str.toUpperCase()) // HELLO

Оставить цифры после точки, округлить:

    const num = 1.23956
    console.log(num.toFixed(2)) // 1.24

## Разное
- у null, undefined отсутствуют объекты-обёртки