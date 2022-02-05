import React from 'react';

export const Quiz = ({data: {question, correct_answer, incorrect_answers}, handleAnswer })=> {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
  
  return (
    <div className='quiz'>
        <div className='quiz-question'>
            <h2>{question}</h2>    
        </div>
        <div className='quiz-answers'>
          {shuffledAnswers.map(answer => (
            <button className='quiz-answers-button' onClick={() => handleAnswer(answer)}> {answer} </button>
          ))}
        </div>
  </div>
  );
};
