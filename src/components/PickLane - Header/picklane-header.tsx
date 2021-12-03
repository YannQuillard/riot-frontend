import React from "react";
import { Link } from "react-router-dom";
import "./picklane-header.css";


function PickLaneHeader(){
    return(
        <div className="container_PickLane_Header">
            <p className="background_PickLane_Header_Text"> CHOISSISSEZ VOTRE RÔLE </p>
            <div className="background_PickLane_Header"></div>
            <a className="Global_Exit" type="submit" href="./">Mettre fin à la session</a>
        </div>
    );
}

export default PickLaneHeader