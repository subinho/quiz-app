import React from 'react';

export const Quiz = ({data: {question, correct_answer, incorrect_answers} })=> {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random * 0.5);

  return (
    <div className='quiz'>
        <div className='quiz-question'>
            <h2>{question}</h2>    
        </div>
        <div className='quiz-answers'>
            <button className='quiz-answers-button'>{shuffledAnswers[0]}</button>
            <button className='quiz-answers-button'>{shuffledAnswers[1]}</button>
            <button className='quiz-answers-button'>{shuffledAnswers[2]}</button>
            <button className='quiz-answers-button'>{shuffledAnswers[3]}</button>
        </div>
  </div>
  );
};
