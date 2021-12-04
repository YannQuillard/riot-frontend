import React from "react";
import "./draft_bans.css";
import "../Draft - Pop-Up/draft_pop_teams"


function Bans(){
    return(
        <div className="container_Bans">
            <div className="My_Team_Bans">
                <div className="All_Ally_Bans Ban1"></div>
                <div className="All_Ally_Bans Ban2"></div>
                <div className="All_Ally_Bans Ban3"></div>
                <div className="All_Ally_Bans Ban4"></div>
                <div className="All_Ally_Bans Ban5"></div>
            </div>
            <p className="VS">VS</p>
            <div className="Ennemy_Team_Bans">
                <div className="All_Ennemy_Bans Ban6"></div>
                <div className="All_Ennemy_Bans Ban7"></div>
                <div className="All_Ennemy_Bans Ban8"></div>
                <div className="All_Ennemy_Bans Ban9"></div>
                <div className="All_Ennemy_Bans Ban10"></div>
            </div>
        </div>
    );
}

export default Bans