import React, {useState, useEffect} from 'react';
import '../App.css';
import '../components/Favorites/FavoritesGlobal.css';
import FavHeader from '../components/Favorites/FavoritesHeader/FavoritesHeader';
import FavDisplay from '../components/Champions/Champions';
import FavoritesPlayer from '../components/Favorites/FavoritesPlayer/FavoritesPlayer';
import FavoritesNav from '../components/Favorites/FavoritesNav/FavoritesNavbar';
import FavNext from '../components/Favorites/FavoritesNextButton/FavoritesNext';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getChampions } from "../api";
import { Champion, Champions } from "../decl";


import Header from '../components/Header/Header';

export type ChampionsState = {
  championsArray: Champions;
}

export type ChampionProps = {
  riotId: number;
  name: string;
  image: string;
}

const Favorites = () => {
  const [champions, setChampions] = useState<ChampionsState>({championsArray: []});
    const fetchPages = async () => {
        const fetchedChampions = await getChampions();
        setChampions({ championsArray: fetchedChampions });
    };

    useEffect(() => {
        fetchPages()
      }, []);

  return (
      <div className="wrap">
        <DndProvider backend={HTML5Backend}>
        <FavHeader />
        <div className="FavGlobal"> 
          <FavoritesPlayer championsArray={champions.championsArray}/>
          <div className="FavRight"> 
            <FavoritesNav/>
            <FavDisplay championsArray={champions.championsArray} onSelect={(riotId, image) => {
                    console.log('test')
                    }}/>
            <FavNext />
          </div>
        </div>
        </DndProvider>
        <Header />
      </div>
  );
}

export default Favorites;
