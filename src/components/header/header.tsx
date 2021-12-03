import React from 'react'
import './header.css';
import Hamburger from '../hamburger/hamburger';

function Header() {
  return (
    <div className="container_header">
        <div className="hamburger-icon"><Hamburger /></div>
        <a href="./" className="header-img"></a>
    </div>
  )
}

export default Header