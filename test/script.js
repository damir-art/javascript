const wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('click', function (evt) {
    const tagName = evt.target.tagName.toLowerCase()
    console.log(tagName)

    // Меняем цвет по имени тега
    if(tagName === 'p') {
        evt.target.style.color = 'green'
    }

    // Меняем цвет по имени класса
    if(evt.target.classList.contains('descr')) {
        evt.target.style.color = 'orange'
    }
})