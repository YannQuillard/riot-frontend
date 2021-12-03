import React from 'react';
import '../App.css';
import PickLaneHeader from '../components/PickLane - Header/picklane-header';
import PicklaneTabs from '../components/PickLane - Tabs/picklane_tabs';
import HUD from './HUD';

function PickLane() {
  return (
   <body>
     <div className="App">
       <span id="HUD_NO_DISPLAY">"<HUD /></span>
       <PickLaneHeader />
       <PicklaneTabs />
     </div>

   </body>
    

  );
}

export default PickLane;
