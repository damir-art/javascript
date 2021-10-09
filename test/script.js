for (const i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i) // ссылка на 5
    }, 1000) // 5, 5, 5, 5, 5
}
