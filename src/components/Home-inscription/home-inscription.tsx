import React from "react";
import "./home-inscription.css";


function Inscription(){
    return(
        <div className="container_inscription">
            <div className="background"></div>
            <p className="follow_your_game"> Suivez votre partie en direct </p>
            <form className="player_id"> 
                <input className="player_id_input" type="text" placeholder="Pseudo League of Legends EUW"></input>
                <input className="player_id_send" type="submit" value="Go !"></input>
            </form>
        </div>
    );
}

export default Inscription