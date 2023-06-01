import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess/Guess';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED as max_guesses } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guess, setGuess] = React.useState('');
	const [prevGuesses, setPrevGuesses] = React.useState([]);

	return (
		<>
			<GuessResults prevGuesses={prevGuesses} max_guesses={max_guesses} />
			<Guess
				guess={guess}
				setGuess={setGuess}
				prevGuesses={prevGuesses}
				setPrevGuesses={setPrevGuesses}
			/>
		</>
	);
}

export default Game;
