# Погружение и всплытие событий

    // При клике на id=2, клик по id=1 тоже сработает (погружение)
    <div class="box-1" id="1">
        <div class="box-2" id="2"></div>
    </div>
    
    var divs = document.querySelectorAll('div')
    for(var i = 0; i < divs.length; i++ ) {
        divs[i].addEventListener('click', function(){
            console.log(this.getAttribute('id')) // 2, 1
        })
    }
    
    // меняем порядок с 2, 1 на 1, 2 (всплытие)
    divs[i].addEventListener('click', function(){
        console.log(this.getAttribute('id')) // 2, 1, третий параметр true у addEventListener
    }, true)