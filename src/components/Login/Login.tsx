import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export type LoginProps = {
    onSuccess: (username: string) => void;
}

export type LoginState = {
    username: string;
}

const Login: React.FC<LoginProps> = (props) => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSuccess(username);
        navigate('/favorites');
    }

    return(
        <div className="container_inscription">
            <div className="background"></div>
            <p className="follow_your_game"> Suivez votre partie en direct </p>
            <form className="player_id" onSubmit={handleFormSubmit}> 
                <input 
                className="player_id_input" 
                type="text" 
                placeholder="Pseudo League of Legends EUW" 
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                >
                </input>
                <input className="player_id_send" type="submit" value="Go !"></input>
            </form>
        </div>
    );
}

export default Login