# Примеры
Примеры работы с массивами

- min/max element
- sum elements
- array event for

## min/max element
Находим минимальное или максимальное значение элемента массива:

    const arr = [2, 0, 4, 12, 7, 9]

    const getMaxElem = function (arr) {
        let maxElement = arr[0]
        for(let i = 0; i < arr.length; i++) {
            if ( arr[i] > maxElement ) {
                maxElement = arr[i]
            }
        }
        return maxElement
    }

    console.log(getMaxElem(arr))

Знак больше: наибольшее значение, знак меньше: наименьшее значение.

## sum elements
Вычисляем сумму элементов:

    let numArr = [8, 1, 4, 12, 7, 0]
    let sum = 0

    for(let i = 0; i < numArr.length; i++) {
        sum += numArr[i]
    }

    console.log(sum)

# array, event, for
Присваиваем событие элементам массива, через цикл for

    for ( ... ) {
        div[i].onclick = foo
    }

    function foo () {
        ...
    }
