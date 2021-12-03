import React, {useState} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header/Header';

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Router >
        <Header />
        <Routes>
          <Route path="/" element={
          <Home onSubmit={(username) => {
              setUsername(username);
          }}/>} /> 
          <Route path="/favorites" element={<Favorites username={username}/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
