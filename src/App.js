import './App.css';
import { useState, useEffect } from 'react';
import he from 'he';
import { ClipLoader } from 'react-spinners';

import { Welcome } from './components/Welcome';
import { Quiz } from './components/Quiz';
import { PlayAgain } from './components/PlayAgain';

  const App = () => { 
    const [startQuiz, setStartQuiz] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [revealAnswer, setRevealAnswer] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [amountOfQuestions, setAmountOfQuestions] = useState(10);
    const [difficultyOfQuestions, setDifficultyOfQuestions] = useState(0)
    const [categoryOfQuestions, setCategoryOfQuestions] = useState(0)

    let api_url = `https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${categoryOfQuestions}&difficulty=${difficultyOfQuestions}&type=multiple`
    const endGame = index < questions.length

    useEffect(async () => {
      const response = await fetch(api_url);
      const data = await response.json();
      const decodedData = data.results.map(result => {
        return {
          ...result,
          question: he.decode(result.question),
          correct_answer: he.decode(result.correct_answer),
          incorrect_answers: result.incorrect_answers.map(incorrect => he.decode(incorrect))
        }
      })

      setQuestions(decodedData)
      setIsLoading(true)
    }, [startQuiz])

    const handleStart = () => {
      setIsLoading(false)
      setStartQuiz(true)
    }
    
    const handleAnswer = (answer) => {
      if(!revealAnswer) {
        if (answer === questions[index].correct_answer) {
          setScore(score + 1)
        }
      }
      setRevealAnswer(true)
    }

    const handleNextQuestion = () => {
      setRevealAnswer(false)
      setIndex(index + 1)
    }

    const handleNewGame = () => {
      setIndex(0)
      setScore(0)
    }

    const handleAmountOfQuestions = value => {
      setAmountOfQuestions(value.value)
      console.log(amountOfQuestions)
    }

    const handleDifficultyOfQuestions = value => {
      setDifficultyOfQuestions(value.value)
      console.log(difficultyOfQuestions)
    }

    const handleCategoryOfQuestions = value => {
      setCategoryOfQuestions(value.value)
    }
    
    return (
      <div className="App">
        {endGame ? startQuiz ? isLoading ?
        <Quiz 
        data={questions[index]} 
        handleAnswer={handleAnswer}
        revealAnswer={revealAnswer}
        handleNextQuestion={handleNextQuestion}
        index={index}
        amount={amountOfQuestions}
        />  : <ClipLoader size={100}/>
        : <Welcome startQuiz={handleStart}
          handleAmount={handleAmountOfQuestions}
          handleDifficulty={handleDifficultyOfQuestions}
          handleCategory={handleCategoryOfQuestions}
          /> 
        : isLoading ? 
        <PlayAgain handleNewGame={handleNewGame} score={score}/> 
        : <ClipLoader size={100}/>}
      </div>
    )
};


export default App;
