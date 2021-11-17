# join()
- join() - объединяет элементы массива и превращает его в строку
- не изменяет исходный массив
- принимает параметры

Пример без параметров:

    const arr = [ 'H', 'e', 'l', 'l', 'o' ]
    const arrStr = arr.join()

    console.log(arrStr) // H,e,l,l,o

Параметр - строка без пробела:

    const arr = [ 'H', 'e', 'l', 'l', 'o' ]
    const arrStr = arr.join('')

    console.log(arrStr) // Hello