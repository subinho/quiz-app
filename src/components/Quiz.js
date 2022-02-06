import React, { useMemo } from 'react';

export const Quiz = ({data: {question, correct_answer, incorrect_answers}, handleAnswer, revealAnswer, handleNextQuestion, index })=> {
  const shuffledAnswers = useMemo(() => (
    [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
  ), [question])
  
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
        {revealAnswer && <div className='quiz-next-question'>
          <button className='quiz-btn' onClick={handleNextQuestion}>{index < 9 ? 'Next Question' : 'End Quiz'}</button>
        </div>}
  </div>
  );
};
