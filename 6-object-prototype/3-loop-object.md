# Итерация ключей объекта
Разберем два способа, для получения всех ключей объекта.

Создаём объект:

    var ford = {
        brand: 'Ford',
        model: 'Focus',
        year: 1999
    }

## for in
Получаем поля объекта и его прототипа:

    for (var key in ford) {
        console.log(key + ': ' + ford[key])
    }

    key       // получаем имя свойства
    ford[key] // получаем значение свойства

## Object.keys()
**Рекомендуемый.** Получаем поля объекта, но не прототипа:

    // возвращает массив ключей объекта
    var keys = Object.keys(ford)
    console.log(keys)

    // обрабатываем каждый элемент массива
    Object.keys(ford).forEach(function(key) { 
        console.log(key + ': ' + ford[key])
    })
