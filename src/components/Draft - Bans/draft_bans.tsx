import React from "react";
import { Link } from "react-router-dom";
import "./draft_bans.css";


function Bans(){
    return(
        <div className="container_Bans">
            <div className="My_Team_Bans">
                <div className="All_Ally_Bans"></div>
                <div className="All_Ally_Bans"></div>
                <div className="All_Ally_Bans"></div>
                <div className="All_Ally_Bans"></div>
                <div className="All_Ally_Bans"></div>
            </div>
            <p className="VS">VS</p>
            <div className="Ennemy_Team_Bans">
                <div className="All_Ennemy_Bans"></div>
                <div className="All_Ennemy_Bans"></div>
                <div className="All_Ennemy_Bans"></div>
                <div className="All_Ennemy_Bans"></div>
                <div className="All_Ennemy_Bans"></div>
            </div>
        </div>
    );
}

export default Bans