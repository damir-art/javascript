const out = document.querySelector('.out')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function (e) {

    console.log('Клиент: получить список пользователей.')
    console.log('...')

    setTimeout(function () {
        console.log('Сервер: обращение к базе данных.')
        console.log('...')

        setTimeout(function () {
            console.log('База данных: формирование и передача списка пользователей, серверу.')
            console.log('...')

            setTimeout(function () {
                console.log('Сервер: форматирование списка пользователей.')
                console.log('...')

                setTimeout(function () {
                    console.log('Клиент: отображение списка пользователей.')
                }, 3000)
            }, 3000)
        }, 3000)
    }, 3000)

})
