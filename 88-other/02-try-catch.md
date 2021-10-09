# Исключения try catch
Почему лучше использовать `try catch` вместо `throw`:

- по виду функции непонятно бросит она исключение или нет
- `throw` ломает скрипт и прерывает исполнение программы
- надо явно обрабатывать исключение, если возможен неверный пользовательский ввод

Пример создания и срабатывания исключения `try catch`:

    var cities = ['Moscow', 'Pekin', 'Paris', 'London']

    var getCityName = function (index) {
        var city = cities[index]

        return city.toLocaleLowerCase()
    }

    try {
        console.log(getCityName(0))
        console.log(getCityName(4))
    } catch(error) {
        console.log('Произошла ошибка: ' + error.message) // Произошла ошибка: city is undefined
    }

Любой код который может бросить исключение оборачивайте в `try`, если исключение произошло то срабатывает блок `catch`, куда передастся ошибка в виде параметра `error`.
