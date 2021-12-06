import React from "react";
import "./DraftHeader.css";


function DraftHeader(){
    return(
        <div className="container_Draft_Header">
            <p className="background_Draft_Header_Text"> VOTRE DRAFT </p>
            <div className="background_Draft_Header"></div>
            <a className="Global_Exit" type="submit" href="./">PARTIE TERMINÉE</a>
            <a className="Return_Picklane" type="submit" href="./PickLane">&larr;</a>
        </div>
    );
}

export default DraftHeader;