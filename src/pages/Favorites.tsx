import React from 'react';
import '../App.css';
import FavHeader from '../components/Favorites - Header/favorites-header';
import PlayerFav from '../components/Favorites - Fav/favorites-playerFav';

function Favorites() {
  return (
    <body>
      <div className="App">
        <FavHeader />
        <PlayerFav />
      </div>
    </body>
  );
}

export default Favorites;
