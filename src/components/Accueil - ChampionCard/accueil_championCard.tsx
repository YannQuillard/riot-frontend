import React from "react";
import "./accueil_championCard.css";

function Accueil_CC() {
  return (
    <div className="container_accueil_champion_card">
      <p className="champion_ranking">1</p>
      <div className="champion_icon"></div>
      <p className="champion_winrate"> &#62; 72%</p>
    </div>
  );
}

export default Accueil_CC;