import React, {useState, useEffect} from "react";
import "./FavoritesPlayer.css";
import { useDrop } from 'react-dnd';
import ChampionCard from "../../Champions/ChampionCard";


const FavoritesBox: React.FC = () => {


    return(
        <div className="Fav" onDragOver={(e) => {e.preventDefault(); console.log('Over')}} onDrop={(e) => console.log('drop', e.dataTransfer.getData("id"))}>

        </div>
    );
}

export default FavoritesBox