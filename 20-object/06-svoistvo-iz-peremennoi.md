# Свойство из переменной
Возврат объекта из функции. В реальных задачах обычно используют существующие переменные как значения для свойств с тем же именем:

    function createUser (name, age, car) {
        return {
            name: name,
            age: age,
            car: car
        }
    }

    const user = createUser('Иван', 27, true)

    console.log(user.name) // Иван

## Сокращаем код
Если имена свойств и параметров совпадают то код можно сократить:

    function createUser (name, age, car) {
        return {
            name,
            age,
            car
        }
    }
