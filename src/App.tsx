import React from 'react';
import './App.css';
import Accueil from './pages/Accueil';
import Favorites from './pages/Favorites';
import LegalMentions from './pages/LegalMentions';
import PickLane from './pages/PickLane';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <body>
      <div className="App">
        <Router >
          <Routes>
          <Route path="/" element={<Accueil />} /> 
          <Route path="/Favorites" element={<Favorites />} /> 
          <Route path="/LegalMentions" element={<LegalMentions />} />
          <Route path="/PickLane" element={<PickLane />} />
          </Routes>
        </Router>
      </div>
    </body>
  );
}

export default App;
