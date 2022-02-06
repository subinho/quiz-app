import './App.css';
import { useState, useEffect } from 'react';
import he from 'he';
import { ClipLoader } from 'react-spinners';

import { Welcome } from './components/Welcome';
import { Quiz } from './components/Quiz';

  const App = () => { 
    const [startQuiz, setStartQuiz] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [revealAnswer, setRevealAnswer] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const api_url = 'https://opentdb.com/api.php?amount=10&type=multiple'
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
    }, [])

    const handleStart = () => {
      setStartQuiz(true)
    }
    
    const handleAnswer = (answer) => {
      if (answer === questions[index].correct_answer) {
        setScore(score + 1)
      }
      setRevealAnswer(true)
    }

    const handleNextQuestion = () => {
      setRevealAnswer(false)
      setIndex(index + 1)
    }
    
    return (
      <div className="App">
        {endGame ? startQuiz ? isLoading ?
        <Quiz 
        data={questions[index]} 
        handleAnswer={handleAnswer}
        revealAnswer={revealAnswer}
        handleNextQuestion={handleNextQuestion}
        /> 
        : <ClipLoader size={100}/>
        : <Welcome startQuiz={handleStart} /> 
        : <div>{score}</div>}
      </div>
    )
};


export default App;
