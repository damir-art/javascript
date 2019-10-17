# Что такое контекст
Создадим объект и на примере объекта рассмотрим понятие контекста.

    var ford = {
        brand: 'Ford',
        model: 'Focus',
        year: 2004,
        getBrand: function() {
            console.log('Barnd:', this.brand)
            console.log('Model:', this.model)
            console.log('Year:', this.year)
        }
    }

    ford.getBrand()

## setTimeout()
Изучать контекст будем через функцию setTimeout().

    // через 1 секунду, запустится код размещенный в function
    setTimeout(function(){
        return 'Hello setTimeout';
    }, 1000)

