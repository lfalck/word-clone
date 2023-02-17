import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import {
  GAMESTATE_PLAYING,
  GAMESTATE_WON,
  GAMESTATE_LOST,
  NUM_OF_GUESSES_ALLOWED,
} from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gamesState, setGameState] = React.useState(GAMESTATE_PLAYING);

  function handleSubmitGuess(value) {
    if (value === answer) {
      setGameState(GAMESTATE_WON);
    }

    const nextGuesses = [...guesses, value];

    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState(GAMESTATE_LOST);
    }

    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        answer={answer}
        gamesState={gamesState}
        numberOfGuesses={guesses.length}
      />
    </>
  );
}

export default Game;
