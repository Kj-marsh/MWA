import React from "react";
import "../Crud.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Crud = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [playerName, setName] = useState('');
  const [shirtNum, setShirtNum] = useState('');
  const [description, setDesc] = useState('');
  const [image, setImage_url] = useState('');
  const [team_id, setTeamId] = useState('');

  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  function handleSubmit(e) {
    const postPlayer = {
      playerName: playerName,
      shirtNum: shirtNum,
      description: description,
      image: image,
      team_id: team_id
    };

    axios.post("http://localhost:8900/players", postPlayer).then(res => {
      console.log(res);
      console.log(res.data);
      alert('Record successfully added');
    });
  }

  function editSubmit(e) {
    const putPlayer = {
      id: id,
      playerName: playerName,
      shirtNum: shirtNum,
      description: description,
      image: image,
      team_id: team_id
    };

    axios.put("http://localhost:8900/players", putPlayer).then(res => {
      console.log(res);
      console.log(res.data);
      alert('Record successfully updated');
    });
  }

  function deleteRecord() {
    axios.delete('http://localhost:8900/players', { data: { id: id } }).then(res => {
      if (res.status === 200) {
        alert('Record successfully deleted');
        navigate("/");
      }
      console.log(res);
      console.log(res.data);
    });
  }

  return (

    <>
      <div className="container-wrapper">

        <div className="add-container">
          <form onSubmit={handleSubmit}>

            <div className="forms-section">
              <h1>ADD A NEW PLAYER</h1>
              <label htmlFor="playerName">Player Name</label>
              <input required type="text" name="playerName" onChange={(e) => setName(e.target.value)} />

              <label htmlFor="shirtNum">Shirt Number</label>
              <input required type="text" name="shirtNum" onChange={(e) => setShirtNum(e.target.value)} />

              <label htmlFor="team_id">Team ID</label>
              <input required type="text" name="team_id" onChange={(e) => setTeamId(e.target.value)} />

              <label htmlFor="image">Image URL</label>
              <input required type="text" name="image" onChange={(e) => setImage_url(e.target.value)} />

              <label htmlFor="description">Description</label>
              <textarea required name="description" id="" rows="12" onChange={(e) => setDesc(e.target.value)}></textarea>
              <div className="buttons-add">
                <button onClick={routeChange} className="btn-crud">
                  CANCEL
                </button>
                <button type="submit" className="btn-crud">ADD</button>
              </div>
            </div>
          </form>

        </div>

        <div className="delete-container">
          <form onSubmit={deleteRecord}>

            <div className="forms-section">
              <h1>DELETE A PLAYER</h1>
              <label htmlFor="id">Player ID</label>
              <input required type="text" name="id" onChange={(e) => setId(e.target.value)} />
              <div className="buttons-add">
                <button onClick={routeChange} className="btn-crud">
                  CANCEL
                </button>
                <button type="submit" className="btn-crud">DELETE</button>
              </div>
            </div>
          </form>
        </div>

        <div className="update-container">
          <form onSubmit={editSubmit}>
            <div className="forms-section">
              <h1>EDIT A PLAYER</h1>
              <label htmlFor="id">Player ID</label>
              <input required type="text" name="id" onChange={(e) => setId(e.target.value)} />

              <label htmlFor="playerName">Player Name</label>
              <input required type="text" name="playerName" onChange={(e) => setName(e.target.value)} />

              <label htmlFor="shirtNum">Shirt Number</label>
              <input required type="text" name="shirtNum" onChange={(e) => setShirtNum(e.target.value)} />

              <label htmlFor="team_id">Team ID</label>
              <input required type="text" name="team_id" onChange={(e) => setTeamId(e.target.value)} />

              <label htmlFor="image">Image URL</label>
              <input required type="text" name="image" onChange={(e) => setImage_url(e.target.value)} />

              <label htmlFor="description">Description</label>
              <textarea required name="description" id="" rows="12" onChange={(e) => setDesc(e.target.value)}></textarea>
              <div className="buttons-add">
                <button onClick={routeChange} className="btn-crud">
                  CANCEL
                </button>
                <button type="submit" className="btn-crud">UPDATE</button>
              </div>
            </div>
          </form>
        </div>

      </div>

    </>

  );
};

export default Crud;
