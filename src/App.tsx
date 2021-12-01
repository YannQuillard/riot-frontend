import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navigation+toogle/Nav';
import TON from './components/navigation+toogle/toogle_off_navbar'
import Inscription from './components/Home-inscription/home-inscription';

function App() {
  return (
    <body>
      <div className="App">
        <TON />
        <Nav />
        <Header />
        <Inscription />
      </div>
    </body>
  );
}

export default App;
