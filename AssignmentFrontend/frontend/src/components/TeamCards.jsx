import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';
import { useState, useEffect } from 'react';

//this is the function required in order for the teams to be generated into cards, with each record's data being pulled from the teams table in the database before being allocated into the teams and setTeam variable, where the data can then be accessed for each required area of the card. Through the use of the .map function, a single card can be coded but used in order to generate a unique card for each record.

function TeamCards(){

    const url = "http://localhost:8900/teams";
    const [teams, setTeam] = useState([]);
    useEffect(() => {
      axios.get(url).then((response) => {
        setTeam(response.data);
        console.log(response.data);
      });
  
    }, [url]);
    
  return (
    <div className='cards'>
      <h1>Premier League Teams</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
        { teams.map((team) => (
            <CardItem
              src= {team.image}
              text={team.description}
              label={team.team_name}
            />
        ))}   
          </ul>
        </div>
      </div>
    </div>
  );
  }

export default TeamCards;
