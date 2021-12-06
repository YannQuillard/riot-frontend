import { useState } from "react";
import "./DraftTabs.css";

function DraftTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
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
  );
}

export default DraftTabs;