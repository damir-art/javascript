# Работаем с атрибутами
Почти все названия HTML-атрибутов совпадают с названиями свойств DOM-элементов.  
Атрибуты - это то, что написано в HTML.  
Свойства - это то, что находится в DOM-объектах.

- el.hasAttribute('att')          - проверяет наличие атрибута,
- el.getAttribute('att')          - получает значение атрибута,
- el.setAttribute('att', 'value') - устанавливает значение атрибута,
- el.removeAttribute('href')      - удаляет атрибут,
- el.attributes                   - получить все атрибуты элемента с именами и значениями в виде массива.

Пример:

    let a = document.querySelector("a");
    console.log(a.attributes); // NamedNodeMap(3) [ href="http://ya.ru", target="_blank", rel="noopener noreferrer" ];

## getAttribute()
Получить значение атрибута:

    a = document.getElementById('a')
    console.log(a.getAttribute('href'))

## setAttribute()
Изменить значение атрибута, создать атрибут:

    a = document.getElementById('a')
    a.setAttribute('href', 'https://ya.ru')
    a.setAttribute('target', '_blank')
    a.setAttribute('data-n', 3)

## attributes
Получить массив `NamedNodeMap` атрибутов элемента:

    const a = document.getElementById('a')
    console.log(a.attributes)

Проходимся циклом по массиву:

    const link = document.querySelector('.link')

    for (let att of link.attributes) {
      console.log( `${att.name} = "${att.value}"` );
    }

## attributes[0]
Получить имя первого атрибуа в массиве и его значение:

    a = document.getElementById('a')
    console.log(a.attributes[0])

## attributes['id']
Получить имя атрибуа и его значение, по имени атрибута:

    a = document.getElementById('a')
    console.log(a.attributes['id'])

## attributes[0].nodeValue
Получить значение первого атрибута в массиве:

    a = document.getElementById('a')
    console.log(a.attributes[0].nodeValue)

## value
Получить значение атрибута value (например текстового поля)

    text = document.getElementById('text')
    console.log(text.value)

Заменить значение атрибута value (например текстового поля)

    text = document.getElementById('text')
    text.value = 'by'

## Разные названия атрибутов и свойств
Обычно названия атрибутов HTML-тега и названия свойств HTML-объекта совпадают, но не всегда, например:

    h1.getAttribute('class') // .head
    h1.className             // .head

    tabindex
    tabIndex // camelCase

    for     // например у тега label
    htmlFor

class, for - зарезервированные слова.

## Кастомные атрибуты/свойства
DOM-узлы это обычные объекты и мы можем в них добавлять свои собственные свойства:

Добавляем новое свойство в `body`:

    document.body.myAtt = {
      name: 'Ivan',
      age: 25
    }

Можем добавить даже метод:

    document.body.sayTagName = function() {
      console.log(this.tagName);
    }

Методы можно добавлять и в прототипы.

## Синхронизация изменений атрибутов и свойств
Когда меняется атрибут, автоматически изменяется и его DOM-свойство и наоборот. Но не всегда. Например если из DOM изменить `value` у `input` то атрибут не изменится. Менять нужно через `setAttribute`.

## Пример
Заменяем текст ссылки на адрес ссылки

    var a = document.querySelector('a')
    a.textContent = a.href;

## Разное
- DOM при парсинге, не добавляет нестандартные атрибуты,
- Также не добавляет стандартные атрибуты если они не стандартны для данного тега,
- Однако нестандарные атрибуты доступны через методы `...Attribute()`,
- Значение атрибута, всегда `строка`,
  - но некоторые значения DOM-свойствв могут быть `логическими`, например `checked` или объектами, например `style`
- DOM-свойство `href` всегда содержит абсолютный путь даже если в атрибуте записан относительный (чтобы получить относительный, используйте `getAttribute`).
