function calcWindow() {
    let formWindowStvorka    = document.querySelectorAll('.form-window-stvorka')
    let formWindowKamera     = document.querySelectorAll('.form-window-kamera')
    let formWindowProfil     = document.querySelectorAll('.form-window-profil')
    let formWindowFurnitura  = document.querySelectorAll('.form-window-furnitura')
    let inputWidth      = document.querySelector('.input-width')
    let inputHeight     = document.querySelector('.input-height')
    let formWindowBtn        = document.querySelector('.form-window__btn')
    let windowPrice          = document.querySelector('.window-price')

    // formWindowBtn.addEventListener('click', function() {
    //     windowPrice.textContent = ''
    //     for (let i = 0; i < formWindowStvorka.length; i++) {
    //         if (formWindowStvorka[i].checked) {
    //             windowPrice.textContent += formWindowStvorka[i].dataset.stvorka
    //         }
    //     }
    //     for (let i = 0; i < formWindowKamera.length; i++) {
    //         if (formWindowKamera[i].checked) {
    //             windowPrice.textContent += formWindowKamera[i].dataset.paket
    //         }
    //     }
    //     for (let i = 0; i < formWindowProfil.length; i++) {
    //         if (formWindowProfil[i].checked) {
    //             windowPrice.textContent += formWindowProfil[i].dataset.profil
    //         }
    //     }
    //     for (let i = 0; i < formWindowFurnitura.length; i++) {
    //         if (formWindowFurnitura[i].checked) {
    //             windowPrice.textContent += formWindowFurnitura[i].dataset.furnitura
    //         }
    //     }
    //     windowPrice.textContent += inputWidth.value
    //     windowPrice.textContent += inputHeight.value
    // })

    formWindowBtn.addEventListener('click', function() {
        windowPrice.textContent = ''
        let price = 0
        for (let i = 0; i < formWindowStvorka.length; i++) {
            if (formWindowStvorka[i].checked) {
                price += +formWindowStvorka[i].dataset.stvorka
            }
        }
        for (let i = 0; i < formWindowKamera.length; i++) {
            if (formWindowKamera[i].checked) {
                price += +formWindowKamera[i].dataset.paket
            }
        }
        for (let i = 0; i < formWindowProfil.length; i++) {
            if (formWindowProfil[i].checked) {
                price += +formWindowProfil[i].dataset.profil
            }
        }
        for (let i = 0; i < formWindowFurnitura.length; i++) {
            if (formWindowFurnitura[i].checked) {
                price += +formWindowFurnitura[i].dataset.furnitura
            }
        }
        price += +inputWidth.value
        price += +inputHeight.value

        windowPrice.textContent = price
    })
}

calcWindow()
