const btn  = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')

function test(color, number) {
    console.log(this)                  // <button class="btn2">
    console.log(number)
    this.style.backgroundColor = color
}

const b1 = test.bind(btn, 'green', 111)
const b2 = test.bind(btn2, 'gray', 222)

btn2.onclick = b1
