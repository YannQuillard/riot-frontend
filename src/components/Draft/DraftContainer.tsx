import React, {useState, useEffect} from "react";
import "./DraftTeams.css";
import "./DraftTabs/DraftTabs.css";
import "./DraftIcons.css";
import "./DraftPopUp/DraftPopup.css";
import "./DraftHeader/DraftHeader.css";
import "./DraftBans/DraftBans.css";
import ChampionsGrid from "../Champions/Champions";
import { getChampions, postBestChampions } from "../../api";
import { Champions } from "../../decl";

export type ChampionsState = {
    championsArray: Champions;
  }

export type BestChampionsProps = {
    maxNumber: number,
    username: string,
    lane: string,
    pick?: {
        team?: [],
        enemy?: []
    },
    ban?: []
}


  

const DraftContainer : React.FC = (props) => {
    const [banArray, setBanArray] = useState(Array<Number>());
    const pickTeamArray:any= [];
    const pickEnnemyArray:any = [];
    const [isNewValue, setisNewvalue] = useState(Boolean);
    const [toggleState, setToggleState] = useState(1);
    const [isSelect, setIsSelect] = useState({
        image: "",
        riotId: 0
    })

    const [activeDrop, setActiveDrop] = useState("");
    const [isPopupActive, setPopupActive] = useState(false);
    const toggleTab = (index: number) => {
        setToggleState(index);
    };
    const [champions, setChampions] = useState<ChampionsState>({championsArray: []});
    const fetchPages = async () => {
        const fetchedChampions = await getChampions();
        setChampions({ championsArray: fetchedChampions });
    };

    const setActive = (e:any) => {
        setPopupActive(!isPopupActive);
        setActiveDrop(e.target.id);
    }

    useEffect(() => {
        if(activeDrop) {

            if(activeDrop.includes("Ban")) {
                console.log('ban')

                banChampion(banArray);
                console.log(banArray);
                setisNewvalue(!isNewValue)
            }
            else if(activeDrop.includes("Ally")) {
                console.log('Ally')
                pickEnnemyArray.push(isSelect.riotId);
                setisNewvalue(!isNewValue)
            }
            else if(activeDrop.includes("Ennemy")) {
                console.log('enemy')
                pickTeamArray.push(isSelect.riotId);
                setisNewvalue(!isNewValue)
            }
                let element = document.getElementById(activeDrop);
            if(element) {
                element.style.background = `center / cover no-repeat url(${isSelect.image})`;
            }
        }
    
    }, [isSelect])
    useEffect(() => {
        sumbitCompositions()
    }, [isNewValue])
    const banChampion = async (banTab: Array<Number>) => {

        await setBanArray([banTab.push(isSelect.riotId)]);
    }
    const sumbitCompositions = async () => {
        try {
            const sendData = await postBestChampions(
                {
                    maxNumber: 5,
                    username: "Patou9145",
                    lane: "JGL",
                    pick: {
                        team: pickTeamArray,
                        enemy: pickEnnemyArray
                    },
                    ban: banArray
                }
            );
            console.log(sendData);
            
          } catch (error) {
            alert(error);
          }
    }
    useEffect(() => {
        fetchPages()
    }, []);
    return(
        <div>
            <div className="container_Draft_Header">
                <p className="background_Draft_Header_Text"> VOTRE DRAFT </p>
                <div className="background_Draft_Header"></div>
                <a className="Global_Exit" type="submit" href="./">PARTIE TERMINÉE</a>
                <a className="Return_Picklane" type="submit" href="./pick-lane">&larr;</a>
            </div>
            <div className="container_draft_tabs">
                <div className="draft_tabs">
                    <button className={toggleState === 1 ? "dra_tabs draft_active_tabs" : "dra_tabs"} id="toplane_draft" onClick={() => toggleTab(1)}></button>
                    <button className={toggleState === 2 ? "dra_tabs draft_active_tabs" : "dra_tabs"} id="jungle_draft" onClick={() => toggleTab(2)}></button>
                    <button className={toggleState === 3 ? "dra_tabs draft_active_tabs" : "dra_tabs"} id="middlane_draft" onClick={() => toggleTab(3)}></button>
                    <button className={toggleState === 4 ? "dra_tabs draft_active_tabs" : "dra_tabs"} id="botlane_draft" onClick={() => toggleTab(4)}></button>
                    <button className={toggleState === 5 ? "dra_tabs draft_active_tabs" : "dra_tabs"} id="support_draft" onClick={() => toggleTab(5)}></button>
                </div>

                <div className="content_draft_tabs">
                <div  className={toggleState === 1 ? "content_draft  active-content_draft" : "content_draft"}>
                    <h1>Champions recommandés pour la <span id="w_l_lane"> Toplane</span></h1>
                
                    <div className="container_RecoDisplay">
                        <div className="Edge_Display"><p className="Champ_Name"> Teemo </p> </div>
                        <div className="Center_Display"><p className="Champ_Name"> Teemo </p> </div>
                        <div className="Middle_Display"> <p className="Champ_Name"> Teemo </p> </div>
                        <div className="Center_Display"><p className="Champ_Name"> Teemo </p> </div>
                        <div className="Edge_Display"><p className="Champ_Name"> Teemo </p> </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "content_draft  active-content_draft" : "content_draft"}>
                    <h1>Champions recommandés pour la <span id="w_l_lane"> Jungle</span></h1>
                </div>
                <div className={toggleState === 3 ? "content_draft  active-content_draft" : "content_draft"}>
                    <h1>Champions recommandés pour la <span id="w_l_lane"> Midlane</span></h1>
                </div>
                <div className={toggleState === 4 ? "content_draft  active-content_draft" : "content_draft"}>
                    <h1>Champions recommandés pour la <span id="w_l_lane"> Botlane</span></h1>
                </div>
                <div className={toggleState === 5 ? "content_draft  active-content_draft" : "content_draft"}>
                    <h1>Champions recommandés pour le <span id="w_l_lane"> Support</span></h1>
                </div>
                </div>
            </div>
            <div className="container_Bans">
            <div className="My_Team_Bans">
                <div className="All_Ally_Bans" id="Ban1" onClick={(e) => {setActive(e)}}></div>
                <div className="All_Ally_Bans" id="Ban2" onClick={(e) => {setActive(e)}}></div>
                <div className="All_Ally_Bans" id="Ban3" onClick={(e) => {setActive(e)}}></div>
                <div className="All_Ally_Bans" id="Ban4" onClick={(e) => {setActive(e)}}></div>
                <div className="All_Ally_Bans" id="Ban5" onClick={(e) => {setActive(e)}}></div>
            </div>
            <p className="VS">VS</p>
            <div className="Ennemy_Team_Bans">
                <div className="All_Ennemy_Bans" id="Ban6" onClick={(e) => {setActive(e)}}></div>
                <div className="All_Ennemy_Bans" id="Ban7" onClick={(e) => {setActive(e)}}></div>
                <div className="All_Ennemy_Bans" id="Ban8" onClick={(e) => {setActive(e)}}></div>
                <div className="All_Ennemy_Bans" id="Ban9" onClick={(e) => {setActive(e)}}></div>
                <div className="All_Ennemy_Bans" id="Ban10" onClick={(e) => {setActive(e)}}></div>
            </div>
            </div>
            <div className="container_Icons">
            <div className="Ally_Icons">
                <div className="Icons_Ally Top"></div>
                <div className="Icons_Ally Jungle"></div>
                <div className="Icons_Ally Mid"></div>
                <div className="Icons_Ally Bot"></div>
                <div className="Icons_Ally Support"></div>
            </div>
            <div className="Ennemy_Team">
                <div className="Icons_Ennemy Top"></div>
                <div className="Icons_Ennemy Jungle"></div>
                <div className="Icons_Ennemy Mid"></div>
                <div className="Icons_Ennemy Bot"></div>
                <div className="Icons_Ennemy Support"></div>
            </div>
            </div>
            <div className="container_Teams">
                <div className="My_Team">
                    <div className="Ally_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name" id="Ally_Top" > {/*Teemo*/} </p></div>
                    <div className="Ally_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name"  id="Ally_Jungle"> {/*Teemo*/} </p></div>
                    <div className="Ally_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name" id="Ally_Mid" > {/*Teemo*/} </p></div>
                    <div className="Ally_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name" id="Ally_Bot" > {/*Teemo*/} </p></div>
                    <div className="Ally_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name" id="Ally_Support"> {/*Teemo*/} </p></div>
                </div>
                <div className="Ennemy_Team">
                    <div className="Ennemy_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name" id="Ennemy_Top" > {/*Yasuo*/} </p></div>
                    <div className="Ennemy_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name"  id="Ennemy_Jungle"> {/*Yasuo*/} </p></div>
                    <div className="Ennemy_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name"  id="Ennemy_Mid"> {/*Yasuo*/} </p></div>
                    <div className="Ennemy_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name"  id="Ennemy_Bot"> {/*Yasuo*/} </p></div>
                    <div className="Ennemy_Player" onClick={(e) => {setActive(e)}}><p className="Champ_Pick_Name"  id="Ennemy_Support"> {/*Yasuo*/} </p></div>
                </div>
            </div>
            <div className="container_popup">
            <div className={`popup_Toogle ${isPopupActive ? " is-active-toogle" : ""}`} onClick={() => setPopupActive(!isPopupActive)}></div>
            <div className={`popup_display ${isPopupActive ? " is-active-toogle" : ""}`}>
                <h2> Choisissez un champion</h2>
                <ChampionsGrid championsArray={champions.championsArray} onSelect={(riotId, image) => {
                  setIsSelect({image: image, riotId: riotId});
                }}/>

                <p> - Cliquez en dehors pour fermer -</p>
            </div>
        </div>
        </div>
    );
}

export default DraftContainer;