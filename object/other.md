# Разное
## Возврат объекта из функции
В реальных задачах обычно используют существующие переменные как значения для свойств с тем же именем:

    function createUser ( name, age, car ) {
      return {
        name: name,
        age: age,
        car: car
      }
    }

    const user = createUser('Иван', 27, true);
    console.log(user); // Object { name: "Иван", age: 27, car: true }

Сокращаем код. Если имена свойств и параметров совпадают то код можно сократить:

    function createUser ( name, age, car ) {
      return {
        name,
        age,
        car
      }
    }

# Object to primitive
Преобразование объектов в примитивы.

- в логическом контексте, все объекты равны `true`,
- в математическом контексте, объекты преобразуются в числа,
- в строковом контексте, объекты преобразуются в строки.

На практике обычно используют `user.toString()`:

    const user = {
      name: 'Ivan',

      toString() {
        return 2
      } 
    }

    console.log(user.toString()) // 2

## Способы использования объектов
- API (DOM, BOM, сеть и т.д.),
- Описание данных (JSON),
- Перечисление (группировка констант),
- Структура данных "ключ: значение".

## Перечисление (enumeration)
Перечисление (enumeration, группировка констант) - структура данных, которая используется для перечисления набора фиксированных значений. Список констант.

var Code = {
  SUCCESS: 200,
  CACHED: 302,
  NOT_FOUND_ERROR: 404,
  SERVER_ERROR: 500
};

Перечисление представляет собой список констант, объединенных, по одному признаку. Перечисления именуются с заглавной буквы, в единственном числе. Значения, записанные в перечисления именуются как обычные константы - только заглавными в snake_ase стиле.

## Словарь (dictionary, map, associative array)
Структура данных, которая используется для сопоставления одних значений другим. Представляет собой набор пар "ключ: значение". Позволяет делать множественный выбор.

- порядок элементов не имеет значения,
- одно и то же значение может встречаться сколько угодно раз,
- один и тот же ключ может встречаться только один раз,
- элементы можно добавлять/удалять/изменять,
- доступ к элементам производится по ключу.

## Object
Словарь вида ключ-значение, где ключами могут быть только строки, а значениями: данные любого типа.

    // мапирование
    var valueToAnotherValue = {
      'one': 'class--one',
      'two': 'class--two',
      'three': 'class--three'
    }

    valueToAnotherValue['one']

- данные могут изменяться динамически, при этом код, который использует словарь меняться не будет
- словарь можно хранить в базе данных, в локальном хранилище, получать его любым способом и передавать как данные
- в качестве ключей можно использовать не фиксированные строки, а переменные

Пример с ключем переменной и дефолтным значением:

    const obj = {
      'one' : 'class--one'
    }
    const key = 'one'
    console.log(obj[key]) // class--one
    console.log(obj[key] || 'default--class') // дефолтное значение, если такого ключа нет

## Именование словарей
- с использованием венгерской нотации (упоминания типа данных в названии переменной) `classListMap`,
- с использованием слова to (в) `stateToClassName`, ключToЗначение.

## Разное
- Один из способов сравнения объектов, это превращение их в JSON-строку, а затем сравнить эти строки.