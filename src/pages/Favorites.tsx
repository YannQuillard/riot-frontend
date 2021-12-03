import React from 'react';
import '../App.css';
import '../components/Favorites - Fav/FavGlobal.css';
import FavHeader from '../components/Favorites - Header/favorites-header';
import PlayerFav from '../components/Favorites - Fav/Favorites-PlayerFav/favorites-playerFav';
import FavNav from '../components/Favorites - Fav/Favorites - NavBar/favorites-navbar';

export type MenuProps = {
  username: string;
}

const Favorites: React.FC<MenuProps> = (props) => {
  console.log(props.username);
  return (
    <div>
      <FavHeader />
      <div className="FavGlobal"> 
        <PlayerFav />
        <FavNav />
      </div>
    </div>
  );
}

export default Favorites;
