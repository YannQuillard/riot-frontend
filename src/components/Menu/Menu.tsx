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
                    <li className="navbar_item" >
                        <a href="./pick-lane" className="navbar_link">NOUVELLE PARTIE</a>
                    </li>
                    <div className="navbar_outline"></div>
                    <li className="navbar_item"  >
                        <a href="./favorites" className="navbar_link">VOS FAVORIS</a>
                    </li>
                    <div className="navbar_outline"></div>
                    <li className="navbar_item">
                        <a href="./legal-mentions" className="navbar_link">MENTIONS LÉGALES</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu