
  
  
/* Footer Current year script */
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

/* Image Caurosel script */
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}


/* Side Navigation script */
function toggeleNav(){
    var updateElement = document.querySelector(".menu-wrapper");
    
    //toggle adds a class if it's not there or removes it if it is
    updateElement.classList.toggle("open")
    
    // Sliding Menu
    var mainElement = document.querySelector("#main")
    mainElement.classList.toggle("open")
    
    //Overlay
    var overlayElement = document.querySelector(".overlay")
    overlayElement.classList.toggle("open")
  }
  