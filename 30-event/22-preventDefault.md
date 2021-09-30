# preventDefault()
- `prevent` предотвратить
- `default` по-умолчанию

При возникновении события, сначала выполняются пользовательские обработчики событий, а затем уже действия по-умолчанию такие как: клик по ссылке, отправка формы, заполнение текстового поля и т.д.


## Примеры
Отменяем действие (событие) по умолчанию, клик по ссылке:

    a.addEventListener('click', link_click)

    function link_click(event) {
        event.preventDefault()

        var div = divs[0]
        div.style.display = div.style.display === 'none'
            ? 'flex'
            : 'none'

        console.log(div.style.display)
    }

Фильтруем ввод в текстовое поле, создаём возможность фильтрации, а имеено ввода только цифр, стрелок и backpace:

    const iName = document.querySelector('.name')

    iName.addEventListener('keydown', function (e) {
        let isDigit = false // флаг
        
        if (
                e.key >= 0            ||
                e.key <= 9            ||
                e.key == '-'          ||
                e.key == 'ArrowLeft'  ||
                e.key == 'ArrowRight' ||
                e.key == 'Backspace'
            )
        {
            
            isDigit = true
        }

        if (isDigit == true) {
            console.log('Да')
        } else {
            console.log('Нет')
            e.preventDefault()
        }
    })
