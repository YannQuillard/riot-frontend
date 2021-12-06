import React, { useState } from 'react'

import './Header.css';

import Menu from '../Menu/Menu';
import Hamburger from '../Hamburger/Hamburger';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <div className={`toogle_off_nav ${isMenuOpen ? " is-active-toogle" : ""}`} onClick={closeMenu}></div>
      <Menu isMenuOpen={isMenuOpen} />
      <div className="container_header">
          <div className="hamburger-icon">
            <Hamburger onOpen={(isOpen) => {
              setMenuOpen(isOpen);
            }} isMenuOpen={isMenuOpen}/>
          </div>
        <a href="./" className="header-img"></a>
    </div>
    </div>
  );
}

export default Header;