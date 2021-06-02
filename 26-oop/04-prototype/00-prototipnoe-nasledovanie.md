# Прототипное наследование

## Наследуем свойства
Создадим объект `car` у которого будет три свойства: `brand`, `model`, `year`. Создадим второй объект который прототипно наследует все свойства первого.

    const car = {
        brand: 'BMW',
        model: '325i',
        year:  2002
    }

    const carColor = {
        __proto__: car, // наследуем своства car через прототип
        color: 'green'
    }

    console.log(car)            // Object { brand: "BMW", model: "325i", year: 2002 }
    console.log(carColor)       // Object { color: "green" }
    console.log(carColor.brand) // BMW

- `Object { color: "green" }`, раскрываем объект в консоли, там через прототип доступны свойства `car`
- `carColor.brand`, сначала свойства ищутся в самом объекте, потом в прототипах
- `carColor.brand = 'audi'` в `carColor` добавится новое свойство, в `car` останется прежним

## Наследуем методы
Методы через прототип `__proto__` тоже наследуются:

    const car = {
        brand: 'BMW',
        model: '325i',
        year:  2002,
        showBrand: function() {
            return this.brand
        }
    }

    const carColor = {
        __proto__: car,
        color: 'green'
    }

    console.log(car.showBrand())      // BMW
    console.log(carColor.showBrand()) // BMW

Можно изменить значение `brand` в `carColor` и `this` правильно определит к какому `brand` обращаться:

    carColor.brand = 'audi'
    console.log(car.showBrand())      // BMW
    console.log(carColor.showBrand()) // Audi

## Разное
- можно содать цепочку наследования, например создать еще один объект `carColorDoors` который через прототип будет наследоваться от `carColor`
- `carColorDoors` будет иметь все свойства и методы своих предков `carColor` и `car`
- `Прототип` - основной объект, родитель
- `car` - прототип для `carColor`
- `carColor` - прототип для `carColorDoors`
- прототипом может выступать только лишь объект
- `__proto__` - это геттер и сеттер для работы с прототипами
