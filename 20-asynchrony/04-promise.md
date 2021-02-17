# Что такое промисы
Создадим промис. В промисах может произойти, любой асинхронный код. Мы сами сигнализируем промису о его завершении, для этого нам понадобятся две функции:
- `resolve()` - успешное завершение
- `reject()` - завершение с ошибкой
- `then()` - возвращает новый промис, запускается сразу после `resolve()`
- пока выполняется промис, код после промиса, тоже выполняется

**Промис** - служит для того, чтобы оборачивать какой-либо асинхронный код.

    const promise = new Promise(function (resolve, reject) {

    });

## Пример с загрузкой картинок
Сделаем так чтобы картинки загружались не синхронно, а асинхронно (по очереди):

    // зададим url изображениям
    const url1 = 'https://gabdrahimov.ru/wp-content/uploads/2019/07/sintaksis-css.jpg'
    const url2 = 'https://gabdrahimov.ru/wp-content/uploads/2019/07/speczifichnost-v-css.jpg'
    const url3 = 'https://gabdrahimov.ru/wp-content/uploads/2016/03/php-peremennye.gif'


    // создаём промис
    function loadImage(url) {
        return new Promise((resolve, reject) => {
            
            // создаём изображение
            const img = new Image()
            img.height = 200
            img.src = url

            // вставляем изображение на страницу
            document.body.append(img)

            // если изображение загружено успешно
            img.addEventListener('load', () => {
                resolve()
            })

            // если изображение не загрузилось
            img.addEventListener('error', () => {
                reject()
            })

        })
    }

    loadImage(url1)
        .then(
            () => {
                // resolve
                console.log('Изображение загружено')
            },
            () => {
                // reject
                console.log('Изображение не загружено')
            },
        )
    
    // сокращенный вариант
    loadImage(url1)
        .then(() => loadImage(url2))
        .then(() => loadImage(url3))
        .catch(() => {
            console.log('Изображение не загружено')
        })

## Старый пример

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
