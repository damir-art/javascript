# Разное

## children
Полное удаление элементов, не доступны даже по ссылке.

    for (let i = 0; i < pools[0].children.length; i++) {
      const child = pools[0].children[i];
      child.parentElement.removeChild(child); // удалились не все элементы иза замещения индексов
    }

Чтобы удалить все элементы, цикл должен считать с конца:

    for (let i = pools[0].children.length - 1; i >= 0; i--) {
      const child = pools[0].children[i];
      child.parentElement.removeChild(child);
    }

    pools[0].appendChild(blocks[1]);                 // почему-то всё равно добавляет элемент
    pools[0].appendChild(blocks[0].cloneNode(true)); // и клонирует
