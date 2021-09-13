const btn = document.querySelector('.btn')

const onButtonClick = (username) => {
    console.log(`Hello, ${username}`)
}

btn.addEventListener('click', onButtonClick.bind('null', 'Ivan'))
