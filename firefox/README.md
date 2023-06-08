## FireFox WebExtension
https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions

## Структура проекта
Файлы хранятся в папке с именем расширения.

- exlinks - название папки
  - manifest.json - файл манифеста
  - exlinks.js - скрипт встраивается в страницу

## Установка файла
Временная установка с версии Firefox 45:
- переходим в `about:debugging`
- кликаем по ссылке `Этот Firefox`
- кликаем по кнопке `Загрузить временное дополнение`
- выбираем файл `manifest.json`
- расширение будет находится в браузере до закрытия
- проверяем расширение `about:addons` (Управление расширениями)
- после изменения скрипта нажимаем `Обновить` в `about:debugging#/runtime/this-firefox`

## Разное
Разное, чтобы собираь инфу о странице, нужно изучить location, методы строк, regex и new XMLSerializer().serializeToString(document)

## Ссылки
- Получаем все внешние ссылки на странице: https://efim360.ru/javascript-kak-poluchit-vse-vneshnie-ssylki-na-html-stranicze/
