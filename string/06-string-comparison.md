# Сравнение строк
Строки сравниваются посимвольно в алфавитном порядке.

- строчные буквы больше заглавных `'a' > 'A'`
- строки кодируются в `UTF-16`, у любого символа есть соответсвующий код
- символы сравниваются по их кодам

## codePointAt(pos)
Вычисляем код символа:

    const str = 'Hello'
    console.log(str.codePointAt(0)) // код символа 'H' равен 72
    console.log(str.codePointAt(1)) // код символа 'e' равен 101

## fromCodePoint(code)
Создаём символ по его коду:

    console.log(String.fromCodePoint(72)) // H

Латиница, спецсимволы, диакритические знаки от 65 до 220.

## Юникод
Создаём символ по его юникоду:

    console.log('\u0048') // H

## localeCompare()
Правильное сравнение строк. Схема `str.localeCompare(str2)`. Под правильным тут подразумевается чтобы например слова начинающиеся с `Ö` в алфавитном порядке стояли выше чем начинающиеся с `Z`, даже не смотря на то что код у `Ö` больше чем у `Z`.

    str  = 'A'
    str2 = 'B'
    console.log(str.localeCompare(str2)) // -1 (str меньше str2)

    str  = 'B'
    str2 = 'A'
    console.log(str.localeCompare(str2)) // 1 (str больше str2)

    str  = 'A'
    str2 = 'A'
    console.log(str.localeCompare(str2)) // 0 (str равен str2)
