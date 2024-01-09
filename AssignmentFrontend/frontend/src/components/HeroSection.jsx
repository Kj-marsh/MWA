import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1> THE PREMIER SEARCH TOOL FOR THE PREMIER LEAGUE </h1>
      <p>Search, View and Edit Teams and Players for Your Community</p>
      <div className="hero-btns">
        <Link to='/teams'>
        <Button
          className="hero-btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          View Teams
        </Button>
        </Link>
        <Link to='/players'>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          View Players
        </Button>
        </Link>
        <Link to='/crud'>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Add / Edit Players
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
