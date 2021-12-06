import React, {useEffect, useState} from "react";
import "./DraftBans.css";
export type BanProps = {
    onOpen: (isOpen: boolean) => void;
    //isMenuOpen: boolean;
};

const Bans: React.FC<BanProps> = (props) => {
    const [isOpen, setPopupOpen] = useState(false);
    /*useEffect(() => {
        //setPopupOpen(props.isMenuOpen);
        
        if(isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [props.isMenuOpen, isOpen])*/
    const openPopup = () => {
        setPopupOpen(!isOpen);
        props.onOpen(!isOpen);
    }
    return(
        <div className="container_Bans">
            <div className="My_Team_Bans">
                <div className="All_Ally_Bans Ban1" onClick={openPopup}></div>
                <div className="All_Ally_Bans Ban2"></div>
                <div className="All_Ally_Bans Ban3"></div>
                <div className="All_Ally_Bans Ban4"></div>
                <div className="All_Ally_Bans Ban5"></div>
            </div>
            <p className="VS">VS</p>
            <div className="Ennemy_Team_Bans">
                <div className="All_Ennemy_Bans Ban6"></div>
                <div className="All_Ennemy_Bans Ban7"></div>
                <div className="All_Ennemy_Bans Ban8"></div>
                <div className="All_Ennemy_Bans Ban9"></div>
                <div className="All_Ennemy_Bans Ban10"></div>
            </div>
        </div>
    );
}

export default Bans;