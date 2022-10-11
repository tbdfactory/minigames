import React from "react";
import "../styles/GameContent.css";

function GameContent(props) {
  return (
    <div className="game-container">
      <div className="content">
        <div className="content-title">
          <h1 className="title">{props.game.title}</h1>
        </div>
        <div className="content-game">
          <div className="game-box"></div>
        </div>
        <div className="content-description">
          <h3 style={{ fontSize: "28px" }}>Description:</h3>
          <p className="desc">{props.game.description}</p>
        </div>
      </div>
    </div>
  );
}

export default GameContent;
