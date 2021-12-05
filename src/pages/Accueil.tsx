import React from 'react';
import '../App.css';
import News from '../components/Accueil - News/accueil_news';
import Inscription from '../components/Home-inscription/home-inscription';
import HUD from './HUD';

function Accueil() {
  return (
    <body>
      <div className="App">
        <HUD />
        <Inscription />
        <h1 className="h1_activity"> Actualités</h1>
        <News />
      </div>
    </body>
  );
}

export default Accueil;
