window.addEventListener("DOMContentLoaded", () => {

    const selection = document.querySelector(".selection")
    const btnClose = document.querySelector(".selection__icon")
    const imageSelected = document.querySelector(".image__selected")
    const images = document.querySelectorAll(".main__image")

    images.forEach(img => {

        img.addEventListener("click", (e) => {

            const image = img.querySelector(".image__item")
            imageSelected.setAttribute("src", image.getAttribute("src"))
            selection.classList.add("selection__show")

        })

    })

    btnClose.addEventListener("click", () => {

        selection.classList.remove("selection__show")

    })

})