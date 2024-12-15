import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
    <img src="\accets\ValorantLogo.png" alt="Valorant Logo" className="valorant-logo" />
    <img src="\accets\RiotLogo.png" alt="Riot Logo" className="riot-logo" />
    </div>
    <div className="navbar-links">
      <a href="#game">Game</a>
      <a href="#media">Media</a>
      <a href="#news">News</a>
      <a href="#leaderboards">Leaderboards</a>
      <a href="#support">Support</a>
    </div>
    <div className="navbar-action">
      <a href="#play" className="play-button">
        Play Free
      </a>
    </div>
  </nav>
);
};
export default Navbar