class User {
    // Конструктор класса
    constructor(userName, age) {
        this.userName = userName
        this.age      = age
    }
    // Методы класса
    getName() {
        console.log(this.userName)
    }
}

const peter = new User('Peter', 27)
peter.getName() // Peter

console.log(User.prototype.constructor)
