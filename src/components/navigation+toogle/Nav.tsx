import React from "react";
import "./Nav.css";


function Nav(){
    return(
        <div className="container_nav">
            <nav className="navbar ">
                <ul className="navbar_links">
                    <li className="navbar_void"></li>
                    <li className="navbar_item"  >
                        <a href="/" className="navbar_link">ACCUEIL</a>
                    </li>
                    <div className="navbar_outline"></div>
                    <li className="navbar_item"  >
                        <a href="/Favorites" className="navbar_link">VOS FAVORIS</a>
                    </li>
                    <div className="navbar_outline"></div>
                    <li className="navbar_item" >
                        <a href="/" className="navbar_link">MEILLEURES COMPOSITIONS</a>
                    </li>
                    <div className="navbar_outline"></div>
                    <li className="navbar_item">
                        <a href="/LegalMentions" className="navbar_link">MENTIONS LÉGALES</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav