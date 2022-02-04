import React from 'react';

export const Quiz = ({data: {question, correct_answer, incorrect_answers}}) => {
  return (
    <div>
        <div>
            <h2>{question}</h2>    
        </div>
        <div>
            <button>{correct_answer}</button>
            <button>{incorrect_answers[0]}</button>
            <button>{incorrect_answers[1]}</button>
            <button>{incorrect_answers[2]}</button>
        </div>
  </div>
  );
};
