# Hoisting (всплытие)
Всплытие переменных и функций

## Всплытие переменных
- Переменные `var` всплывают со значением `undefined`, если обратиться к ним до их инициализации
- Всплывают если обращение происходит в области видимости
- Переменные `let`, `const` не всплывают

Пример с переменной `var`:

    // Обращение в области видимости
    console.log(a) // undefined
    var a = 5

    // Обращение не в области видимости
    console.log(a) // a is not defined
    function setNumber() {
        var a = 5
    }
    setNumber()

Пример с переменными `let`, `const`:

    console.log(a) // can't access lexical declaration 'a' before initialization
    let a = 5

    console.log(a) // can't access lexical declaration 'a' before initialization
    const a = 5

## Всплытие функций
Декларативные функции всплывают при вызове, до объявления:

    // Вызов
    foo()

    // Объявление
    function foo() {
        console.log('Hello!');
    }

Анонимные функции не всплывают:

    foo()

    var foo = function() {
        console.log('Hello!');
    }
