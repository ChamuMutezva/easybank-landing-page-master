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
       // mockupsImg.style.zIndex = 1;
        modal.style.display = "none";
    }
})