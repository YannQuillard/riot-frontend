import React from "react";
import "./News.css";


function News(){
    return(
        <div className="container_News">
            <div className="news_content">
                <h1 className="news_title">VOIR LES DERNIÈRES NOTES DE PATCH <br/> PATCH 11.23</h1>
                <div className="news_image" id="news_1"></div>
                <a className="news_link" href="https://www.leagueoflegends.com/fr-fr/news/game-updates/patch-11-23-notes/" target="_blank"> En savoir plus</a>
            </div>
            <div className="news_content">
                <h1 className="news_title">EDWARD GAMING REMPORTE LES WORLDS 2021</h1>
                <div className="news_image" id="news_2"></div>
                <a className="news_link" href="https://www.millenium.org/news/381940.html" target="_blank">En savoir plus</a>
            </div>
            <div className="news_content">
                <h1 className="news_title">LA SAISON 2 D'<span id="w_l_lane">ARCANE </span>ANNONCÉE SUR NETFLIX</h1>
                <div className="news_image" id="news_3"></div>
                <a className="news_link" href="https://www.youtube.com/watch?v=Nu9HTOIUxLk" target="_blank">En savoir plus</a>
            </div>
        </div>
    );
}

export default News