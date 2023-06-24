# Прототипы
Прототипы в JS это аналоги классов, с помощью прототипов можно расширять наши объекты, подключая к ним дополнительные свойства и методы.  
У объектов в JavaScript есть скрытое свойство `[[Prototype]]`. Это свойство ссылается на прототип или `null`.  
Свойство которое нет в объекте, ищется в прототипе.

## admin.__proto__ = user
Сделаем объект `user` протипом `admin`:

    const user = {
      name:  'Иван',
      email: 'i@i.ru'
    }

    const admin = {
      isAdmin: true
    }

    admin.__proto__ = user

    или

    const admin = {
      isAdmin: true,
      __proto__: user
    }
    
    admin.name = 'Петр'
    admin.email = 'p@p.ru'

    console.log( user.name )     // Иван
    console.log( user.isAdmin )  // undefined
    console.log( admin.name )    // Петр 
    console.log( admin.isAdmin ) // true

`__proto__` - это геттер и сеттер для `[[Prototype]]`, в современном языке его заменяют `Object.getPrototypeOf()` и `Object.setPrototypeOf()` - получают и устанавливают прототип.

## Наследуем методы через прототип

    const user = {
        name:  'Иван',
        email: 'i@i.ru',
        hello() {
            console.log( 'hello' )
        }
    }

    admin.hello() // hello

Наследовать можно друг за другом, несколько объектов, например `superAdmin > admin > user`. Один объект не может наследовать из более чем одного объекта.

## Object.keys(), for...in

    const user = {
      name:  'Иван',
      email: 'i@i.ru',
      hello() {
        console.log( 'hello' )
      }
    }

    const admin = {
      isAdmin: true,
      __proto__: user
    }

    console.log( Object.keys(admin) )          // Array[ "isAdmin" ]
    for(let prop in admin) console.log( prop ) // isAdmin, name, email, hello

- `Object.keys(admin)`     - покажет свойства объекта `admin`,
- `for(let prop in admin)` - покажет свойство объекта `admin` и наследуемые,
- если в цикле не нужны унаследованные то используем `hasOwnProperty`

## Разное
- `[[Prototype]]` - ссылка на `obj.prototype`
- `__proto__` - ссылка на `[[Prototype]]`
- Прототип - это объект на который ссылается `[[Prototype]]`

# Прототипное наследование
## Наследуем свойства
Создадим объект `car` у которого будет три свойства: `brand`, `model`, `year`. Создадим второй объект который прототипно наследует все свойства первого.

    const car = {
      brand: 'BMW',
      model: '325i',
      year:  2002
    }

    const carColor = {
      __proto__: car, // наследуем свойства car через прототип
      color: 'green'
    }

    console.log(car)            // Object { brand: "BMW", model: "325i", year: 2002 }
    console.log(carColor)       // Object { color: "green" }
    console.log(carColor.brand) // BMW

- `Object { color: "green" }`, раскрываем объект в консоли, там через прототип доступны свойства `car`,
- `carColor.brand`, сначала свойства ищутся в самом объекте, потом в прототипах,
- `carColor.brand = 'audi'` в `carColor` добавится новое свойство, в `car` останется прежним.

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
- можно создать цепочку наследования, например создать еще один объект `carColorDoors` который через прототип будет наследоваться от `carColor`,
- `carColorDoors` будет иметь все свойства и методы своих предков `carColor` и `car`,
- `Прототип` - основной объект, родитель,
- `car` - прототип для `carColor`,
- `carColor` - прототип для `carColorDoors`,
- прототипом может выступать только лишь объект,
- `__proto__` - это геттер и сеттер для работы с прототипами,
- `hasOwnProperty()` - определяем к какому прототипу принадлежит свойство:
  - `console.log(carColor.hasOwnProperty('brand'))` вернет `false` свойство `brand` не принадлежит объекту `carColor`.

