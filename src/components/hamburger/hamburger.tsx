import React, { useEffect, useState } from "react";

import "./Hamburger.css";

export type HamburgerProps = {
    onOpen: (isOpen: boolean) => void;
    isMenuOpen: boolean;
};

const Hamburger: React.FC<HamburgerProps> = (props) => {
    const [isOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        setMenuOpen(props.isMenuOpen);
        
        if(isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [props.isMenuOpen, isOpen])
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
