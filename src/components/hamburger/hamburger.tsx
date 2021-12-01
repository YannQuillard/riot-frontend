import React from "react";
import "../navigation+toogle/Nav.css";
import "../navigation+toogle/Nav.tsx";
import "./hamburger.css";
import "./hamburger_toggle";

function Hamburger(){
    return(
        <button className="hamburger hamburger--spring" type="button">
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}

export default Hamburger
