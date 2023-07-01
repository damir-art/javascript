# Передаем параметры событию
Как передать параметры обработчику события, например тут:

    const btn = document.querySelector('.btn');

    const onButtonClick = () => {
      console.log('Hello, ...');
    }

    btn.addEventListener('click', onButtonClick);

## Спрособ №1

    const btn = document.querySelector('.btn');

    const onButtonClick = (username) => {
      console.log(`Hello, ${username}`);
    }

    btn.addEventListener('click', () => {
      onButtonClick('Ivan');
    });

В этом случае мы не сможем снять обработчик события, отписаться от него.

## Способ №2 с замыканием
onButtonClick возвращает новую функцию, которая станет обработчиком события. При загрузке скрипта, новая функция подставляется вместо onButtonClick('Ivan').

    const btn = document.querySelector('.btn');

    const onButtonClick = (username) => {
      return (evt) => {
        console.log(`Hello, ${username}`);
      }
    }

    btn.addEventListener('click', onButtonClick('Ivan'));

В этом случае мы не сможем снять обработчик события, отписаться от него.

## Способ №3
Функции в JavaScript являются объектами и у них имеются методы.

Метод `bind('контекст', 'параметры')` позволяет:
- установить значение для контекста (не работает для стрелочной функции),
- передать параметры для функции

Пример с методом `bind()`:

    const btn = document.querySelector('.btn');

    const onButtonClick = (username) => {
      console.log(`Hello, ${username}`);
    }

    btn.addEventListener('click', onButtonClick.bind('null', 'Ivan'));

Метод `bind()` возвращает новую функцию, этой новой функции он может передать контекст (содержимое `this`) и параметры.

В этом случае мы не сможем снять обработчик события, отписаться от него.
