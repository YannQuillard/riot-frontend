import React from 'react';
import '../App.css';
import Inscription from '../components/Home-inscription/home-inscription';
import Tabs from '../components/Accueil - Tabs/tabs.js';

function Accueil() {
  return (
    <body>
      <div className="App">
        <Inscription />
        <Tabs />
      </div>
    </body>
  );
}

export default Accueil;
