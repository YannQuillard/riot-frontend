import { useEffect, useState } from "react";

function NavButtons() {
  const [toggleState, setToggleState] = useState(6);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
        <div>
            <button className={toggleState === 6 ? "FavNav_Icon FavNav_Icon_Active" : "FavNav_Icon"} id="FavNav_all" onClick={() => toggleTab(6)}></button>
            <button className={toggleState === 1 ? "FavNav_Icon FavNav_Icon_Active" : "FavNav_Icon"} id="FavNav_toplane" onClick={() => toggleTab(1)}></button>
            <button className={toggleState === 2 ? "FavNav_Icon FavNav_Icon_Active" : "FavNav_Icon"} id="FavNav_jungle" onClick={() => toggleTab(2)}></button>
            <button className={toggleState === 3 ? "FavNav_Icon FavNav_Icon_Active" : "FavNav_Icon"} id="FavNav_middlane" onClick={() => toggleTab(3)}></button>
            <button className={toggleState === 4 ? "FavNav_Icon FavNav_Icon_Active" : "FavNav_Icon"} id="FavNav_botlane" onClick={() => toggleTab(4)}></button>
            <button className={toggleState === 5 ? "FavNav_Icon FavNav_Icon_Active" : "FavNav_Icon"} id="FavNav_support" onClick={() => toggleTab(5)}></button>
        </div>
  );
}

export default NavButtons