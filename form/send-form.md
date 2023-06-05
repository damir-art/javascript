# Отправка формы

    <form class="form" method="get" action="#">
      <input  id="text"   type="text" name="text" />
      <input  id="email"  type="email" name="email" />
      <button id="button" type="submit">Отправить</button>
    </form>

    var form = document.querySelector( "form" );
    var data = new FormData( form );
    console.log( data );
    var req = new XMLHttpRequest();
    req.open('POST', 'http://example.com');
    req.send(data);

## Ссылки
- https://www.youtube.com/watch?v=zUjZmsnsjU0
- https://www.youtube.com/watch?v=OtJkXuqyjkk
- https://www.youtube.com/watch?v=Fgdn-Ub-f2E
- https://qna.habr.com/q/391625
- https://learn.javascript.ru/formdata
- https://doka.guide/js/form-data/
