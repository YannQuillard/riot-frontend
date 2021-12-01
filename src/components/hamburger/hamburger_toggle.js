window.onload=function() {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".container_nav");
  var toogle = this.document.querySelector(".toogle_off_nav")

  hamburger.addEventListener("click", function() {
    menu.classList.toggle("is-active-menu");
    hamburger.classList.toggle("is-active");
    toogle.classList.toggle("is-active-toogle");
  });

  toogle.addEventListener("click", function() {
    menu.classList.toggle("is-active-menu");
    hamburger.classList.toggle("is-active");
    toogle.classList.toggle("is-active-toogle");
  });
}