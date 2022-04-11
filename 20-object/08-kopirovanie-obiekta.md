# Копирование объекта, ссылки
Объекты - хранятся и копируются по ссылке. Простые типы копируются по значению.

Переменная чьим значением выступает объект, хранит ссылку на объект в памяти.

Перменные равны друг другу есди ссылаются на один и тот же объект (`==` и `===` работают одинаково).

## Копирование объекта
Если нам нужно скопировать объект (создать его клон) и не нужна ссылка, то можно воспользоваться циклом `for ... in` или методом `Object.assign()`. Редко возникает необходимость создания копии объекта.

    // скопируем все свойства user в user2
    for ( let key in user ) {
        user2[key] = user[key]
    }

    // скопируем все свойства user в user2
    let user2 = Object.assign( { } , user )

## Вложенное клонирование
А что если значение свойства объекта не примитив: `строка`, `число`, объект (при копировании такого свойства оно скопируется как ссылка)? В этом случае нужно сделать проверку, не является ли значение свойства объектом и при `true` произвести глубокое клонирование (рекурсия или библиотека lodash).

## Передача объекта
Передача значений существует 2х видов: передача по значению, передача по ссылке.

### Передача по значению (примитивы)
Значение копируется и не влияет на оригинал.

    const foo = function (val) {
        val += 2
        return val
    }

    const num = 2

    console.log(foo(num)) // 4
    console.log(num)      // 2

    // Оригинал num не изменился

### Передача по ссылке (сложные)
Передается ссылка на оригинал, при изменении, меняется и оригинал.

    const foo = function (val) {
        val.prop += 2
        return val.prop
    }

    const obj = { prop: 2 }

    console.log(foo(obj)) // 4
    console.log(obj.prop) // 4

    // Оригинал obj изменился

Указатели:

    var foo = { prop : 1 }
    var bar = foo
    foo.prop = 2

    console.log(bar.prop) // 2

    foo = null // в этом случае объект не удалится, ибо foo это всего лишь указатель
    // удалится указатель на объект

    console.log(foo.prop) // null
    console.log(bar.prop) // 2