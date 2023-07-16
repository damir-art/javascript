# FileReader()
JavaScript работающий в браузере, нем ожет напрямую обращаться к файловой системе компьютера. Но с помощью File API можно загрузить изображение с локального компьютера, без использования серверных языков.

Основные элементы:
- `<input type="file" />` - тег выбора файлов с локального компьютера, хранит массив файлов `files`
- `e.target.files[0]` - выбранное изображение,
- `new FileReader()` - создает экземпляр объекта fileReader благодаря которому получаем доступ к изображению,
- `fileReader.readAsDataURL(file)` - доступ к изображению,
- `Base64` - формат кодирования информации, в Base64 можно кодировать любую информацию (текст, числа, бинарные данные), в том числе и хранящиеся вфайлах изображения.

Браузеры загружают закодированные в Base64 изображения. Метод `fileReader.readAsDataURL(file)` читает переданный ему в качестве аргумента файл из файловой системы и конвертирует его содержимое в формат Base64.

Пример, загружаем ихображение с локального компьютера и если он подходит по размеру, то вставляем его в тег `<img src= "" id ="img" />`.

HTML:

    <form action="#">
      <input type="file" id="file" /> // выбираем файл с изображением
      <div>
        <img src="" id="img"> // вставляем выбранное изображение
      </div>
    </form>

JS:

    const file = document.querySelector('#file');
    const img = document.querySelector('#img');

    const fileReader = new FileReader();

    // сработет после загрузки файла
    fileReader.addEventListener('load', function() {
      img.src = fileReader.result; // вставляет изображение закодированное в Base64, data:image/jpeg;base64,...
    });

    // событие клик, по кнопке file обрабатывать не нужно, окно выбора файлов откроется само
    // событие change сработает при выборе файла
    file.addEventListener('change', function(e) {

      const file0 = e.target.files[0];

      // console.log(file0); // File { name: "small.jpg", lastModified: 1689402187051, webkitRelativePath: "", size: 118195, type: "image/jpeg" }

      if (file0) { // проверяем выбран ли файл, не нажата ли кнопка отмена у окна выбора файлов
        if (file0.size > 300 * 1024) { // ограничиваем размер загружаемого изображения
          alert('Слишком большой файл');
        } else {
          // console.log(fileReader);
          fileReader.readAsDataURL(file0); // читаем содержимое изображения, после чтения, генерируется событие fileReader.load
        }
      }
    });

## Разное
Для стилизации кнопки выбора файлов, прописываем следующие стили для его правильного скрытия со страницы:

    input[type=file] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

Прописываем кнопке `id`, и связываем её с `<label for="idButton"`, кнопку в HTML-структуре можно разместить в любом месте. Внутри `label` можно поместить изображение или текст, которое сообщает о том, что это кнопка загрузки файлов.
