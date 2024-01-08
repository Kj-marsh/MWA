import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Players from "./components/pages/Players";
import Teams from './components/pages/Teams';
import Crud from "./components/pages/Crud";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//This is the standardised element of the web application, with the navbar being connected to a router that spans every webpage in the webapp.
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/players" element={<Players />}/>
          <Route path='/teams' element={<Teams />}/>
          <Route path='/crud' element={<Crud />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
