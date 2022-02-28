import React from 'react';
import Select from 'react-select';


export const Welcome = ({ startQuiz }) => {
    const amountOfQuestions = [
        {value: '5', label: '5'},
        {value: '10', label: '10'},
        {value: '15', label: '15'}
    ]

    const difficulty = [
        {value: 'Any Difficulty', label: 'Any Difficulty'},
        {value: 'Easy', label: 'Easy'},
        {value: 'Medium', label: 'Medium'},
        {value: 'Hard', label: 'Hard'}
    ]

    const category = [
        {value: 'Any Category', label: 'Any Category'},
        {value: 'General Knowledge', label: 'General Knowledge'},
        {value: 'Entertainment: Books', label: 'Entertainment: Books'},
        {value: 'Entertainment: Film', label: 'Entertainment: Film'},
        {value: 'Entertainment: Music', label: 'Entertainment: Music'},
        {value: 'Entertainment: Musicals & Theaters', label: 'Entertainment: Musicals & Theaters'},
        {value: 'Entertainment: Televison', label: 'Entertainment: Televison'},
        {value: 'Entertainment: Video Games', label: 'Entertainment: Video Games'},
        {value: 'Entertainment: Board Games', label: 'Entertainment: Board Games'},
        {value: 'Science & Nature', label: 'Science & Nature'},
        {value: 'Science: Computers', label: 'Science: Computers'},
        {value: 'Science: Mathematics', label: 'Science: Mathematics'},
        {value: 'Mythology', label: 'Mythology'},
        {value: 'Sports', label: 'Sports'},
        {value: 'Geography', label: 'Geography'},
        {value: 'History', label: 'History'},
        {value: 'Politics', label: 'Politics'},
        {value: 'Art', label: 'Art'},
        {value: 'Celebrities', label: 'Celebrities'},
        {value: 'Animals', label: 'Animals'},
        {value: 'Vehicles', label: 'Vehicles'},
        {value: 'Entertainment: Comics', label: 'Entertainment: Comics'},
        {value: 'Science: Gadgets', label: 'Science: Gadgets'},
        {value: 'Entertainment: Japanese Anime & Manga', label: 'Entertainment: Japanese Anime & Manga'},
        {value: 'Entertainment: Cartoon & Animations', label: 'Entertainment: Cartoon & Animations'}
    ]

  return (
        <div className='welcome'>
            <h1>Quiz App</h1>

            <div className='welcome-select'>
                <div>
                    <h3 className='welcome-select-choose'>Number of Questions</h3>
                    <Select className='welcome-select-options' options={amountOfQuestions} defaultValue={amountOfQuestions[1]} />
                </div>
                <div>
                    <h3 className='welcome-select-choose'>Choose difficulty</h3>
                    <Select className='welcome-select-options' options={difficulty} defaultValue={difficulty[0]} />
                </div>
            </div>
            <div className='welcome-select-2'>
                    <h3 className='welcome-select-choose'>Choose category</h3>
                    <Select className='welcome-select-options' options={category} defaultValue={category[0]} />
            </div>

            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
};
