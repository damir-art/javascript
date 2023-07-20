# Деструктуризация строк

    const str = 'hello'
    const [one, two] = str
    console.log(one) // h

Деструктуризация строк с помощью метода `split()` возвращающего массив:

    let str = "Всем привет!";
    let arr = str.split(' '); // Array [ "Всем", "привет!" ]
    let [ a, b ] = arr;

    console.log(a); // Всем
    console.log(b); // привет!
