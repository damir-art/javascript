# Движение мышью
Рассмотрим подробнее события движения мышью над элементами.

- mouseover,
- mouseout,
- mouseenter,
- mouseleave.

## mouseover/mouseout
mouseover (навел), mouseout (отвел) - данные события имеют свойство `relatedTarget`.

Для события mouseover:
- `event.target`        - элемент на который курсор перешел,
- `event.relatedTarget` - элемент с которого курсор ушел.

Для события mouseout:
- `event.target`        - элемент с которого курсор ушел,
- `event.relatedTarget` - элемент на который курсор перешел.

Данные события срабатывают даже если переход произошел с родителя на потомка.

## Разное
- `relatedTarget` может иметь значение `null` если он ушел/перешел за пределами окна бразуера,
- при быстром передвижении курсора мыши, некоторые элементы могут быть пропущены,
- если при быстром передвижении курсора сработал `mouseover`, то тогда сработает и `mouseout`.

## mouseenter/mouseleave
Данные события похожи на предыдущие навел/отвел. С некоторыми отличиями:
- переход с родительского на дочерний элемент игнорируются,
- события не всплывают, поэтому их нельзя делегировать.