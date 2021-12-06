import React, {useEffect, useState} from 'react';

import '../App.css';

import Bans from '../components/Draft/DraftBans/DraftBans';
import DraftIcons from '../components/Draft/DraftIcons';
import Teams from '../components/Draft/DraftTeams';
import DraftHeader from '../components/Draft/DraftHeader/DraftHeader';
import PopUp from '../components/Draft/DraftPopUp/DraftPopup';
import DraftTabs from '../components/Draft/DraftTabs/DraftTabs';
import { BestChampion } from '../decl';
import { postBestChampions } from '../api';
import DraftContainer from '../components/Draft/DraftContainer';

export type BestChampionsState = {
  maxNumber: number,
  username: string,
  lane: string,
  pick?: {
      team?: [],
      enemy?: []
  },
  ban?: []
}


const Draft = () => {
  /*return (
    <div className='wrap'>
        <DraftHeader />
        <DraftTabs />
        <div className="Separation_Draft_Page"></div>
        <div className="container_BanText">
            <p className="BanTextAlly"> Bans alliés </p>
            <p className="BanTextEnnemy"> Ban ennemis </p>
        </div>
        <Bans onOpen={(isOpen) => {
              setPopupOpen(isOpen);
            }}/>
        <DraftIcons />
        <Teams />
        <PopUp onSelect={(riotId, image) => {
            console.log(riotId);
        }}/>
     </div>
  );*/

  return (
    <div className='wrap'>
      <DraftContainer />
     </div>
  );
}

export default Draft;
