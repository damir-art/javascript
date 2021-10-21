# Capture
Capture, погружение, перехват.

- очень редко используется в реальном коде
- DOM-свойство (событие), HTML-атрибут (события), addEventListener(), не знают о фазе погружения

Чтобы `addEventListener()` начал ловить фазу погружения, нужно ему добавить третий аргумент:

    el.addEventListener('event', handler, {capture: true})

    el.addEventListener('event', handler, true) // сокращённая запись

Событие будет перехвачено при погружении.

## eventPhase
eventPhase - свойство, содержит номер фазы, на которой событие было поймано. Используется редко.
