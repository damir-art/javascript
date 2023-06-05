# className
`className` - свойство элемента: 

    <h1 class="head">Заголовок</h1>

    let head = document.querySelector(".head");
    console.log(head.className); // head

Если несколько классов:

    <h1 class="head head--main">Заголовок</h1>

    let head = document.querySelector(".head");
    console.log(head.className); // head head--main

При изменении класса через `className` он затирает все текущие классы элемента.

    head.className = "";
    head.className = "header";
    head.className = "header header--main";

Чтобы удалить или добавить один класс не затрагивая других, используйте `classList`.
