import React from "react";
import "./Menu.css";

export type MenuProps = {
    isMenuOpen: boolean;
}

const Menu: React.FC<MenuProps> = (props) => {
    return(
        <div className={`container_nav ${props.isMenuOpen ? " is-active-menu" : ""}`}>
            <nav className="navbar">
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
                    <li className="navbar_item" >
                        <a href="/" className="navbar_link">À PROPOS</a>
                    </li>
                    <div className="navbar_outline"></div>
                    <li className="navbar_item">
                        <a href="/" className="navbar_link">MENTIONS LÉGALES</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu