import React from "react";
import "./draft_bantext.css";


function BanText(){
    return(
        <div className="container_BanText">
            <p className="BanTextAlly"> Bans alliés </p>
            <p className="BanTextEnnemy"> Ban ennemis </p>
        </div>
    );
}

export default BanText;