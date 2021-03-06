import React from 'react';
import Select from 'react-select';
import { amountOfQuestions, difficulty, category } from '../Data'

export const Welcome = ({ startQuiz, handleAmount, handleDifficulty, handleCategory }) => {

  return (
        <div className='welcome'>
            <h1>Quiz App</h1>

            <div className='welcome-select'>
                <div>
                    <h3 className='welcome-select-choose'>Number of Questions</h3>
                    <Select className='welcome-select-options' options={amountOfQuestions} defaultValue={amountOfQuestions[1]} onChange={handleAmount} />
                </div>
                <div>
                    <h3 className='welcome-select-choose'>Choose difficulty</h3>
                    <Select className='welcome-select-options' options={difficulty} defaultValue={difficulty[0]} onChange={handleDifficulty} />
                </div>
            </div>
            <div className='welcome-select-2'>
                    <h3 className='welcome-select-choose'>Choose category</h3>
                    <Select className='welcome-select-options' options={category} defaultValue={category[0]} onChange={handleCategory} />
            </div>

            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
};
