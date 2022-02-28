import React from 'react';

export const PlayAgain = ({ handleNewGame, score }) => {
  return (
    <div className='playAgain'>
        <h1>Your score: {score}</h1>
        <button onClick={handleNewGame}>New Game</button>
    </div>
    );
};
