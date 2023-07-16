# history
С помощью `history` можно создавать постраничную навигацию и одностраничные веб-приложения (SinglePage Applications, SPA), содержимое меняется без перезагрузки. Для этого можно использовать `hash` или `history`.

`history` как и `hash`, тоже является еще одним способом организации постраничной навигации. HTML-структура страницы будет такой же как и в примере с `hash`. У `history` также сохраняется история отображения страниц, работают ссылки перехода вперед и назад, но при этом нет хэшей в адресной строке.

Важные элементы SPA через history:
- history.pushState({}),
- событие `popstate` вызываемое у `window`,

`pushState()` - позволяет добавить в историю переходов новую страницу, и связать с этой записью пользовательские данные (состояние страницы). Воспользуемся данным методом и добавим в историю переходов новый элемент с названием "new page" и данными в виде объекта {page: newPage} (третий параметр функции pushState(), адрес страницы, не указываем - в этом случае, по умолчанию будет использован URL текущей страницы).

`popstate` - событие возникает при нажатии кнопок перехода у браузера: вперед/назад.

Пример с `history` без использования хешей в адресной строке:

    const pageMap = {
      "#page1": ".page-1",
      "#page2": ".page-2",
    }

    const list = document.querySelector(".list");
    let currentPage;

    list.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        e.preventDefault(); // отменяем действие ссылки по умолчанию и показ хешей в адресной строке
        const newPage = e.target.getAttribute("href"); // значение атрибута href у страницы, ссылки по которой кликнули

        // добавляем адрес страницы в историю браузера, благодаря этому будут работать кнопки перехода вперед назад
        history.pushState({
          page: newPage
        }, "new page");

        handlePage(newPage); // В результате, в функции handlePage() убирается класс hide у страницы, которая должна быть отображена, а страница которая была отображена до этого скрывается с помощью добавления CSS-класса .hide
      }
    });

    // событие нажатия клавиш в браузере назад и вперед
    window.addEventListener("popstate", (e) => {
      if (e.state && e.state.page) {
        handlePage(e.state.page);
      }
    });

    // page - идентификатор старницы
    function handlePage(page) {
      const pageName = pageMap[page];

      if (pageName) {
        const page = document.querySelector(pageName);

        if (page) {
          if (currentPage) {
            currentPage.classList.add("hide");
          }

          page.classList.remove("hide");
          currentPage = page;
        }
      }
    }
