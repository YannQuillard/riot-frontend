import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navigation+toogle/Nav';
import TON from './components/navigation+toogle/toogle_off_navbar'
import Inscription from './components/Home-inscription/home-inscription';
import Tabs from './components/Acceuil - Tabs/tabs.js';

function App() {
  return (
    <body>
      <div className="App">
        <TON />
        <Nav />
        <Header />
        <Inscription />
        <Tabs />
      </div>
    </body>
  );
}

export default App;
