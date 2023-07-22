# Примеры перемещения по нодам

    <div class="class-1">DIV 1</div>
    <div class="class-2">DIV 2</div>
    <div class="class-3">DIV 3</div>

    const body = document.body;
    console.log( body.childNodes ); // список всех узлов
    console.log( body.children );   // список всех дочерних узлов элементов

## Цикл

Перебираем узлы body.childNodes черезы циклы `for` и `for of`:

    for ( let i = 0 ; i < body.childNodes.length; i++) {
      console.log(body.childNodes[i]);
    }

    for (const node of body.childNodes) {
      console.log( node );
    }

## nodetype
Проверяем числовой тип узла:

    console.log( node.nodeType ); // проверяем чем является узел

Выводим только узлы элементы:

    // Выводим только узлы элементы
    for ( const node of body.childNodes ) {
      if ( node.nodeType === 1 ) {
        console.log( node ); // вывод узлов элементов
      }
    }

## first
Получаем доступ к первому дочернему узлу и элементу:

    console.log( body.firstChild );        // первый дочерний узел
    console.log( body.firstElementChild ); // первый дочерний элемент

## last
Получаем доступ к последнему дочернему узлу и элементу:

    console.log( body.lastChild );         // последний дочерний узел
    console.log( body.firstElementChild ); // последний дочерний элемент

## sibling
Получаем доступ к соседним узлам и элементам (следующий / предыдущий):

  console.log( body.firstElementChild );
  console.log( body.firstElementChild.nextSibling ); // следующий соседний узел
  console.log( body.firstElementChild.nextElementSibling ); // следующий соседний элемент

  console.log( body.lastElementChild );
  console.log( body.lastElementChild.previousSibling ); // предыдущий соседний узел
  console.log( body.lastElementChild.previousElementSibling ); // предыдущий соседний элемент

Перебрать все элементы, расположенные на одном уровне иерархии DOM-дерева, можно в цикле, проверяя существование следующего ближайшего соседа и переходя к нему с помощью свойства nextElementSibling.

## parent

  console.log( body.parentNode ); // родительский узел
  console.log( body.parentElement ); // родительский элемент

Перебрать все родительские элементы снизу вверх, до самого корневого, можно с помощью цикла `while`. Для этого определим переменную `cursor`, в которую запишем значение переменной `myLink`, то есть ссылку на элемент `<a>`. Затем внутри блока проверки условия цикла `while` мы будем записывать в переменную `cursor` ссылку на родителя текущего элемента (значение свойства parentNode):

    const myLink = document.querySelector('#myLink');

    let cursor = myLink;
    while(cursor = cursor.parentNode) {
      console.log(cursor);
    }

Самым корневым элементом в DOM-дереве является document.
