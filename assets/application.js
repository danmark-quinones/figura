const openMenuButton = document.querySelector("#open-menu")
const closeMenuButton = document.querySelector("#close-menu")
const menuContainer = document.querySelector("#mobile-menu")

openMenuButton.addEventListener("click" , function(){
    menuContainer.classList.add("show")
    menuContainer.classList.remove("hide")
})

closeMenuButton.addEventListener("click" , function(){
    menuContainer.classList.add("hide")
    menuContainer.classList.remove("show")
})