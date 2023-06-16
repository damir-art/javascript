# for in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

Цикл для прохода по свойствам объекта, не рекомендуется применять для массивов.

Схема:

    for (const key in object) {
      инструкции;
    }

Пример:

    const obj = { a: 1, b: 2, c: 3 };

    for (const prop in obj) {
      console.log(`obj.${prop} = ${obj[prop]}`);
    }
