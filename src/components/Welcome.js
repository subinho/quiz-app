import React from 'react';

export const Welcome = ({ startQuiz }) => {
  return (
        <div className='welcome'>
            <h1>Quiz App</h1>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
};
