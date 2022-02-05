import React from 'react';

export const Quiz = ({data: {question, correct_answer, incorrect_answers}}) => {
  return (
    <div className='quiz'>
        <div className='quiz-question'>
            <h2>{question}</h2>    
        </div>
        <div className='quiz-answers'>
            <button className='quiz-answers-button'>{correct_answer}</button>
            <button className='quiz-answers-button'>{incorrect_answers[0]}</button>
            <button className='quiz-answers-button'>{incorrect_answers[1]}</button>
            <button className='quiz-answers-button'>{incorrect_answers[2]}</button>
        </div>
  </div>
  );
};
