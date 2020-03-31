const openClose = document.querySelector(".openClose");
const srcOpen  = "images/icon-hamburger.svg";
const srcClose = "images/icon-close.svg";
const modal = document.querySelector(".nav__modal")
const headerContent = document.querySelector(".headerContent");


console.log(openClose);
console.log(modal);
openClose.addEventListener("click", function(){
    console.log("button working");
    if (openClose.src.includes(srcOpen)) {
        openClose.setAttribute('src', srcClose)
        modal.style.display = "flex";
       /* headerContent.style.backgroundColor = "hsl(233, 8%, 62%)"*/
        headerContent.classList.add("mediumDarkMode");
       /* headerContent.classList.remove("headerContent");*/
        console.log("hamburger");
    } else {
        console.log("close")
        openClose.setAttribute('src', srcOpen)
        headerContent.classList.remove("mediumDarkMode");
        modal.style.display = "none";
    }
})