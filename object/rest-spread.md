# rest ...spread ES6(2015)
https://learn.javascript.ru/iterable

...spread оператры работают только с итерируемыми сущностями, объекты такими не являются. Перебираемые (или итерируемые) объекты - это обобщение массивов. Концепция, которая позволяет использовать любой объект в цикле for..of.

...rest при работе с объектами.

Остаток объекта:

    const man = {
      name:    'Peter',
      surname: 'Smith',
      job:     'Voditel'
    }

    let { name, ...rest } = man

    console.log(name)         // Peter
    console.log(rest.surname) // Smith
    console.log(rest.job)     // Voditel
    console.log( rest );      // { surname: "Smith", job: "Voditel" }
