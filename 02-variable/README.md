# Переменные

- Что такое переменная
- Имена переменных
- Константы
- Разница между `var`, `let`, `const`

## Блочная область видимости
Видимость переменных `var`, `let`, `const` в блоке:

    {
        var a   = "a"
        let b   = "b"
        const c = "c"
    }

    console.log(a) // a
    console.log(b) // b is not defined
    console.log(c) // c is not defined
