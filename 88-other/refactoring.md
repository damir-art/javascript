# Рефаторинг

## Пример №1
Создадим изображения и вставим их на сайт:

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

Сделаем рефакторинг этого кода, создадим функцию и параметром отправим путь к картинке, благодаря чему мы сразу смежем добавлять атрибуты всем изображениям, например добавить ширину или `style`:

    function createImage(url) {
      const img = new Image();
      img.height = 200;

      img.width = 200;
      img.style.margin = "20px";

      img.src = url;
      document.body.append(img);
    }

    createImage(url1);
    createImage(url2);
    createImage(url3);

Этот код можно сократить, поместив путь к изображениям в массив и обработав это циклом:

    const arr = [
      'https://cdn.mos.cms.futurecdn.net/62rEvPnj75mtT2CUAnrRGA.jpg',
      'https://cdn.mos.cms.futurecdn.net/aLNiC9EBLqJTNKg5yMoJHZ.jpg',
      'https://cdn.mos.cms.futurecdn.net/CKZaALYg6JEKoLXjPEFzdL.jpg'
    ]

    function createImage(arr) {
      for (const url of arr) {
        const img = new Image();
        img.height = 200;
        img.width = 200;
        img.style.margin = "20px";
        img.src = url;
        document.body.append(img);
      }
    }

    createImage(arr);
