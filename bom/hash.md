# hash
С помощью `hash` можно создавать постраничную навигацию и одностраничные веб-приложения (SinglePage Applications, SPA), содержимое меняется без перезагрузки. Для этого можно использовать `hash` или `history`.

**hash** - использование маршрутов (адресов) с хэшами.

Важные элементы SPA через hash:
- ссылки с якорями `#`,
- событие `hashchange` вызываемое у `window`,

`hashchange` - событие, которое срабатывает при добавлении/изменении хэша в адресной строке,  
событие `hashchange` возникает на объекте `window`,  

## Создание простейшего SPA
Сценарий, обеспечивающий навигацию в нашей странице на основе хешей:
- дожидаемся события `hashchange`,
- определяем какой хэш находится в адресной строке,
- выполняем манипуляции для добавления скрытия `.hide`.

CSS:

    <style>
      .hide {
        display: none;
      }
    </style>

HTML:

    <ul class = "list">
      <li><a href = "#page1">Страница 1</a></li>
      <li><a href = "#page2">Страница 2</a></li>
    </ul>

    <div class="wrapper page-1 hide">
      <h1>Страница 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure eveniet, pariatur minima ipsum laudantium culpa.
      </p>
    </div>

    <div class="wrapper page-2 hide">
      <h1>Страница 2</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam maxime aut, distinctio quasi neque ad eaque!
      </p>
    </div>

JavaScript:

    // таблица соответствия хэшей страницам
    const pageMap = {
      "#page1": ".page-1",
      "#page2": ".page-2",
    }

    // хэш текущей открытой страницы
    let currentPage;

    window.addEventListener("hashchange", handlePage);

    handlePage();

    function handlePage() {
      const pageName = pageMap[location.hash]; // по таблице соответствия определяем CSS-класс страницы
      if (pageName) {
        const page = document.querySelector(pageName);
        if (page) {
          if (currentPage) {
            currentPage.classList.add("hide"); // добавляем hide предыдущей странице
          }
          page.classList.remove("hide"); // удаляем hide у текущей страницы
          currentPage = page;
        }
      }
    }

## Разное
Причем это скорей всего даже не скрипт, а определённый паттерн, который нужно использовать при создании SPA с помощью `hash`.
