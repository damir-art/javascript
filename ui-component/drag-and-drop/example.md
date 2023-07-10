# Пример Drag and Drop

## HTML

    <!-- .empty>.fill^.empty*4 -->
    <div class="empties">
      <div class="empty">
        <div class="fill" draggable="true"></div>
      </div>
      <div class="empty"></div>
      <div class="empty"></div>
      <div class="empty"></div>
    </div>

## CSS

    .empties {
      background-color: #ecf0f1;
      height: 188px;
      width: 800px;
      display: flex;
      gap: 16px;
    }
    .empty {
      width: 188px;
      height: 188px;
      background-color: rgba(189, 195, 199, 0.5);
    }
    .fill {
      width: 188px;
      height: 188px;
      background-color: #2ecc71;
      cursor: pointer;
    }

## JavaScript

    // Создаем переменные элементов
    const fill = document.querySelector(".fill");
    const empties = document.querySelectorAll(".empty");

    function dragStart() {
      this.style.backgroundColor = "rgba(39, 174, 96, 1.0)";
      setTimeout( () => ( this.style.backgroundColor = "rgba(189, 195, 199, 0.0)" ), 0 ); // для того чтобы у помещаемого элемента, с которого ушел перетаскиваемый, не оставался цвет фона перетаскиваемого (если через CSS-классы то this.className = "invisible")
    }

    function dragEnd() {
      this.style.backgroundColor = "rgba(46, 204, 113, 1.0)";
    }

    fill.addEventListener("dragstart", dragStart);
    fill.addEventListener("dragend", dragEnd);

    function dragEnter(evt) {
      // evt.preventDefault();
      this.style.backgroundColor = "rgba(189, 195, 199, 1.0)";
    }

    function dragLeave() {
      this.style.backgroundColor = "rgba(189, 195, 199, 0.5)";
    }

    function drop() {
      this.append(fill);
    }

    function dragOver(evt) {
      evt.preventDefault();
    }

    for (const empty of empties) {
      empty.addEventListener("dragenter", dragEnter);
      empty.addEventListener("dragleave", dragLeave);
      empty.addEventListener("drop", drop);
      empty.addEventListener("dragover", dragOver);
    }
