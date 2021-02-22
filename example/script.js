const loadButton = document.querySelector('#loadButton')
const result = document.querySelector('#result')

loadButton.addEventListener('click', function () {
    fetch('cars.json')
        .then(response => {
            if (response.status >= 400) {
                return Promise.reject() // отсюда, программа перейдёт в .catch()
            }
            return response.json()
        })
        .then(cars => {
            for (const car of cars) {
                result.appendChild(getCar(car))
            }
        })
        .catch(() => {
            console.error('Ошибка')
        })
})

function getCar(car) {
    const div = document.createElement('div')
    div.classList.add('car')
    div.textContent = `${car.brand}: ${car.model}`
    return div
}
