# DocumentFragment
Служит оберткой для передачи нескольких элементов. При вствки его куда либо, он исчезает, а его содержимое вставляется.

Вместо `DocumentFragment` обычно используют массив элементов. А сам `DocumentFragment` обычно используют вместе с `template` см. `web-components/template.md`

    let fragment = new DocumentFragment();

## createDocumentFragment()
`createDocumentFragment` - улучшает производительность старых и мобильных браузеров. У фрагмента такие же методы как и DOM-элементов.

    const pool_2 = document.querySelector('.pool-2')
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < 6; i++) {
        const newElement = document.createElement('div')
        newElement.classList.add('el')
        newElement.innerHTML = '<span>' + i + '</span>'
        fragment.appendChild(newElement)
    }

    pool_2.appendChild(fragment)
