import React from "react";
import "./draft_popup.css";
import "./draft_pop_teams.js"
import FavDisplay from "../Favorites - Fav/Favorites - ChampDisplay/favorites-display";
import FavNav from "../Favorites - Fav/Favorites - NavBar/favorites-navbar";

function PopUp(){
    return(
        <div className="container_popup">
            <div className="popup_Toogle"></div>
            <div className="popup_display">
                <h2> Choisissez un champion</h2>
                <FavNav />
                <FavDisplay />
                <p> - Cliquez en dehors pour fermer -</p>
            </div>
        </div>
    );
}

export default PopUp;