# JSON
JSON - строковое представление JavaScript объекта. Для работы с JSON, в JavaScript используется объект JSON. Его основные методы:

    JSON.stringify() // преобразует JavaScript-объект, в валидный JSON-текст
    JSON.parse()     // преобразует JSON-текст в объект

# JSON
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

Работаем с JSON.

Преобразовываем сложные объекты в строку и переправляем их по сети или выводим для логирования.

Чтобы получить такую возможность, нужно записывать сложные объекты в специальную нотацию JSON. Многие языки понимают формат JSON и имеют методы для работы с ним. Поэтому можно передавать данные, например из JavaScript в PHP.

## Методы JSON
В JavaScript существует два метода для работы с JSON:
- `JSON.stringify()` - преобразование объекта в JSON (сериализация)
- `JSON.parse()` - преобразование JSON в объект

## JSON-формат
JSON-форматирование, сериализация объекта. Превращение объекта в JSON-формат, назывется сериализацией объекта. Сериализованный объект можно отправить по сети или поместить в хранилище.

Правила JSON-формата:
- строки (ключи, значения) нужно помещать в двойные кавычки,
- числовые, булевы, null - значения, в кавычки помещать не нужно,
- в JSON формат можно помещать объекты, массивы, примитивы,
- JSON пропускает функции (методы), символы и свойства содержащие `undefined`,
- если объекты ссылаются друг на друга то при образовании в JSON возникает ошибка,
- не поддерживает комментарии.

## JSON.stringify()
Преобразуем объект в формат JSON:

    const obj = {
      ...
    }

    const objJson = JSON.stringify(obj)

Схема JSON.stringify(value, [replacer, space]).

## JSON.parse()
Преобразуем сериализованный объект в обычный:

    JSON.parse(objJSON)

## Старая запись
Объект JSON - приводим объекты к строкам. Данные между web-приложениями, обычно перемещаются в виде строк.

    var person = {
      name: 'John',
      age: 18,
      job: 'Front-end',
      car: {
        brand: 'Ford',
        model: 'Mondeo'
      },
      friends: ['Katy', 'Peter', 'Tom']
    }

    console.log(person)
    console.log(JSON.stringify(person)) // объект в строку

    var person_string = JSON.stringify(person)
    console.log(JSON.parse(person_string)) // строку в объект

## Ссылки
- https://www.youtube.com/watch?v=3xaN1tDdkF4,
- Может понадобиться плагин JSONView.
