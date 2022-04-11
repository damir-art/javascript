window.сhangeElementFont1 = function(el) {
    const jsClickMe = document.querySelectorAll(el)
    const arrJsClickMe = Array.from(jsClickMe)
    arrJsClickMe.forEach(( el ) => {
        const elem = new ChangeElement(el)
        elem.changeFont()
    })
}

class ChangeElement {
    // Конструктор класса
    constructor(jsClickMe) {
        this.jsClickMe = jsClickMe
        this.init()
    }
    // Методы класса
    changeColor() {
        this.jsClickMe.addEventListener('click', function() {
            this.style.color = "green"
        })
    }
    changeFont() {
        this.jsClickMe.style.fontSize = "18px"
    }
    init() {
        this.changeColor()
    }
}

function сhangeElementInit(el) {
    const jsClickMe = document.querySelectorAll(el || '.js-click-me')
    const arrJsClickMe = Array.from(jsClickMe)
    arrJsClickMe.forEach(( el ) => {
        const elem = new ChangeElement(el)
    })
}

сhangeElementInit()
