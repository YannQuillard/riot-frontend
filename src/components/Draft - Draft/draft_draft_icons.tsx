import React from "react";
import "./draft_draft_icons.css";


function DraftIcons(){
    return(
        <div className="container_Icons">
            <div className="Ally_Icons">
                <div className="Icons_Ally Top"></div>
                <div className="Icons_Ally Jungle"></div>
                <div className="Icons_Ally Mid"></div>
                <div className="Icons_Ally Bot"></div>
                <div className="Icons_Ally Support"></div>
            </div>
            <div className="Ennemy_Team">
                <div className="Icons_Ennemy Top"></div>
                <div className="Icons_Ennemy Jungle"></div>
                <div className="Icons_Ennemy Mid"></div>
                <div className="Icons_Ennemy Bot"></div>
                <div className="Icons_Ennemy Support"></div>
            </div>
        </div>
    );
}

export default DraftIcons;