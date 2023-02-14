import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess/Guess";

function GuessResult({ guesses, answer }) {
  return (
    <div className="guess-results">
      {Array(NUM_OF_GUESSES_ALLOWED)
        .fill()
        .map((_, index) => (
          <Guess key={index} value={guesses[index]} answer={answer} />
        ))}
    </div>
  );
}

export default GuessResult;
