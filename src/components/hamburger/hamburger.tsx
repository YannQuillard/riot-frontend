import React, { useState } from "react";

import "./Hamburger.css";

export type HamburgerProps = {
    onOpen: (isOpen: boolean) => void;
};

const Hamburger: React.FC<HamburgerProps> = (props) => {
    const [isOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(!isOpen);
        props.onOpen(!isOpen);
    }

    return(
        <button className={`hamburger hamburger--spring ${isOpen ? " is-active" : ""}`} type="button" onClick={openMenu}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}

export default Hamburger
