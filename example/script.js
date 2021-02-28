const myLink = document.querySelector('#myLink')
let cursor = myLink // содержимое этой переменной должно меняться

while (cursor = cursor.parentNode) {
    console.log(cursor)
}
