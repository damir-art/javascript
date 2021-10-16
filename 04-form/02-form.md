# form

    form.elements.id_name // получить элемент формы по его id (нельзя использовать тире)
    form.elements[1].id   // получить имя id элемента формы
    form.elements[1].name // получить имя элемента формы

Нажав на кнопку, в цикле выводим все элементы формы по их типу:

    const form    = document.querySelector('.form');
    const formBtn = document.querySelector('.form-btn');

    formBtn.addEventListener('click', (e) => {
        for (let i = 0; i < form.length; i++) {
            console.log(form.elements[i].type);
        }
    });
