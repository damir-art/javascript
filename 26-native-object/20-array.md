# Array

Массив пустой но его длина равна 4.

    const arr = new Array(4)  // создать массив
    console.log( arr.length ) // 4

    const arr = new Array(4)  // создать массив
    console.log( arr )        // [ <4 empty slots> ]
    console.log( arr.length ) // 4

    arr.fill(null)            // заполнить массив
    console.log( arr )        // [ null, null, null, null ]

Заполняем массив объектами:

    const createPeople = () => {
        return {
            name: 'Петя',
            lastname: 'Петров',
            age: 27,
            programmer: true,

        }
    }

    const arr = new Array(4).fill(null).map(() => createPeople()) // [ {…}, {…}, {…}, {…} ]

    console.log( arr )

## Разное

    // создаём массив
    var array = [ 1, 2, 3 ]
    console.log(array)
    console.log(array[0])

    // строка
    var str = '1,2,3,4,5,6,7,8'

    // создаём массив из строки
    var array = str.split(',')
    console.log(array)

    // создаём строку из массива
    console.log(array.join('|'))

    // меняем порядок элементов в массиве
    console.log(array.reverse())

    // splice - метод с большим функционалом
    // обрезка массива со 2-го индекса удалить 3 элемента
    console.log(array.splice(2,3))

    // удалили/не удалили второй элемент и заменили его словом
    // можно заменить несколькими элементами
    array.splice(1, 1, 'ку')
    array.splice(1, 0, 'ку')
    console.log(array)

    // создаём копию массива
    var new_array = array.concat([3,4])
    console.log(new_array)

    // ищем в массиве где элементы это объекты
    var JSON_array = [
        {name: 'John', age: 18},
        {name: 'Katy', age: 21},
        {name: 'Fedor', age: 26}
    ]

    var found_person = JSON_array.find(function(person) {
        // console.log(person)
        return person.age === 21
    })

    console.log(found_person.name)

    // фильтруем массив, получаем массив
    var odd_array = [1,2,3,4,5,6,7,8].filter(function(i) {
        return i % 2 !== 0
    })

    console.log(odd_array) // список нечетных цифр
    
    // map() - возвращает новый массив, с каждым элементом можно что-то делать
    var array = ['1','2','3','4','5','6','7','8']
    var num_array = array.map(function(i) {
        // превращаем каждый элемент массива в число
        return parseInt(i)
    })
    console.log(num_array)
