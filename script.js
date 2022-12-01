// Navigation bar
let navbar = document.getElementById('navbar')
// Hide on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if(prevScrollpos > currentScrollPos){
    navbar.style.top = "0"
  } else{
    navbar.style.top = "-300px"
  }
  prevScrollpos = currentScrollPos
}

// Hamburger Menu
let hamburger = document.querySelector(".hamburger")
let navMenu = document.querySelector(".nav-item")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener ("click"), () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
})
