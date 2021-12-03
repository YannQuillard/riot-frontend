import React, {useEffect, useState} from 'react';

import '../App.css';

import Login from '../components/Login/Login';
import Suggested from '../components/Suggested/Suggested';
export type LoginProps = {
  onSubmit: (username: string) => void;
}

const Home: React.FC<LoginProps> = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log(username)
    props.onSubmit(username);
  });

  return (
    <div className="App">
      <Login onSuccess={(username) => {
              setUsername(username);
      }}/>
      <Suggested />
    </div>
  );
}

export default Home;
