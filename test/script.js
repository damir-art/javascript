function createUser (name, age, car) {
    return {
        name,
        age,
        car
    }
}

const user = createUser('Иван', 27, true)

for (let key in user) {
    console.log(user[key])
}
