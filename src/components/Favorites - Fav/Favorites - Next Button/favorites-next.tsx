import React from "react";
import { Link } from "react-router-dom";
import "./favorites-next.css";

function FavNext(){
    return(
        <div className="container_Fav_Next">
             <a className="Fav_Next" type="submit" href="./PickLane">Choisir ma lane</a>
        </div>
    );
}

export default FavNext