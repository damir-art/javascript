# async / await
async - асинхронный
- `async / await` более удобный способ работы с промисами, избавляемся от then() и колбэков,
- async функция внутрь которой вставляем await, вместо then(),
- пока выполняется `async / await`, код после него тоже выполняется.

## Пример с загрузкой картинок
Пример из предыдущего урока с использованием async / await.

    // зададим url изображениям
    const url1 = 'https://gabdrahimov.ru/wp-content/uploads/2019/07/sintaksis-css.jpg'
    const url2 = 'https://gabdrahimov.ru/wp-content/uploads/2019/07/speczifichnost-v-css.jpg'
    const url3 = 'https://gabdrahimov.ru/wp-content/uploads/2016/03/php-peremennye.gif'

    // создаём промис
    function loadImage(url) {
      return new Promise((resolve) => {
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
      })
    }

    async function loadImages () {
      await loadImage(url1)
      await loadImage(url2)
      await loadImage(url3)
      console.log('Изображения загружены')
    }
    loadImages ()

## Старый пример

    async function load_users() {
      const url = 'https://jsonplaceholder.typicode.com/users'

      var response = await fetch(url)
      var data = await response.json()

      const ul = document.querySelector('#list')
      const items = data.map(function(item) {
        return `<li><b>${item.id}:</b> ${item.name} (${item.email})</li>`
      })
      ul.insertAdjacentHTML('afterbegin', items.join(' '))
    }
