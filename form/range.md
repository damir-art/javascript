# range (ползунок)
Перемещаем ползунок, в консоли появляется значение ползунка:

    <input type="range" id="range" min="0" max="100" value="90" step="10" />

    let range = document.getElementById( "range" );

    range.addEventListener( "input", function() {
      console.log( this.value );
    });

Двигаем ползунок и числовая позиция ползунка отображается в заголовке.

    <input class="range" type="range" min="0" max="100" value="35" />

    const h1 = document.querySelector('h1')
    const range = document.querySelector('.range')

    range.addEventListener('input', function () {
      h1.textContent = range.value;
    })
