# Контекст
- call(), apply() - выполняются сразу, вызываются каждый раз
- bind() - выполняются когда нужно, создаются один раз

Явное указание контекста.

    function test() {
      console.log(this)             // Window
      this.style.background = 'red' // this.style is undefined
    }

    test()

Через событие:

    const btn = document.querySelector('.btn')

    btn.addEventListener('click', test)

    function test() {
      console.log(this)             // <button class="btn">
      this.style.background = 'red'
    }

- `this` должен быть привязан к элементу

## call
- call() - вызывает функцию назначая ей контекст

Схема:

    fucntion.call(context, [arg, arg2, ...]) {

    }

Пример:

    const btn = document.querySelector('.btn')

    function test() {
      console.log(this)                  // <button class="btn">
      this.style.backgroundColor = 'red'
    }

    test.call(btn)

- `call()` вызвал функцию и указал что `this = btn`

### call() с аргументами
Создаём две кнопки, жмём на первую, окрашивается вторая в тот цвет который указан в аругменте:

    const btn  = document.querySelector('.btn')
    const btn2 = document.querySelector('.btn2')

    btn.addEventListener('click', function() {
      test.call(btn2, 'green', 555)
    })

    function test(color, number) {
      console.log(this)                  // <button class="btn2">
      console.log(number)
      this.style.backgroundColor = color
    }

## apply
Аргументы передаём в виде массива.

    const btn  = document.querySelector('.btn')
    const btn2 = document.querySelector('.btn2')

    btn.addEventListener('click', function() {
      test.apply(btn2, ['green', 555])
    })

    function test(color, number) {
      console.log(this)                  // <button class="btn2">
      console.log(number)
      this.style.backgroundColor = color
    }

## bind
- bind() - позволяет привязывать контекст функции и получать новый экземпляр функции,
- bind() - выпоняется не сразу, поэтому функция обертки не нужна,
- bind() - позволяет создавать функции с заданным контекстом,
- bind() - позволяет постоянно работать с одной функцией в разных контекстах.

Пример:

    const btn  = document.querySelector('.btn')
    const btn2 = document.querySelector('.btn2')

    function test(color, number) {
      console.log(this)                  // <button class="btn2">
      console.log(number)
      this.style.backgroundColor = color
    }

    const b1 = test.bind(btn, 'green', 111)
    const b2 = test.bind(btn2, 'gray', 222)

    btn2.onclick = b1

## Итого
- call и apply нужно вызывать каждый раз когда нужно что-то сделать,
- call и apply используют при однократной работе или малом количестве вызовов,
- Если постоянно работаете с функцией в разных контекстах, можно привязать контест через bind.
