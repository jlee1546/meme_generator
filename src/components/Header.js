import React from "react";

function Header() {
  return (
    <header>
      <div className="header--brand">
        <img className="header--icon" src="../images/troll.png" alt="troll" />
        <h1>Meme Generator</h1>
      </div>
      <div className="header--projectInfo">
        <p>React Course - Project 3</p>
      </div>
    </header>
  );
}

export default Header;
