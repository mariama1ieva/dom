"use strict"

let light = document.querySelector(".mood i");
let dark = document.querySelector(".mood i")
let body = document.querySelector("body")
let i = document.querySelector("i")

dark.addEventListener("click", function () {
    if (!i.classList.contains(".light")) {
        i.classList.add(".light")
        i.classList.remove(".dark")
        dark.style.color = "black"
        body.style.backgroundColor = "yellow";
    }else{
        i.classList.add(".dark")
        i.classList.remove(".light")
        dark.style.color = "yellow"
        body.style.backgroundColor = "black";
    }

})


