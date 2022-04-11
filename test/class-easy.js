class ChangeElement {
    // Конструктор класса
    constructor(jsClickMe) {
        this.jsClickMe = jsClickMe
        this.init()
    }
    // Методы класса
    changeColor() {
        const jsClickMe = document.querySelectorAll(`.${this.jsClickMe}`)
        const arrJsClickMe = Array.from(jsClickMe)
        arrJsClickMe.forEach(( el ) => {
            el.addEventListener('click', function() {
                this.style.color = "green"
            })
        })
    }
    init() {
        this.changeColor()
    }
}

const elem = new ChangeElement('js-click-me')
