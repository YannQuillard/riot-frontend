import React, {useState} from "react";
import "./Champions.css";

export type ChampionProps = {
    riotId: number;
    name: string;
    image:string;
    onSelect: (riotId: number, image: string) => void
}

const ChampionCard: React.FC<ChampionProps> = (props) => {
    const [onSelectState, setOnSelectState] = useState({
        image: "",
        riotId: 0
    });
    return(
        <div draggable key={props.riotId}className="champion_Display" style={{background: `center / cover no-repeat url(${props.image})`}} 
        onDragStart={(ev) => {ev.dataTransfer.setData("id", props.name)}}
        onClick={() => {
            props.onSelect(props.riotId, props.image);
            setOnSelectState({
            image: props.image,
            riotId: props.riotId
        })}}
        >
            <p className="display_name"> {props.name} </p> 
        </div>
    );
}

export default ChampionCard