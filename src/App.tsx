import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import LegalMentions from './pages/LegalMentions';
import PickLane from './pages/PickLane';
import Draft from './pages/Draft';

const App = () => {
  return (
      <div className="App">
        <Router >
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/favorites" element={<Favorites />} /> 
            <Route path="/legal-mentions" element={<LegalMentions />} />
            <Route path="/pick-lane" element={<PickLane />} />
            <Route path="/draft" element={<Draft />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
