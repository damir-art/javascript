# Встроенные прототипы
В этом уроке, мы рассмотрим как с помощью свойства `prototype` добавить новую функциональность встроеным объектам JavaScript.

    const ob = { }
    console.log(ob) // Object { }

`ob = { }` аналогичен `ob = new Object()`

- `Object` - встроенная функция конструктор,
- `Object.prototype` - объект с большим количеством встроенных методов и свойств,
- у `ob` есть доступ к `Object.prototype`.

## Object()
Поэтому пустой объект имеет свойство `ob.toString()`.

    ob.toString() // [ object Object ]
    ob.__proto__ == Object.prototype // true
    ob.toString == ob.__proto__.toString == Object.prototype.toString // true

`[[Prototype]]` у `Object.prototype` уже отсутствует и равен `null`.

    Object.prototype.__proto__ // null

## Array(), Date(), Function() и др.

    const arr = []

    arr.__proto__                     == Array.prototype  // true
    arr.__proto__.__proto__           == Object.prototype // true
    arr.__proto__.__proto__.__proto__ == null             // true

## Разное
- функция - это объект встроенного конструктора Function,
- null, undefined - не имеют прототипов,
- в прототипы встроенных объектов можно добавлять свои свойства и методы, но это не рекомендуется, за исключением создания полифилов.
