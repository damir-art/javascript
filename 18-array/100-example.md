# Примеры
Примеры работы с массивами

- min/max element
- sum elements

## min/max element
Находим минимальный или максимальный элементы массива:

    let numArr = [2, 0, 4, 12, 7, 9]
    let max = numArr[0]

    for(let i = 0; i < numArr.length; i++) {
        if ( max < numArr[i] ) { // max > numArr[i] для минимального
            max = numArr[i]
        }
    }

    console.log(max)

## sum elements
Вычисляем сумму элементов:

    let numArr = [8, 1, 4, 12, 7, 0]
    let sum = 0

    for(let i = 0; i < numArr.length; i++) {
        sum += numArr[i]
    }

    console.log(sum)
