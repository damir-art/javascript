# Конструкция switch
Используется редко. При сравнении использует строгое равенство.

    'use strict';
    let x = 10;

    switch (x) {
        case 'значение': // равносильно if (x === 'значение')
            console.log(5);
            break;
        case 6:          // равносильно if (x === 6)
            console.log(6);
            break;
        case 7:          // равносильно if (x === 7)
            console.log(7);
            break;
        default:         // ни одно из условий не верно
            console.log(8);
    }

    break - выход из конструкции
