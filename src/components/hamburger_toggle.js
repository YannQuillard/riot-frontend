window.onload=function() {
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".container_header");

hamburger.addEventListener("click", function() {
  
  menu.classList.toggle("is-active-menu");
  hamburger.classList.toggle("is-active");
  
});
}