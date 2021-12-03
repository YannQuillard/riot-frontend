import React from "react";
import "./legalMentions.css";

function LegalMentions_About() {
  return (
    <div className="container_About">
      <div className="About">
        <h1 className="title" id="title_About">About</h1>
      
        <p className="text" id="text_About">This website was realized as a school project within HETIC.</p>
        <p className="text" id="text_About2">
          <span id="ALM_Gold">Frontend developers : </span> Iris Chaix, Jonathan Bories
          <br/><span id="ALM_Gold">Backend developers :</span> Yann Quillard, Matthieu Barbe
          <br/><span id="ALM_Gold">UI/UX designers :</span> Amandine Goncalves, Alexandre Hoyau, Ambrose Ben Tiba</p>
      </div>
      <div className="LM">
        < h1 className="title" id="title_LM">Legal Mentions</h1>

        <p className="text" id="text_LM">© Copyright 2021 OutDrafted.com. 
        All rights reserved. OutDrafted.com isn't endorsed by Riot Games and doesn't reflect the views or opinions 
        of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and 
        Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
      </div>
    </div>
  );
}

export default LegalMentions_About;