const pools    = document.querySelectorAll('.pool')
const template = document.querySelector('#element-template').content.querySelector('div')

for (let i = 0; i < 6; i++) {
    let element = template.cloneNode(true)
    element.children[0].textContent = i
    pools[1].appendChild(element)
}
