import './App.css';
import { useState } from 'react';

import { Welcome } from './components/Welcome';

  const App = () => { 
    const [startQuiz, setStartQuiz] = useState(false);

    const handleStart = () => {
      setStartQuiz(true)
    }

    return (
      <div className="App">
        {startQuiz ? 
        <div>
          <h2>Question</h2>
          <div>
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
            <button>Option 4</button>
          </div>
        </div>
         : <Welcome startQuiz={handleStart}/>}
      </div>
    )
};


export default App;
