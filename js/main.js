document.querySelectorAll(".questions__block-top").forEach(function(event) {
    event.addEventListener("click", function() {
        event.nextElementSibling.classList.toggle("questions__block-text--active")
        event.classList.toggle("questions__block-top--active")
    })
})

document.querySelector(".btn--contacts").addEventListener("click", function(event) {
    if(document.querySelector(".contacts__input--text").value == "" 
    || document.querySelector(".contacts__input--tel").value == "") {
        event.preventDefault()
        alert("Не введены обязательные поля!")
    }
})