import React from "react";
import "./Nav.css";


function Nav(){
    return(
        <div className="container_nav">
            <nav className="navbar">
                <ul className="navbar_links">
                    <li className="navbar_void"></li>
                    <li className="navbar_item"  >
                        <a href="/" className="navbar_link">OUTDRAFTED</a>
                    </li>
                    <div className="navbar_outline"></div>
                    <li className="navbar_item"  >
                        <a href="/" className="navbar_link">CHAMPIONS DU MOMENT</a>
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

export default Nav