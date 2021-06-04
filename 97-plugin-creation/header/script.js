/*
    Объекты плагина заголовков
*/
const headerTop = new Header('h1', 'Заголовок 1', 'green', '48px', ['header', 'header__top'], '.HeaderJS__top')
headerTop.render()

const headerBottom = new Header('h2', 'Заголовок 2', 'red', '40px', ['header', 'header__bottom'], '.HeaderJS__bottom')
headerBottom.render()
