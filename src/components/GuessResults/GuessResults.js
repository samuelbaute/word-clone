import React from 'react';
import { range } from '../../utils';

function GuessResults({ prevGuesses }) {
	let newSkeleton = range();
	return (
		<div className='guess-results'>
			{prevGuesses.map((guess, index) => (
				<p className='guess' key={index}>
					{guess.map((letter) => (
						<span className='cell' key={crypto.randomUUID()}>
							{letter}
						</span>
					))}
				</p>
			))}
		</div>
	);
}

export default GuessResults;
