import React from "react";
import "./FavoritesPlayer.css";
import FavoritesBox from "./FavoriteBox";
import { Champion, Champions } from "../../../decl";

export type ChampionsProps = {
    championsArray: Champions;
}

const FavoritesPlayer: React.FC<ChampionsProps> = (props) => {
    return(
        <div className="container_PlayerFav">
            <h1 className="PlayerFav_Text">Rôles</h1>
            <div className="PlayerFav_flexbox">
                <div className="toplane_Fav_Icon Fav_Icon"></div>
                <FavoritesBox key={1}/>
                <FavoritesBox key={2}/>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
            </div>
            <div className="Fav_Outline"></div>
            <div className="PlayerFav_flexbox">
                <div className="jungle_Fav_Icon Fav_Icon"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
            </div>
            <div className="Fav_Outline"></div>
            <div className="PlayerFav_flexbox">
                <div className="middlane_Fav_Icon Fav_Icon"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
            </div>
            <div className="Fav_Outline"></div>
            <div className="PlayerFav_flexbox">
                <div className="botlane_Fav_Icon Fav_Icon"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
            </div>
            <div className="Fav_Outline"></div>
            <div className="PlayerFav_flexbox">
                <div className="support_Fav_Icon Fav_Icon"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
                <div className="Fav"></div>
            </div>
        </div>
    );
}

export default FavoritesPlayer