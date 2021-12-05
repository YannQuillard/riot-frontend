window.onload=function() { 
    var popupToogle = this.document.querySelector(".popup_Toogle");
    var popupDisplay = this.document.querySelector(".popup_display");

    document.querySelectorAll('.Ally_Player').forEach(ally => {
        ally.addEventListener('click', event => {
            popupToogle.classList.toggle("is-active-toogle");
            popupDisplay.classList.toggle("is-active-toogle");
        })
      })

      document.querySelectorAll('.Ennemy_Player').forEach(ennemy => {
        ennemy.addEventListener('click', event => {
            popupToogle.classList.toggle("is-active-toogle");
            popupDisplay.classList.toggle("is-active-toogle");
        })
      })

      document.querySelectorAll('.All_Ally_Bans').forEach(allyBan => {
        allyBan.addEventListener('click', event => {
            popupToogle.classList.toggle("is-active-toogle");
            popupDisplay.classList.toggle("is-active-toogle");
        })
      })

    document.querySelectorAll('.All_Ennemy_Bans').forEach(ennemyBan => {
        ennemyBan.addEventListener('click', event => {
            popupToogle.classList.toggle("is-active-toogle");
            popupDisplay.classList.toggle("is-active-toogle");
        })
      })

  
    if(popupToogle) {
        popupToogle.addEventListener("click", function() {
            popupToogle.classList.toggle("is-active-toogle");
            popupDisplay.classList.toggle("is-active-toogle");
        });
    }
}
