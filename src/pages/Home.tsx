import React from 'react';

import '../App.css';

import Login from '../components/Login/Login';
import Header from '../components/Header/Header';
import News from '../components/News/News';

const Home = () => {

  return (
    <div className="wrap">
      <Header />
      <Login />
      <h1 className="h1_activity"> Actualités</h1>
      <News />
    </div>
  );
}

export default Home;