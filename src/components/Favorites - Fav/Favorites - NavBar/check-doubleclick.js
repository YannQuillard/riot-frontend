document.addEventListener('click', function(event) {
    var element = event.target;

    element.addEventListener('click', function (check) {
        if(element.classList.contains('FavNav_Icon_Active')){
            element.classList.remove('FavNav_Icon_Active');
        }
        else {
            element.classList.add('FavNav_Icon_Active')
        }
    });
}); 