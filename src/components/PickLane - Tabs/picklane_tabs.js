import { useState } from "react";
import "./picklane_tabs.css";

function PicklaneTabs() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container_picklane_tabs">
      <div className="picklane_tabs">
        <button className={toggleState === 1 ? "Pick_tabs Pick_active-tabs" : "Pick_tabs"} id="toplane" onClick={() => toggleTab(1)}></button>
        <button className={toggleState === 2 ? "Pick_tabs Pick_active-tabs" : "Pick_tabs"} id="jungle" onClick={() => toggleTab(2)}></button>
        <button className={toggleState === 3 ? "Pick_tabs Pick_active-tabs" : "Pick_tabs"} id="middlane" onClick={() => toggleTab(3)}></button>
        <button className={toggleState === 4 ? "Pick_tabs Pick_active-tabs" : "Pick_tabs"} id="botlane" onClick={() => toggleTab(4)}></button>
        <button className={toggleState === 5 ? "Pick_tabs Pick_active-tabs" : "Pick_tabs"} id="support" onClick={() => toggleTab(5)}></button>
      </div>

      <div className="content-tabs">
        <div  className={toggleState === 0 ? "pick_content  active_pick_content" : "pick_content"}>
          <div className="lane_img"></div>
        </div>
        <div  className={toggleState === 1 ? "pick_content  active_pick_content" : "pick_content"}>
          <h1 class="picklane_lane" id="pick_toplane">TOPLANE</h1>
          <div className="lane_img" id="top_map"></div>
        </div>
        <div  className={toggleState === 2 ? "pick_content  active_pick_content" : "pick_content"}>
          <h1 class="picklane_lane" id="pick_jungle">JUNGLE</h1>
          <div className="lane_img" id="jungle_map"></div>
        </div>
        <div  className={toggleState === 3 ? "pick_content  active_pick_content" : "pick_content"}>
          <h1 class="picklane_lane" id="pick_midd">MIDLANE</h1>
          <div className="lane_img" id="mid_map"></div>
        </div>
        <div  className={toggleState === 4 ? "pick_content  active_pick_content" : "pick_content"}>
          <h1 class="picklane_lane" id="pick_botlane">BOTLANE</h1>
          <div className="lane_img" id="bot_map"></div>
        </div>
        <div  className={toggleState === 5 ? "pick_content  active_pick_content" : "pick_content"}>
          <h1 class="picklane_lane" id="pick_support">SUPPORT</h1>
          <div className="lane_img" id="sup_map"></div>
        </div>
      </div>    
    </div>
  );
}

export default PicklaneTabs;