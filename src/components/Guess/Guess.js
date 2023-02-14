import React from "react";

import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);

  return (
    <p className="guess">
      {Array(5)
        .fill()
        .map((_, index) => (
          <Cell
            key={index}
            letter={checkedGuess && checkedGuess[index].letter}
            status={checkedGuess && checkedGuess[index].status}
          />
        ))}
    </p>
  );
}

export default Guess;
