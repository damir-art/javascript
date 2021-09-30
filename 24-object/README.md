# Объекты

## Передача значений
Передача значений существует 2х видов: передача по значению, передача по ссылке.

### Передача по значению (примитивы)
Значение копируется и не влияет на оригинал.

    const foo = function (val) {
        val += 2
        return val
    }

    const num = 2

    console.log(foo(num)) // 4
    console.log(num)      // 2

    // Оригинал num не изменился

### Передача по ссылке (сложные)
Передается ссылка на оригинал, при изменении, меняется и оригинал.

    const foo = function (val) {
        val.prop += 2
        return val.prop
    }

    const obj = { prop: 2 }

    console.log(foo(obj)) // 4
    console.log(obj.prop) // 4

    // Оригинал obj изменился

Указатели:

    var foo = { prop : 1 }
    var bar = foo
    foo.prop = 2

    console.log(bar.prop) // 2

    foo = null // в этом случае объект не удалится, ибо foo это всего лишь указатель
    // удалится указатель на объект

    console.log(foo.prop) // null
    console.log(bar.prop) // 2
