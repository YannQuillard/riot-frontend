import React, { useEffect, useState} from "react";
import "./DraftPopup.css";
import "./draft_pop_teams.js"
import FavDisplay from "../../Champions/Champions";
import FavNav from "../../Favorites/FavoritesNav/FavoritesNavbar";
import { getChampions } from "../../../api";
import { Champions } from "../../../decl";


export type ChampionsState = {
    championsArray: Champions;
  }
  
  export type ChampionProps = {
    onSelect: (riotId: number, image: string) => void
  }
  

const PopUp: React.FC<ChampionProps> = (props) => {
      const [isSelect, setIsSelect] = useState({
        image: "",
        riotId: 0
    })

    const [champions, setChampions] = useState<ChampionsState>({championsArray: []});
    const fetchPages = async () => {
        const fetchedChampions = await getChampions();
        setChampions({ championsArray: fetchedChampions });
    };

    useEffect(() => {
        fetchPages()
      }, []);

    return(
        <div className="container_popup">
            <div className="popup_Toogle"></div>
            <div className="popup_display">
                <h2> Choisissez un champion</h2>
                <FavNav />
                <FavDisplay championsArray={champions.championsArray} onSelect={(riotId, image) => {
                  setIsSelect({image: image, riotId: riotId});
                  props.onSelect(riotId, image)
                }}/>
                <p> - Cliquez en dehors pour fermer -</p>
            </div>
        </div>
    );
}

export default PopUp;