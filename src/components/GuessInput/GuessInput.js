import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleInput(event) {
    const nextTentativeGuess = event.target.value; //.toUpperCase();
    setTentativeGuess(nextTentativeGuess);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      alert("Guess needs to be 5 letters!");
      return;
    }

    handleSubmitGuess(tentativeGuess);
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
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => handleInput(event)}
      />
    </form>
  );
}

export default GuessInput;
