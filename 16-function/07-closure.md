# Замыкания
Своя область видимости со своими переменными для каждой функции.

Замыкание в JavaScript - это явление, когда вызывается функция, определенная внутри другой (родительской) функции, после того как родительская функция уже завершила свою работу. Замыкания используются в объектах.

    function closure(name, count) {
        return function() {
            console.log(name, count++);
        }
    }

    var mars   = closure('Mars', 1);
    var venera = closure('Venera', 1);

    mars();   // Mars 1
    mars();   // Mars 2
    venera(); // Venera 1

Замыкание можно использовать для создания приватных переменных.

    function closure(name) {
        var count = 0;
        return function() {
            console.log(name, count++);
        }
    }

    var mars   = closure('Mars');
    var venera = closure('Venera');

    mars();   // Mars 0
    mars();   // Mars 1
    venera(); // Venera 0
