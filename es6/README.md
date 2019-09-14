# ES6 (EcmaScript 6)
## Новые возможности JavaScript

### let, const - переменные
В переменных объявленных через var нельзя изменять значение или тип данных. Использовать не рекомендуется.

    var color = '#333'
    var color = 'green'
    var color = 5
    console.log(color) // 5
    
В переменных объявленных через let нельзя изменять значения или тип данных.

    let color = '#333'
    let color = 'green'
    let color = 5
    console.log(color) // покажет ошибку о недопустимости изменения переменной
