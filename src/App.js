import './App.css';
import { useState, useEffect } from 'react';
import he from 'he';

import { Welcome } from './components/Welcome';
import { Quiz } from './components/Quiz';

  const App = () => { 
    const [startQuiz, setStartQuiz] = useState(false);
    const [questions, setQuestions] = useState([]);

    const api_url = 'https://opentdb.com/api.php?amount=10&type=multiple'

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
    }, [])

    const handleStart = () => {
      setStartQuiz(true)
    }

    return (
      <div className="App">
        {startQuiz ? 
        <Quiz data={questions[0]} />
        : 
        <Welcome startQuiz={handleStart} />}
      </div>
    )
};


export default App;
