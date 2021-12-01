import React from 'react';
import './App.css';
import Header from './components/header';
import Nav from './components/Nav';
import TON from './components/toogle_off_navbar'

function App() {
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

export default App;
