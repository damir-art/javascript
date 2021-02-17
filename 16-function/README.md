# Функции

- Создание функции (Function Declaration)
- Вызов функции
- Параметры и аргументы функции
- Значения параметров по-умолчанию
- Локальные переменные и функции
- return
- Анонимные функции (Function Expression)
- Область видимости и всплытие (переменных и функций)
- Closure (замыкание)
- Рекурсия
- IIFE
- callback
- arguments
- Разное

## Что такое функция

**Функция** - это фрагмент программного кода, к которому можно обратиться из другого места программы по его имени. Функции позволяют избежать дублирования одинаковых блоков кода. Функция это способ повторного использования кода. Функция это способ организации кода.

- Если мы создаем функцию то она принадлежит объекту `window`.

Пример

    function hello() {
        return 'Hi'
    }

    console.log(window.hello)   // ƒ hello() { return 'Hi' }
    console.log(window.hello()) // Hi

- Обычно функция принимает какое-либо значение (параметр), с которым производятся какие-либо манипуляции, а затем возвращает `return` полученный результат
- Подпрограмма, процедура - это функция, которая возвращает пустое значение.
- Метод log() - принимает текст, выводит текст в консоль, ничего не возвращает.
- Процесс создания приложения не всегда прост и очевиден. В большинстве случаев проще нарисовать блок-схему, а затем перенести его части в различные функции.

## Наименование функций
    get    - получить
    set    - задать, установить
    update - изменить
    is     - проверить
    create - создать

    getElement
    get_element