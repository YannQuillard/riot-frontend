import React from "react";
import "./favorites-navbar.css";
import NavButtons from "./favorites-buttons";

function FavNav(){
    return(
        <div className="container_FavNav">
            <h1 className="PlayerFav_Text">Choissisez vos champions favoris</h1>
            <div className="container_FavNav_Nav"> 
                <div className="FavNav_Search_Icon"></div>
                <input className="FavNav_Seach" type="text" placeholder="Rechercher un champion"></input>
                <NavButtons />
            </div>
        </div>
    );
}

export default FavNav