import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Banner({ answerIsCorrect, answer, numberOfGuesses }) {
  if (answerIsCorrect === null) {
    return null;
  }

  if (answerIsCorrect === true) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${numberOfGuesses} guesses`}</strong>.
        </p>
      </div>
    );
  }

  if (answerIsCorrect === false) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

function GuessInput({ handleSubmitGuess, answer, guesses }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  const [answerIsCorrect, setAnswerIsCorrect] = React.useState(null);

  function handleInput(event) {
    setTentativeGuess(event.target.value.toUpperCase());
  }

  function handleSubmitTentativeGuess(event, numberOfGuesses) {
    event.preventDefault();

    if (answer === tentativeGuess) {
      setAnswerIsCorrect(true);
    }

    if (numberOfGuesses + 1 === NUM_OF_GUESSES_ALLOWED) {
      setAnswerIsCorrect(false);
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <>
      <Banner
        answer={answer}
        numberOfGuesses={guesses.length}
        answerIsCorrect={answerIsCorrect}
      />
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => handleSubmitTentativeGuess(event, guesses.length)}
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
          disabled={answerIsCorrect === true || answerIsCorrect === false}
        />
      </form>
    </>
  );
}

export default GuessInput;
