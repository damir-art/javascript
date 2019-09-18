# Базовый JavaScript

HTML - разметка, CSS - оформление, JavaScript - действие.<br />
Стандарт ECMA, ES5(2009), ES6(2015). Название - ECMAScript.

Console в браузере - это инструмент обращения к движку v8 внутри браузера. Внутри Console можем вводить любые команды:

    1 + 1
    alert('hello')
    console.log('hello')

## Внедряем JavaScript
Внедряем JavaScript в HTML страницу. Особенности внедрения в HEAD, BODY:

    <script>
        ... код
    </script>

Внедряем как отдельный файл (обычно JS принято внедрять перед закрывающим тегом body):

    <script src="custom.js">Текст для браузеров не поддерживающих JavaScript</script>

## Console
    console.log('hello')

* если вышла ошибка то кликните на файл js сбоку, вас перекинет на строку с ошибкой
