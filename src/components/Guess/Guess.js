import React from "react";

function Guess({ value }) {
  return (
    <p className="guess">
      {[...value].map((char, index) => (
        <span key={index} className="cell">
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
