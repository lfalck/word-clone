import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleInput(event) {
    setTentativeGuess(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextTentativeGuess = tentativeGuess.toUpperCase();
    handleSubmitGuess(nextTentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
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
        onChange={(event) => handleInput(event)}
      />
    </form>
  );
}

export default GuessInput;
