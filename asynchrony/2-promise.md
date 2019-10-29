# Что такое промисы
Создадим промис. В промисах может произойти, любой асинхронный код. Мы сами сигнализируем промису о его завершении, для этого нам понадобятся две функции `resolve()` - успешное завершение, `reject()` - завершение с ошибкой. Функция `then()` *(можно вызывать в любом месте кода)* запускается сразу после `resolve()`.

**Промис** - служит для того, чтобы оборачивать какой-либо асинхронный код.

    var promise = new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Сервер: обращение к базе данных.')
            console.log('...')
            resolve()
        }, 1000)
    })

    promise.then(function() {
        return new Promise(function(resolve, reject){
            setTimeout(function () {
                const users = [
                    {uid: 'id1', name: 'Ivan'},
                    {uid: 'id2', name: 'Elena'}
                ]
                // reject('БД не смогла получить список пользователей!')
                console.log('База данных: формирование и передача списка пользователей, серверу.', users)
                console.log('...')
                resolve(users)
            }, 1000)
        })
    })
    .then(function(dbUsers) {
        return new Promise(function(resolve, reject){
            setTimeout(function () {
                console.log('Сервер: форматирование списка пользователей.')
                console.log('...')
                const users = dbUsers.map(function(user) {
                    return {
                        id: user.uid,
                        firstName: user.name,
                        timestampt: Date.now()
                    }
                })
                resolve(users)
            }, 1000)
        })
    })
    .then(function(users) {
        setTimeout(function () {
            console.log('Клиент: отображение списка пользователей.', users)
            console.log('...')
        }, 1000)
    })
    // не обязательно
    .catch(function(error) {
        console.error(error)
    })
    // .finally(function() {
    //     console.log('Конец, всех асинхронных операций!')
    // })
