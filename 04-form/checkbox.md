# checkbox

    <label><input id="checkbox" type="checkbox" value="apple" /> Яблоко</label>

    let checkbox = document.getElementById( "checkbox" );
    checkbox.addEventListener( "input", function() {
      console.log( this.value );
      console.log( this.checked );
      console.log( this.parentNode.textContent ); // Яблоко
    });

Пример чекбокса который сразу отмечен `checked`:

    <label><input id="checkbox" type="checkbox" value="apple" checked /> Яблоко</label>
