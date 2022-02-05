import './App.css';
import { useState, useEffect } from 'react';

import { Welcome } from './components/Welcome';
import { Quiz } from './components/Quiz';

  const App = () => { 
    const [startQuiz, setStartQuiz] = useState(false);
    const [questions, setQuestions] = useState([])

    const api_url = 'https://opentdb.com/api.php?amount=10&type=multiple'

    useEffect(async () => {
      const response = await fetch(api_url)
      const data = await response.json()

      setQuestions(data.results)
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
