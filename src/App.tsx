import React from 'react';
import './App.css';
import Accueil from './pages/Accueil';
import Favorites from './pages/Favorites';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HUD from './pages/HUD';

function App() {
  return (
    <body>
      <div className="App">
        <Router >
          <HUD />
          <Routes>
          <Route path="/" element={<Accueil />} /> 
          <Route path="/Favorites" element={<Favorites />} /> 
          </Routes>
        </Router>
      </div>
    </body>
  );
}

export default App;
