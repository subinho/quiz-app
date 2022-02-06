import React, { useMemo } from 'react';

export const Quiz = ({data: {question, correct_answer, incorrect_answers}, handleAnswer, revealAnswer })=> {
  const shuffledAnswers = useMemo(() => (
    [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
  ), [])
  
  return (
    <div className='quiz'>
        <div className='quiz-question'>
            <h2>{question}</h2>    
        </div>
        <div className='quiz-answers'>
          {shuffledAnswers.map(answer => {
            const revealColor = revealAnswer ? answer === correct_answer ? 'correct-answer' : 'wrong-answer' : '';
            return (
            <button key={answer} className={`quiz-answers-button ${revealColor}`} onClick={() => handleAnswer(answer)}> {answer} </button>
          )})}
        </div>
  </div>
  );
};
