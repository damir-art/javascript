class Header {
    /*
        Properties:
        @param string  data     // входные данные, текст заголовка
        @param string  color    // цвет заголовка
        @param string  fontSize // размер заголовка
        @param string  location // где выводить заголовок
    */
    constructor (tag, data, color, fontSize, cssClass, location) {
        this.tag      = tag
        this.data     = data
        this.color    = color
        this.fontSize = fontSize
        this.cssClass = cssClass
        this.location = location
    }

    /* Метод вывода заголовка */
    render() {
        const element = document.createElement(this.tag)

        element.textContent    = this.data
        element.style.color    = this.color
        element.style.fontSize = this.fontSize

        this.cssClass.forEach(item => {
            element.classList.add(item)
        })

        document.querySelector(this.location).append(element)
    }
}
