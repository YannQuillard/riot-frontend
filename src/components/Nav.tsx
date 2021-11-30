import React from "react";
import "./Nav.css";


function Nav(){
    return(
        <nav className="navbar">
            <ul className="navbar_links">
                <li className="navbar_item">
                    <a href="/" className="navbar_link">OutDrafted</a>
                </li>
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Champions du moment</a>
                </li>
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Meilleures compositions</a>
                </li>
                <li className="navbar_item">
                    <a href="/" className="navbar_link">À propos</a>
                </li>
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Mentions Légales</a>
                </li>
            </ul>
            <button className="burger">
                <span className="burger-bar"></span>
            </button>
        </nav>
    );
}

export default Nav