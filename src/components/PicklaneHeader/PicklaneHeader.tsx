import React from "react";
import "./PicklaneHeader.css";


const PickLaneHeader = () => {
    return(
        <div className="container_PickLane_Header">
            <p className="background_PickLane_Header_Text"> CHOISISSEZ VOTRE RÔLE </p>
            <div className="background_PickLane_Header"></div>
            <a className="Global_Exit" type="submit" href="./">METTRE FIN À LA SESSION</a>
        </div>
    );
}

export default PickLaneHeader