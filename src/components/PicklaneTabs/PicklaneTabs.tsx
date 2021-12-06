import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PicklaneTabs.css";

const PicklaneTabs = () => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const handleSubmit = (e: any) => {
    console.log(e.target.value)
    navigate('/draft');
  }

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
          <h1 className="picklane_lane" id="pick_toplane">TOPLANE</h1>
          <button className="confirm_lane confirm_lane_top" value={'top'} type="submit" onClick={(e) => handleSubmit(e)}>CONFIRMER</button>
          <div className="lane_img" id="top_map"></div>
        </div>
        <div  className={toggleState === 2 ? "pick_content  active_pick_content" : "pick_content"}>
          <h1 className="picklane_lane" id="pick_jungle">JUNGLE</h1>
          <button className="confirm_lane confirm_lane_jungle" value={'jgl'}  type="submit" onClick={(e) => handleSubmit(e)}>CONFIRMER</button>
          <div className="lane_img" id="jungle_map"></div>
        </div>
        <div  className={toggleState === 3 ? "pick_content  active_pick_content" : "pick_content"}>
          <h1 className="picklane_lane" id="pick_midd">MIDLANE</h1>
          <button className="confirm_lane confirm_lane_middlane" value={'mid'}  type="submit" onClick={(e) => handleSubmit(e)}>CONFIRMER</button>
          <div className="lane_img" id="mid_map"></div>
        </div>
        <div  className={toggleState === 4 ? "pick_content  active_pick_content" : "pick_content"}>
          <h1 className="picklane_lane" id="pick_botlane">BOTLANE</h1>
          <button className="confirm_lane confirm_lane_botlane" value={'adc'} type="submit" onClick={(e) => handleSubmit(e)}>CONFIRMER</button>
          <div className="lane_img" id="bot_map"></div>
        </div>
        <div  className={toggleState === 5 ? "pick_content  active_pick_content" : "pick_content"}>
          <h1 className="picklane_lane" id="pick_support">SUPPORT</h1>
          <button className="confirm_lane confirm_lane_support" value={'sup'} type="submit" onClick={(e) => handleSubmit(e)}>CONFIRMER</button>
          <div className="lane_img" id="sup_map"></div>
        </div>
      </div>    
    </div>
  );
}

export default PicklaneTabs;