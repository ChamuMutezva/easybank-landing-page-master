const openClose = document.querySelector(".openClose");
const srcOpen  = "images/icon-hamburger.svg";
const srcClose = "images/icon-close.svg";
const modal = document.querySelector(".nav__modal")
const headerContent = document.querySelector(".headerContent");
const mockupsImg = document.querySelector(".mockups__img");
console.log(mockupsImg);


console.log(openClose);
console.log(modal);
openClose.addEventListener("click", function(){
    console.log("button working");
    if (openClose.src.includes(srcOpen)) {
        openClose.setAttribute('src', srcClose)
        modal.style.display = "flex";
        modal.classList.add("modal__shadow");
       //modal.style.boxShadow = "16px -9px 11px 11px dimgrey" 
       /* headerContent.style.backgroundColor = "hsl(233, 8%, 62%)"*/
      // mockupsImg.style.zIndex = -1; Hide image
      mockupsImg.classList.add("hideImage");
      mockupsImg.classList.remove("showImage");
        headerContent.classList.add("mediumDarkMode");
       /* headerContent.classList.remove("headerContent");*/
        console.log("hamburger");
    } else {
        console.log("close")
        openClose.setAttribute('src', srcOpen)
        headerContent.classList.remove("mediumDarkMode");
        mockupsImg.classList.add("showImage");
        mockupsImg.classList.remove("hideImage");
        modal.classList.remove("modal__shadow");
       // mockupsImg.style.zIndex = 1;
        modal.style.display = "none";
    }
})