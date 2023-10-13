# JS PHP
Передача данных из JavaScript в PHP и обратно.

Создадим два файла index.php и send.php, в index.php будет форма со JavaScript кодом отправки формы, в send.php код принимающий данные из index.php.

## Передача переменной
Передача значения переменной из PHP в JavaScript.

- JavaScript - интерпретатор языка содержится в браузере, код JavaScript обрабатывается браузером, когда страница передается ему от сервера,
- PHP - интерпретатор языка PHP содержится на сервере. При этом PHP интерпретируется до того как страница попадет в браузер, пользователя. Значит, для передачи значения переменной языка PHP в язык JavaScript, достаточно между тегами script вывести значение этой переменной.

Пример:

    <?php
    $hello = 'Привет';
    ?>

    <script>
    let hello = "<?php echo $hello; ?>";
    console.log(hello);
    </script>

## GET JS in PHP
Передача значений переменных из JavaScript в PHP методом GET.

В JavaScript коде напишем:

    let id = 2;
    location.href = "send.php?id=" + id;

В файле send.php:

    echo '<pre>';
    print_r( $_GET );
    print_r( $_GET['id'] );
    echo '</pre>';

## POST JS in PHP
Передача значений переменных из JavaScript в PHP методом POST.

- создаём форму,
- с помощью JavaScript вставляем значение в текстовое поле,
- передаём это значение в PHP методом POST (send.php)

HTML:

    <div class="wrapper">
      <form action="send.php" method="POST">
        <input type="text" name="name" id="formName">
        <button type="submit">Отправить</button>
      </form>
    </div>

JS:

    let name = 'Ivan';
    let formName = document.getElementById('formName');
    formName.value = 'Привет';

PHP:

    echo '<pre>';
    print_r( $_POST );
    print_r( $_POST['name'] );
    echo '</pre>';

## Async JS PHP JS
Асинхронная переача данных из JavaScript в PHP и наоборот. Без перезагрузки страницы. С помощью AJAX, можно передавать асинхронные запросы на сервер. При которых, данные отправляются на сервер, но перезагрузка страницы не происходит, данные отправляются в фоне.

