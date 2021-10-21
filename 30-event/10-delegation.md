# Делегирование событий

**Делегирование событий** &ndash; это оптимизация, улучшение производительности кода JavaScript. Суть заключается в том, чтобы добавить прослушку событий не на каждый элемент прослушки, а на их общую обёртку.

Делегирование подходит только для очень простых обработчиков, где `event.target` - какой именно элемент из множества, не важен.

Благодаря всплытию/погружению можно использовать делегирование. Делегирование используется при однотипном событии на разных элементах.

## Когда делегировать, а когда нет?
- (да) много идентичных обработчиков на элементах, которые постоянно удаляются и добавляются
- (нет) много похожих обработчиков, отличающиеся набором фиксированных данных для разных элементов

Делегирование на всплытие:
- вешаем обработчик не на элементы, а на обертку элементов
- проверяем целевой элемент `event.target` на каком элементе произошло событие (например клик и он всплывает до обертки)

Делегирование на захват:
- например создаём обработчик события `invalid` (но оно не всплывает), для сотен инпутов
- вешаем событие на форму (клик по submit)
- добавляем `true` в addEventListener()

## Не оптимизированный код
Обраотчик висит на всех элементах:

    const t_s = document.querySelectorAll('.t')

    for (const t of t_s) {
        t.addEventListener('click', function(evt){
            // this.style.backgroundColor = 'red'
            evt.target.style.backgroundColor = 'red'
        })
    }

## Оптимизированный код
Прослушка `addEventListener()` висит только на одном элементе *(обертке)*, а не на множестве внутренних элементов.

    const wrapper = document.querySelector('.wrapper')

    wrapper.addEventListener('click', function(evt){
        evt.target.style.backgroundColor = 'red'
    })

Сделаем так чтобы событие сработало только на абзацах:

    const wrapper = document.querySelector('.wrapper')

    wrapper.addEventListener('click', function (evt) {
        const tagName = evt.target.tagName.toLowerCase()
        console.log(tagName)

        // Меняем цвет по имени тега
        if(tagName === 'p') {
            evt.target.style.color = 'green'
        }

        // Меняем цвет по имени класса
        if(evt.target.classList.contains('descr')) {
            evt.target.style.color = 'orange'
        }
    })
