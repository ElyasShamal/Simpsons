import React, { useState } from "react";
import { characters } from "../data";
import { v4 as uuidv4 } from "uuid";

function Characters() {
  const [showQuotes, setShowQuotes] = useState(false);
  const [buttonBackground, setButtonBackground] = useState("#ff5733");

  const handleClick = () => {
    setShowQuotes(() => !showQuotes);
    setButtonBackground((prevColor) =>
      prevColor === "#ff5733" ? "black" : "#ff5733"
    );
  };
  return (
    <>
      {characters.map((character) => (
        <div className="card" key={uuidv4()}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <button
            className="btn"
            onClick={handleClick}
            style={{ backgroundColor: buttonBackground, color: "white" }}
          >
            {showQuotes ? "Close Quotes" : "Show Quotes"}
          </button>
          {showQuotes && <p>{character.quotes}</p>}
        </div>
      ))}
    </>
  );
}

export default Characters;
