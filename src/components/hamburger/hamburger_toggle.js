window.onload=function() {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".container_nav");
  var toogle = this.document.querySelector(".toogle_off_nav")
  var body = document.body

  hamburger.addEventListener("click", function() {
    menu.classList.toggle("is-active-menu");
    hamburger.classList.toggle("is-active");
    toogle.classList.toggle("is-active-toogle");

    if(body.classList.contains("is_deactive_overflow")){
      body.classList.remove("is_deactive_overflow")
    }
    else{
      body.classList.add("is_deactive_overflow")
    }
  });

  toogle.addEventListener("click", function() {
    menu.classList.toggle("is-active-menu");
    hamburger.classList.toggle("is-active");
    toogle.classList.toggle("is-active-toogle");
    body.classList.remove("is_deactive_overflow")
  });
}