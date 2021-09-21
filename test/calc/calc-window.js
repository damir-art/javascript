function calcWindow() {
    let formWindowStvorka    = document.querySelectorAll('.form-window-stvorka')
    let formWindowKamera     = document.querySelectorAll('.form-window-kamera')
    let formWindowProfil     = document.querySelectorAll('.form-window-profil')
    let formWindowFurnitura  = document.querySelectorAll('.form-window-furnitura')
    let formWindowWidth      = document.querySelector('.form-window-width')
    let formWindowHeight     = document.querySelector('.form-window-height')
    let formWindowBtn        = document.querySelector('.form-window__btn')
    let windowPrice          = document.querySelector('.window-price')

    formWindowBtn.addEventListener('click', function() {
        windowPrice.innerText = ''
        for (let i = 0; i < formWindowStvorka.length; i++) {
            if (formWindowStvorka[i].checked) {
                windowPrice.innerText += formWindowStvorka[i].id
                console.log(formWindowStvorka[i].dataset.stvorka)
            }
        }
        for (let i = 0; i < formWindowKamera.length; i++) {
            if (formWindowKamera[i].checked) {
                windowPrice.innerText += formWindowKamera[i].id
            }
        }
        for (let i = 0; i < formWindowProfil.length; i++) {
            if (formWindowProfil[i].checked) {
                windowPrice.innerText += formWindowProfil[i].id
            }
        }
        for (let i = 0; i < formWindowFurnitura.length; i++) {
            if (formWindowFurnitura[i].checked) {
                windowPrice.innerText += formWindowFurnitura[i].id
            }
        }
    })
}

calcWindow()
