import React from 'react';

export const Quiz = ({data: {question, correct_answer, incorrect_answers}, handleAnswer })=> {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
  
  return (
    <div className='quiz'>
        <div className='quiz-question'>
            <h2>{question}</h2>    
        </div>
        <div className='quiz-answers'>
            <button className='quiz-answers-button' onClick={() => handleAnswer(shuffledAnswers[0])}>{shuffledAnswers[0]}</button>
            <button className='quiz-answers-button' onClick={() => handleAnswer(shuffledAnswers[1])}>{shuffledAnswers[1]}</button>
            <button className='quiz-answers-button' onClick={() => handleAnswer(shuffledAnswers[2])}>{shuffledAnswers[2]}</button>
            <button className='quiz-answers-button' onClick={() => handleAnswer(shuffledAnswers[3])}>{shuffledAnswers[3]}</button>
        </div>
  </div>
  );
};
