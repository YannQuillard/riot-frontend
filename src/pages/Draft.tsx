import React from 'react';
import '../App.css';
import Bans from '../components/Draft - Bans/draft_bans';
import BanText from '../components/Draft - BanText/draft_bantext';
import DraftIcons from '../components/Draft - Draft/draft_draft_icons';
import Teams from '../components/Draft - Draft/draft_draft_teams';
import DraftHeader from '../components/Draft - Header/draft-header';
import PopUp from '../components/Draft - Pop-Up/draft_popup';
import DraftTabs from '../components/Draft - Tabs/draft-tabs';
import HUD from './HUD';

function Draft() {
  return (
   <body>
     <div className="App">
       <span id="HUD_NO_DISPLAY">"<HUD /></span>
        <DraftHeader />
        <DraftTabs />
        <div className="Separation_Draft_Page"></div>
        <BanText />
        <Bans />
        <DraftIcons />
        <Teams />
        <PopUp />
     </div>
   </body>
  );
}

export default Draft
