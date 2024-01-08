import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';
import { useState, useEffect } from 'react';

//this is the function required in order for the players to be generated into cards, with each record's data being pulled from the players table in the database before being allocated into the players and setPlayer variable, where the data can then be accessed for each required area of the card. Through the use of the .map function, a single card can be coded but used in order to generate a unique card for each record.

function PlayerCards() {

  const url = "http://localhost:8900/players";
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setPlayer(response.data);
      console.log(response.data);
    });

  }, [url]);

  return (
    <div className='cards'>
      <h1>Premier League Players</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {players.map((player) => (
              <CardItem
                src={player.image}
                text={player.description}
                label={"(Player ID: " + player.id + " ) " + player.playerName + " " + player.shirtNum}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlayerCards;