import React from 'react'
import './header.css';
import Hamburger from '../hamburger/hamburger';

function Header() {
  return (
    <div className="container_header">
        <div className="hamburger-icon"><Hamburger /></div>
        <div className="header-img"></div>
    </div>
  )
}

export default Header