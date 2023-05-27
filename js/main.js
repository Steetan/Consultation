document.querySelectorAll(".questions__block-top").forEach(function(event) {
    event.addEventListener("click", function() {
        event.nextElementSibling.classList.toggle("questions__block-text--active")
        event.classList.toggle("questions__block-top--active")
    })
})