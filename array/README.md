# Массивы в JavaScript

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

    // метод map() - превращаем каждый элемент массива в число
    // map() - возвращает новый массив, с каждым элементом можно что-то делать
    var array = ['1','2','3','4','5','6','7','8']
    var num_array = array.map(function(i) {
        return parseInt(i)
    })
    console.log(num_array)
