import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess/Guess";

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {Array(NUM_OF_GUESSES_ALLOWED)
        .fill(" ".repeat(5))
        .map((emptyGuess, index) => (
          <Guess key={index} value={guesses[index] ?? emptyGuess} />
        ))}
    </div>
  );
}

export default GuessResult;
