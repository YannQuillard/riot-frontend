import { useState } from "react";
import "./tabs.css";
import Accueil_CC from "../Accueil - ChampionCard/accueil_championCard";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container_accueil_tabs">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} id="toplane" onClick={() => toggleTab(1)}></button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} id="jungle" onClick={() => toggleTab(2)}></button>
        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} id="middlane" onClick={() => toggleTab(3)}></button>
        <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} id="botlane" onClick={() => toggleTab(4)}></button>
        <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} id="support" onClick={() => toggleTab(5)}></button>
      </div>

      <div className="content-tabs">
        <div  className={toggleState === 1 ? "content  active-content" : "content"}>
          <h1>Champions avec le plus haut winrate en <span id="w_l_lane"> Toplane</span></h1>
          <Accueil_CC />
        </div>
        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <h1>Champions avec le plus haut winrate en <span id="w_l_lane"> Jungle</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
        <div className={toggleState === 3 ? "content  active-content" : "content"}>
          <h1>Champions avec le plus haut winrate en <span id="w_l_lane"> Midlane</span></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus.
          </p>
        </div>
        <div className={toggleState === 4 ? "content  active-content" : "content"}>
          <h1>Champions avec le plus haut winrate en <span id="w_l_lane"> Botlane</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
        <div className={toggleState === 5 ? "content  active-content" : "content"}>
          <h1>Champions avec le plus haut winrate en <span id="w_l_lane"> Support</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;