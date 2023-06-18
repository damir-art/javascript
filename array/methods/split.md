# split()
Есть противоположный ему метод `join()` который из массива делает строку.

- split() разбивает строку и превращает её в массив
- используется для того чтобы обработать получаемые строки
- не изменяет исходную строку
- использует параметры
- в качестве параметра может принимать регулярное выражение

Пример без параметров:

    const str = 'Hello World!'
    const strArr = str.split()

    console.log(strArr) // [ "Hello World!" ]

Параметр - строка без пробела:

    const str = 'Hello World!'
    const strArr = str.split('') // без пробела

    console.log(strArr) // [ "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!" ]

Параметр - строка с пробелом (разбиение строки по словам):

    const str = 'Hello World!'
    const strArr = str.split(' ') // с пробелом

    console.log(strArr) // [ "Hello", "World!" ]

Параметр с количеством возвращаемых элементов:

    const str = 'Hello World!'
    const strArr = str.split('', 3) // без пробела и числом 3

    console.log(strArr) // [ "H", "e", "l" ]
