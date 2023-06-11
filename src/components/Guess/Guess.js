import React from "react";

function Guess({
  correctAnswer,
  guess,
  setGuess,
  prevGuesses,
  setPrevGuesses,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    let newPrevGuesses = [...prevGuesses, guess];
    setPrevGuesses(newPrevGuesses);
    setGuess("");
  }
  // Obtener el último valor insertado en prevGuesses que no es undefined
  const lastGuess = prevGuesses.filter((guess) => guess !== undefined).pop();
  // Verificar si el último valor insertado en prevGuesses es igual a correctAnswer
  const hasGuessedCorrectly = lastGuess === correctAnswer;
  // Verificar si prevGuesses está lleno y el último valor insertado no es igual a correctAnswer
  const hasFailedToGuess =
    prevGuesses.length === 6 && !hasGuessedCorrectly && lastGuess !== undefined;
  const numOfGuesses = prevGuesses.filter(
    (guess) => guess !== undefined
  ).length;

  return (
    <>
      {hasGuessedCorrectly && (
        <div className="happy banner">
          ¡Felicidades! divinaste la palabra correcta en {numOfGuesses}{" "}
          intentos.
        </div>
      )}
      {!hasGuessedCorrectly && !hasFailedToGuess && (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
          <label htmlFor="guess-input">Enter guess:</label>
          <input
            id="guess-input"
            type="text"
            value={guess}
            pattern="\w{5}"
            onChange={(event) => {
              setGuess(event.target.value.toUpperCase());
            }}
          />
        </form>
      )}
      {hasFailedToGuess && (
        <div className="sad banner">
          Lo siento, no lograste adivinar la palabra correcta. La respuesta era:{" "}
          {correctAnswer}
        </div>
      )}
    </>
  );
}

export default Guess;
