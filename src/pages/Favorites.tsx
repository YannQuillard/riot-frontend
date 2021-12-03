import React from 'react';
import '../App.css';
import '../components/Favorites - Fav/FavGlobal.css';
import FavHeader from '../components/Favorites - Header/favorites-header';
import FavDisplay from '../components/Favorites - Fav/Favorites - ChampDisplay/favorites-display';
import PlayerFav from '../components/Favorites - Fav/Favorites-PlayerFav/favorites-playerFav';
import FavNav from '../components/Favorites - Fav/Favorites - NavBar/favorites-navbar';
import FavNext from '../components/Favorites - Fav/Favorites - Next Button/favorites-next';

function Favorites() {
  return (
    <body>
      <div className="App">
        <FavHeader />
        <div className="FavGlobal"> 
          <PlayerFav />
          <div className="FavRight"> 
            <FavNav />
            <FavDisplay />
            <FavNext />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Favorites;
