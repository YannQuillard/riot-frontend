import React, {useEffect, useState} from "react";
import "./Champions.css";
import { Champion, Champions } from "../../decl";
import ChampionCard from "./ChampionCard";

export type ChampionsProps = {
    championsArray: Champions;
    onSelect: (riotId: number, image: string) => void
}

const ChampionsGrid: React.FC<ChampionsProps> = (props) => {
    const [isSelect, setIsSelect] = useState({
        image: "",
        riotId: 0
    })

    return(
        <div className="container_Fav_Display">
            {
                props.championsArray.map((champion: Champion) => (
                    <ChampionCard key={champion.riotId} riotId={champion.riotId} name={champion.name} image={champion.image} onSelect={(riotId, image) => {
                        setIsSelect({image: image, riotId: riotId});
                        props.onSelect(riotId, image)
                    }}/>
            ))}
            
        </div>
    );
}

export default ChampionsGrid