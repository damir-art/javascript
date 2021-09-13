# Прототипы
JavaScript - прототипный язык программирования. Всё построено на прототипах определенных объектов.

Прототип - это объект, он является чем-то вроде класса для объектов.

Конечным прототипом всех объектов является `Object.prototype`.

    Object.prototype - самый главный прототип
        Number.prototype - прототип обертки числа
        String.prototype - прототип обертки строки
        ...

    Object - функция-конструктор
    prototype - объект

    __proto__ // ссылка на прототип родителя, есть у любого объекта

    console.log(car) // см. __proto__: Object

Свойства `toString` и `valueOf` есть у каждого объекта, поскольку они являются свойствами прототипа.

## Смотрим в консоли прототип
    const car = {
        brand: 'BMW',
        model: '325i',
        year:  2002,
        color: 'green',
        "doors": 4      // ключ может быть в кавычках
    }

    console.log(car)       // { brand: "BMW", model: "325i", year: 2002, color: "green", doors: 4 }

Если мы в консоли развернём, показанный объект, то (в браузере Firefox) внутри него будет хранится строка `<prototype>: Object { … }` это и есть прототип.

`__proto__: Object` (в браузере Chrome), `<prototype>: Object { … }` (в браузере Firefox) это геттер сеттер, для объекта прототипа.

## Object
**Object** &ndash; глобальный объект JavaScript, основа для всех объектов, самый верхний "класс" (функция-конструктор).

Введем в консоли `Object`:
    
    Object // ƒ Object() { [native code] }

### Object.prototype
**Object.prototype** &ndash; прототип общего класса Object (самый верхний прототип). Прототип есть у любого объекта, прототип - это объект.

    Object.prototype // главный прототип
    имя_объекта.__proto__ // например car.__proto__

На этом построено всё наследование объектов в JavaScript:

    car.__proto__ // в нашем примере ссылается на Object.prototype
    car.__proto__ === Object.prototype // вернет true

Если создать массив, то данный массив через `__proto__` будет иметь методы Array и методы Object. Объект `Array` через `__proto__` имеет методы `Object`.

    const arr = [1, 2, 3]
    arr.toString() // 1,2,3

Вводим в консоли `arr`, там есть `length` (берётся из прототипа Array) и `__proto__` с методами массива, в конце списка методов, есть `__proto__` ссылающееся на `Object`.

При создании любого объекта, его прототип, например у `car.__proto__` наследуется от `Object.prototype`

## Наследование от прототипа
`__proto__: Object` используем методы которые не задавали при создании объекта. Проверяем свойства на наличие, через метод `hasOwnProperty()`:

    car.hasOwnProperty('age')  // false
    car.hasOwnProperty('name') // true

`car.hasOwnProperty()` и другие, например `car.toString()` - это методы родительского объекта в нашем случае `Object`.

## Копирование объекта ES2015
Раньше скопировать объект можно было только через JSON.

### Object.assign
Копирует все свойства (но не прототип) в объект, переданный первым аргументом из объектов переданных вторым, третьим и последующими аргументами.