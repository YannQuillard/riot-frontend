import React from "react";
import "./draft_draft_teams.css";


function Teams(){
    return(
        <div className="container_Teams">
            <div className="My_Team">
                <div className="Ally_Player Ally_Top"><p className="Champ_Pick_Name"> Teemo </p></div>
                <div className="Ally_Player Ally_Jungle"><p className="Champ_Pick_Name"> Teemo </p></div>
                <div className="Ally_Player Ally_Mid"><p className="Champ_Pick_Name"> Teemo </p></div>
                <div className="Ally_Player Ally_Bot"><p className="Champ_Pick_Name"> Teemo </p></div>
                <div className="Ally_Player Ally_Support"><p className="Champ_Pick_Name"> Teemo </p></div>
            </div>
            <div className="Ennemy_Team">
                <div className="Ennemy_Player Ennemy_Top"><p className="Champ_Pick_Name"> Yasuo </p></div>
                <div className="Ennemy_Player Ennemy_Jungle"><p className="Champ_Pick_Name"> Yasuo </p></div>
                <div className="Ennemy_Player Ennemy_Mid"><p className="Champ_Pick_Name"> Yasuo </p></div>
                <div className="Ennemy_Player Ennemy_Bot"><p className="Champ_Pick_Name"> Yasuo </p></div>
                <div className="Ennemy_Player Ennemy_Support"><p className="Champ_Pick_Name"> Yasuo </p></div>
            </div>
        </div>
    );
}

export default Teams