# Типы данных
В переменной хранится то или иное значение, каждое значение имеет свой тип данных, например: число, строка, массив, объект и т.д. Типы данных делятся на примитивные и сложные.

Значения, у переменных могут быть строками, целыми числами, числами с плавающей точкой и т.д.

    let a = 'Привет' // 'string' - строка
    let b = 5        // 'number' - целое число
    let c = 5.3      // 'float'  - число с плавающей точкой (покажет number через typeof)

## typeof
typeof - оператор, который показывает какой тип данных хранит переменная.

    let a = 'apple'
    console.log(typeof a) // 'string'

## Категории типы данных
Типы данных в JavaScript делятся на две категории: простые (примитивные) и сложные (комплексные):
- `Простые` (примитивные) - это number, string, boolean, служебные (null, undefined),
- `Сложные` (комплексные) - это object, array, function.

## Разное
В JavaScript имеется 8 основных типов данных:
- number - целые, вещественные (с плавающей точкой)
- bigint - большие числа
- string
- boolean
- null
- undefined
- object
- symbol

JavaScript - динамически типизированный язык программирования
