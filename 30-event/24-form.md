# Форма
Свойства навигации по формам и элементам. 

## Навигация по формам
- формы на странице являются частью коллекции HTMLCollection `document.forms`
- доступ к первой форме в документе осуществляется через `document.forms[0]`
- к форме можно получить доступ по её имени `name=" formName "` через  `document.forms.formName`

## Навигация по элементам формы
- `document.forms[0].elements` - получить коллекцию элементов формы HTMLFormControlsCollection
- `document.forms[0].elements.elemName` - получить доступ к элементу формы по его имени `name=" elemName "`
- `document.forms[0].elements['elemName']` - еще один способ доступа к элементу формы
- `document.forms[0].elements.elemName.value` - получаем доступ к значению атрибута

## radio
- несколько радиокнопок имеют одно имя, обращаясь `document.forms[1].elements.radioName` к нему получаем коллекцию радиокнопок: `RadioNodeList`

## fieldset
Форма может содержать один или несколько `fieldset` внутри себя:

- `document.forms[0].elements[0]` - получаем доступ к первому fieldset
- fieldset можно назначать имена `name=" fieldset "` и обращаться по ним

## element.form
- `element.form` - элемент получает доступ к форме
- `document.forms[0].elements[1].form.method` - получаем метод `get` у формы из дочернего элемента

## input/textarea/value/checked
- input.value
- textarea.value
- input.checked - для чекбоксов и переключателей

## select/option
- select.options       - коллекция элементов option
- select.value         - значение выбранного option
- select.selectedIndex - номер выбранного option
- document.forms[0].mySelect.options[0].selected - возвращает `true/false` в зависимости является ли option на данный момент выбранным или нет
