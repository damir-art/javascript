# map (итератор)
Итерируем массив и получаем новый.

    const a = [ 'moskva', 'piter', 'kazan' ]

    const b = a.map( aItem => {
        return aItem + ' gorod'
    })

    console.log(b) // [ "moskva gorod", "piter gorod", "kazan gorod" ]

Опишем JSON-файл и с помощью `map` получим массив состоящий из названий государств.

    const a = [
        {
            id: 0,
            country: 'russia'
        },
        {
            id: 1,
            country: 'usa'
        }
    ]

    const b = a.map( aItem => {
        return aItem.country
    })

    console.log(b) // [ "russia", "usa" ]
