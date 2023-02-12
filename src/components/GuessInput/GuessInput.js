import React from "react";

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");

  function handleInput(event) {
    const nextGuess = event.target.value.toUpperCase();
    setGuess(nextGuess);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      alert("Guess needs to be 5 letters!");
      return;
    }

    setGuesses([...guesses, { id: crypto.randomUUID(), value: guess }]);
    setGuess("");
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
        value={guess}
        onChange={(event) => handleInput(event)}
      />
    </form>
  );
}

export default GuessInput;
