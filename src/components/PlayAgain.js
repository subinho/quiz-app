import React from 'react';

export const PlayAgain = ({ handleNewGame, score }) => {
  return (
    <div>
        <h1>Your score: {score}</h1>
        <button onClick={handleNewGame}>Play again</button>
    </div>
    );
};
