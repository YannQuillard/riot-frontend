import React, { useState } from 'react'

import './Header.css';

import Menu from '../Menu/Menu';
import Hamburger from '../Hamburger/Hamburger';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <div className={`toogle_off_nav ${isMenuOpen ? " is-active-toogle" : ""}`}></div>
      <Menu isMenuOpen={isMenuOpen}/>
      <div className="container_header">
          <div className="hamburger-icon">
            <Hamburger onOpen={(isOpen) => {
              setMenuOpen(isOpen);
            }}/>
          </div>
        <div className="header-img"></div>
    </div>
    </div>
  );
}

export default Header;