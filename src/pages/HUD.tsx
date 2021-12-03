import React from 'react';
import Header from '../components/header/header';
import Nav from '../components/navigation+toogle/Nav';
import TON from '../components/navigation+toogle/toogle_off_navbar'

function HUD() {
  return (
    <body>
      <div className="App">
        <TON />
        <Nav />
        <Header />
      </div>
    </body>
  );
}

export default HUD;