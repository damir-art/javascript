# radio
По клику по кнопке, через цикл определяем какая радиокнопка выбрана.

    <label for="apple">
      <input class="radio" id="apple" type="radio" name="fruit" value="apple" checked /> Яблоко
    </label>
    <label for="pineapple">
      <input class="radio" id="pineapple" type="radio" name="fruit" value="pineapple" /> Ананас
    </label>
    <label for="peach">
      <input class="radio" id="peach" type="radio" name="fruit" value="peach" /> Персик
    </label>
    <button id="button">Кнопка</button>

    let radios = document.querySelectorAll( ".radio" );
    let button = document.getElementById( "button" );

    button.addEventListener('click', function() {
      for ( let i = 0; i < radios.length; i++ ) {
        if ( radios[i].checked ) {
          console.log( radios[i].value );
          console.log( radios[i].parentNode.textContent );
        }
      }
    });

Вешаем обработчик на каждый элемент radio, выводим информацию о радиокнопке:

    const radios  = document.querySelectorAll('.radio');

    for ( let i = 0; i < radios.length; i++ ) {
      radios[i].addEventListener( "input", function() {
        console.log(this.checked);
        console.log(this.value);
        console.log(this.parentNode.textContent);
      });
    }
