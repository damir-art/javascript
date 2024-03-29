# Поиск подстроки

`indexOf(substr)` указываем какую подстроку искать:

    const str = 'Ищем подстроку в строке с помощью JavaScript!'

    console.log( str.indexOf('под') ) // 5 , с какой позиции начианется подстрока
    console.log( str.indexOf('над') ) // -1 , подстрока не найдена

`indexOf(substr, pos)` ищем подстроку с определённой позиции:

    console.log( str.indexOf('стр') )    // 8 , с какой позиции начинается первый 'стр'
    console.log( str.indexOf('стр', 9) ) // 17 , с какой позиции начинается второй 'стр'

- `indexOf` чувствителен к регистру
- показывает позицию первой попавшейся подстроки
- чтобы найти позиции всех подстрок, нужно воспользоваться циклом
- `str.lastIndexOf(substr, pos)` ищет с конца

## includes
Современный способ проверки есть ли подстрока, позицию не показывает. Возвращает `true` если в строке, наудена подстрока, если не найдена, то `false`.

    const str = 'Ищем подстроку в строке с помощью JavaScript!'
    console.log(str.includes('под')) // true

- str.includes('под', 5) // ищем с 5-й позиции
- str.startsWith('Ищ')   // проверяет начинается ли строка с данной подстроки
- str.endsWith('ipt!')   // проверяет заканчивается ли строка данной подстрокой
