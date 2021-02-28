# Работаем с атрибутами

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
Получить массив `NamedNodeMap` атрибутов элемента

    a = document.getElementById('a')
    console.log(a.attributes)

## attributes[0]
Получить имя первого атрибуа в массиве и его значение

    a = document.getElementById('a')
    console.log(a.attributes[0])

## attributes['id']
Получить имя атрибуа и его значение, по имени атрибута

    a = document.getElementById('a')
    console.log(a.attributes['id'])

## attributes[0].nodeValue
Получить значение первого атрибута в массиве

    a = document.getElementById('a')
    console.log(a.attributes[0].nodeValue)

## value
Получить значение атрибута value (например текстового поля)

    text = document.getElementById('text')
    console.log(text.value)

Заменить значение атрибута value (например текстового поля)

    text = document.getElementById('text')
    text.value = 'by'

## Пример
Заменяем текст ссылки на адрес ссылки

    var a = document.querySelector('a')
    a.textContent = a.href;
