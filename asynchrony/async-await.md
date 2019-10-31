# async await
Рассмотрим более удобный способ работы с промисами. Избавляемся от then() и колбэков.

async await, рботает с любыми промисами.

Сократим код из предыдущего урока:

    async function load_users() {
        const url = 'https://jsonplaceholder.typicode.com/users'

        var response = await fetch(url)
        var data = await response.json()

        const ul = document.querySelector('#list')
        const items = data.map(function(item) {
            return `<li><b>${item.id}:</b> ${item.name} (${item.email})</li>`
        })
        ul.insertAdjacentHTML('afterbegin', items.join(' '))
    }
