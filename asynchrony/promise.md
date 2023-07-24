# Промис
В setTimeout код запускается асинхронно, асинхронный код можно создавать и с помощью промисов.

## Что такое промисы
Создадим промис. В промисах может произойти, любой асинхронный код. Мы сами сигнализируем промису о его завершении, для этого нам понадобятся функции:
- `resolve()` - успешное завершение,
- `reject()`  - завершение с ошибкой,
- `then()`    - возвращает новый промис, запускается сразу после `resolve()`,
- пока выполняется промис, код после промиса, тоже выполняется.

Промис - служит для того, чтобы оборачивать какой-либо асинхронный код.

    const promise = new Promise(function (resolve, reject) {

    });

## Пример с загрузкой картинок
Если в HTML-код добавить три тега img, то изображения в браузере будут загружаться параллельно (синхронно), чтобы быстрее показать весь контент страницы. Но что если, нам надо чтобы изображения загружались по очереди (асинхронно)?

Для начала вставим изображения на страницу синхронно:

    const url1 = 'https://cdn.mos.cms.futurecdn.net/62rEvPnj75mtT2CUAnrRGA.jpg';
    const url2 = 'https://cdn.mos.cms.futurecdn.net/aLNiC9EBLqJTNKg5yMoJHZ.jpg';
    const url3 = 'https://cdn.mos.cms.futurecdn.net/CKZaALYg6JEKoLXjPEFzdL.jpg';

    const img = new Image();
    img.height = 200;
    img.src = url1;

    const img2 = new Image();
    img2.height = 200;
    img2.src = url2;

    const img3 = new Image();
    img3.height = 200;
    img3.src = url3;

    document.body.append(img);
    document.body.append(img2);
    document.body.append(img3);

Теперь необходимо сделать так чтобы началась загрузка первого изображения, дождаться завершения её загрузки, и только потом начать загрузку второго изображения. Для этого можно воспользоваться механизмом обработки события `load`, которое возникает после полной загрузки определённого изображения на страницу.

## Работа с асинхронным кодом с помощью коллбэк-функций
Как только на переменной `img` отработает событие `load` то запустится колбэк загрузки переменной `img2`:

    const url1 = 'https://cdn.mos.cms.futurecdn.net/62rEvPnj75mtT2CUAnrRGA.jpg';
    const url2 = 'https://cdn.mos.cms.futurecdn.net/aLNiC9EBLqJTNKg5yMoJHZ.jpg';
    const url3 = 'https://cdn.mos.cms.futurecdn.net/CKZaALYg6JEKoLXjPEFzdL.jpg';

    const img = new Image();
    img.height = 200;
    img.src = url1;

    img.addEventListener("load", function() {
      const img = new Image();
      img.height = 200;
      img.src = url2;
      document.body.append(img);

      img.addEventListener("load", function() {
        const img = new Image();
        img.height = 200;
        img.src = url3;
        document.body.append(img);

        img.addEventListener("load", function() {
          console.log(" Все изображения загружены! ");
        });
      });
    });

    document.body.append(img);

При таком подходе, с использованием коллбэк-функций обработчики событий многократно вкладываются друг в друга, каждая такая вложенность усложняет понимание кода, поэтому отлаживать или изменять такой скрипт становится трудно.

## Работа с асинхронным кодом с помощью промисов
Другой, более правильный и грамотный метод работы с асинхронными задачами (то есть с задачами, для которых нельзя точно определить время выполнения), связан с применением так называемых "промисов" (англ. promise – обещание).

Для понимания механизма промисов можно привести пример из обычной жизни. Предположим, что вы в аэропорту ожидаете посадки на самолёт. То есть вы находитесь в режиме ожидания и это ожидание для вас является асинхронной операцией, так как точное время начала посадки неизвестно (рейс могут отложить или вообще отменить). Если посадка началась, то ваша задача (ожидание посадки) выполнена успешно. Если же посадку отменили, то задача для вас завершена неудачно. Итак, асинхронная операция из нашего примера может находиться в одном из трёх состояний:

- ожидание,
- выполнено успешно,
- выполнено неудачно.

Промис - это специальный объект, содержащий своё состояние (state), которое может принимать одно из трёх возможных значений:

- pending (ожидание),
- fulfilled (выполнено успешно) и
- rejected (выполнено неудачно).

Схема:

    const promise = {
      state: [ 'pending', 'fulfilled', 'rejected ' ]
    }

## Создание промиса

Для создания нового промиса в JavaScript, нужно вызвать конструктор `new Promise()` и передать в него функцию, которая будет сразу выполнена:

    console.log( 'до promise' );

    const promise = new Promise( () => {
      console.log( 'внутри promise' );
    });

    console.log( 'после promise' );

При выполнении данного кода в консоль будут последовательно выведены все три сообщения, то есть код внутри промиса является синхронной операцией, которая выполняется сразу при создании промиса:

    до promise
    внутри promise
    после promise

## Изменение состояния промиса
При создании промиса он автоматически получает состояние `pending` (ожидание). Функция, передаваемая в конструктор промиса, может иметь два параметра, которые обычно называют `resolve` и `reject`. Эти параметры являются функциями, вызывая первую из них (resolve), мы переведём промис в состояние `fulfilled`
(выполнено успешно), а при вызове второй(reject) промис перейдет в состояние `rejected` (при выполнении произошла ошибка).

    const promise = new Promise( (resolve, reject) => {
      resolve();
    });

Для чего же нужны эти функции `resolve` и `reject`, когда их следует вызывать? Дело в том, что внутри промиса можно выполнять асинхронные операции, а функцию `resolve` или `reject` нужно запускать в момент соответственно удачного илинеудачного завершения этих операций.

Создадим функцию `delay()`, в которую будет передаваться время в миллисекундах, а возвращать она будет промис. Промис будем создавать с одним параметром `resolve` (второй параметр `reject` задавать необязательно). Внутри промиса создадимновый таймер:

- время срабатывания получается из параметра функции delay(),
- в запускаемой функции будет вызываться resolve() и выводиться сообщение в консоль.

function delay( ms ) {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve();
      console.log( 'resolved' );
    }, ms);
  });
}

delay( 2000 );

Запустив функцию `delay(2000)`, мы через две секунды увидим в консоли сообщение `resolved`. И вновь возникает вопрос: для чего нужен этот механизм, как он нам поможет при работе с асинхронным кодом? Ответ состоит в том, что в JavaScript можно обрабатывать события перехода промиса в состояние `resolved` или `rejected` (а такой переход произойдёт после запуска функции `resolve` или `reject` в момент завершения асинхронной операции, заданной внутри этого промиса), выполняя при этом определённый код.

## Метод then()
В каждом промисе помимо текущего состояния (свойство state) хранится очередь функций (условно назовём её `resolveQueue`), которые должны быть выполнены при переходе его в состояние resolved. Например:

    const promise = {
      state: [ 'pending', 'fulfilled', 'rejected' ],
      resolveQueue: [
        function() {
          console.log( '1' );
        },
        function() {
          console.log( '2' );
        },
        function() {
          console.log( '3' );
        }
      ]
    }

Рассмотрим на нашем примере, как организуется подобная очередь функций. Сохраним промис, возвращаемый функцией delay(), в переменной `promise`. Для добавления элемента в очередь функций, которые будут выполнены при переводе промиса в состояние `resolve`, нужно у промиса вызвать метод `then()`:

    function delay( ms ) {
      return new Promise( (resolve) => {
        setTimeout( () => {
          resolve(); // без resolve then не отработает 
          console.log( 'resolved' );
        }, ms);
      });
    }

    const promise = delay(2000);
    promise.then( () => console.log(1) );

Запустив данный код, мы через две секунды увидим в консоли два сообщения:

    resolved
    1

Для наглядности добавим с помощью вызова promise.then() в очередь resolveQueue еще две функции:

    promise.then( () => console.log(2) );
    promise.then( () => console.log(3) );

Через две секунды после запуска этого кода в консоль будут выведены четыре сообщения:

    resolved
    1
    2
    3

Рассмотрим, как меняется внутреннее состояние промиса при выполнении нашего кода. Сразу после создания промис находится в состоянии `state: "pending"` и очередь `resolveQueue` у него пуста:

    const promise = {
      state: 'pending',
      resolveQueue: [
      ]
    }

После выполнения трёх методов `then` в очередь `resolveQueue` записываются три функции:

    const promise = {
      state: 'pending',
      resolveQueue: [
        () => console.log(1),
        () => console.log(2),
        () => console.log(3)
      ]
    }

Когда через две секунды сработает установленный таймер и вызовется функция resolve(), промис перейдёт в состояние `fulfilled` и автоматически выполнятся все функции из очереди `resolveQueue`. Сама очередь после этого очищается:

    const promise = {
      state: 'fulfilled',
      resolveQueue: [
      ]
    }

Подчеркнём ещё раз, что метод промиса `then()` не является блокирующим, он просто добавляет переданную в него функциюв очередь `resolveQueues`. Убедимся в этом, добавив `console.log()` до и после вызовов `promise.then()`:

    function delay( ms ) {
      return new Promise( (resolve) => {
        setTimeout( () => {
          resolve();
          console.log( 'resolved' );
        }, ms);
      });
    }

    const promise = delay(2000); // возвращает promise

    console.log( 'до then' );
    promise.then( () => console.log(1) );
    promise.then( () => console.log(2) );
    promise.then( () => console.log(3) );
    console.log( 'после then' );

При запуске этого кода сообщения 'до then' и 'после then' выводятся сразу, а сообщения от обработчиков `promise.then()` через 2 секунды (после срабатывания таймера, объявленного в промисе, и вызова функции
resolve() внутри этого таймера).

    до then
    после then
    resolved
    1
    2
    3

Метод `then()`, кроме того, что помещает переданную в него функцию в очередь промиса, сам возвращает новый промис. У этого нового промиса можно также вызвать метод `then()`, который в свою очередь вернёт новый промис и так далее. Таким образом, мы можем объединять вызовы `then()` в цепочки (такой подход называется чейнингом промисов):

    promise
      .then( () => console.log(1) )
      .then( () => console.log(2) )
      .then( () => console.log(3) );

При этом будут созданы два новых промиса (условно назовём их `promise2` и `promise3`) со своими очередями функций:

    const promise = {
      state: 'pending',
      resolveQueue: [
        () => console.log( 1 )
      ]
    }

    const promise2 = {
      state: 'pending',
      resolveQueue: [
        () => console.log( 2 )
      ]
    }

    const promise3 = {
      state: 'pending',
      resolveQueue: [
        () => console.log( 3 )
      ]
    }

Пусть теперь наш первый промис разрешится, то есть перейдёт в состояние `fulfilled` и выполнит функцию из своей очереди:

## Пример с загрузкой картинок (старая запись)
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

    // обычный вариант
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
    //   console.log('Конец, всех асинхронных операций!')
    // })
