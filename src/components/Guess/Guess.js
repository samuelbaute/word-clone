import React from 'react';

function Guess({ guess, setGuess, prevGuesses, setPrevGuesses }) {
	function handleSubmit(event) {
		event.preventDefault();
		let newPrevGuesses = [...prevGuesses, guess];
		setPrevGuesses(newPrevGuesses);
		setGuess('');
	}

	return (
		<>
			<form className='guess-input-wrapper' onSubmit={handleSubmit}>
				<label htmlFor='guess-input'>Enter guess:</label>
				<input
					id='guess-input'
					type='text'
					value={guess}
					pattern='\w{5}'
					onChange={(event) => {
						setGuess(event.target.value.toUpperCase());
					}}
				/>
			</form>
		</>
	);
}

export default Guess;
