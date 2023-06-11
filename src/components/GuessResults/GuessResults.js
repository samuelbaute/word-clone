import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessResults({ correctAnswer, prevGuesses, max_guesses }) {
  //let newSkeleton = range();
  return (
    <div className="guess-results">
      {range(0, max_guesses).map((guess, index) => (
        <p key={crypto.randomUUID()} className="guess">
          {!!prevGuesses[index]
            ? checkGuess(prevGuesses[index], correctAnswer).map(
                (letterChecked) => (
                  <span
                    key={crypto.randomUUID()}
                    className={"cell " + letterChecked.status}
                  >
                    {letterChecked.letter}
                  </span>
                )
              )
            : range(0, 5).map(() => (
                <span key={crypto.randomUUID()} className="cell"></span>
              ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
