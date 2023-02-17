import React from "react";

import {
  GAMESTATE_PLAYING,
  GAMESTATE_WON,
  GAMESTATE_LOST,
} from "../../constants";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner";

function GuessInput({
  handleSubmitGuess,
  numberOfGuesses,
  answer,
  gamesState,
}) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmitTentativeGuess(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <>
      {gamesState === GAMESTATE_WON && (
        <WonBanner numberOfGuesses={numberOfGuesses} />
      )}
      {gamesState === GAMESTATE_LOST && <LostBanner answer={answer} />}
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => handleSubmitTentativeGuess(event)}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          pattern="[a-zA-Z]{5}"
          maxLength={5}
          title="5 letter word"
          value={tentativeGuess}
          onChange={(event) =>
            setTentativeGuess(event.target.value.toUpperCase())
          }
          disabled={gamesState !== GAMESTATE_PLAYING}
        />
      </form>
    </>
  );
}

export default GuessInput;
