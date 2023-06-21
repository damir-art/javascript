# callback
callback - это функция которая передаётся в другую функцию. Функция обратного вызова.

    function showAsk(ask, showY, showN) {
      if (ask) {
        showY()
      } else {
        showN()
      }
    }

    function showYes() {
      console.log('Yes')
    }

    function showNo() {
      console.log('No')
    }

    showAsk(1, showYes, showNo)

    // Вместо первого аргумента ставим 1 или 0

- showYes, showNo - аргументы, функции колбэки,
- ключевая идея колбэка в том, что мы передаем функцию и ожидаем её вызов.

## callback через анонимную функцию

    function showAsk(ask, showY, showN) {
      if (ask) {
        showY()
      } else {
        showN()
      }
    }

    showAsk(
      0,
      function () { console.log('Yes') },
      function () { console.log('No') }
    )
