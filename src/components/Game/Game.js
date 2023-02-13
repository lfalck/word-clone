import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(value) {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      alert("Max number of guesses reached!");
      return;
    }

    setGuesses([...guesses, value]);
  }

  return (
    <>
      <GuessResult guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
