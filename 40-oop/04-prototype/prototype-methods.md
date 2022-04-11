# Методы прототипов
Современные методы работы с прототипами, вместо `__proto__`.

    Object.create() - создает объект, прототип помещаем в скобки
    Object.getPrototypeOf() - показывает прототип объекта
    Object.setPrototypeOf() - меняет прототип объекта

    Object.create(null) - создание простейшего объекта, без прототипа, на его основе можно делать правильные ассоциативнеы массивы

Создание полного клона со всеми дескрипторами:

    const clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))

## Методы

    Object.keys(ob) - возвращает массив ключей
    Object.values(ob) - возвращает массив значений
    Object.entries(ob) - возвращает массив пар ключ-значение
    Object.getOwnPropertySymbols(ob) - возвращает массив символьных ключей
    Object.getOwnPropertyNames(ob) - возвращает массив строковых ключей
    Reflect.ownKeys(ob) - возвращает массив ключей
    ob.hasOwnProperty(key) - возвращает true если у ob есть ключ с именем key

Тут рассматриваются собственные ключи/значения и т.д., а не унаследованные.

Унаследованные можно получить через цикл `for ... in`.

## Разное
`__proto__` - это геттер/сеттер для свойства `[[Prototype]]`. Находится `__proto__` в объекте `Object.prototype`.
