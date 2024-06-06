import React from 'react';
import QuizCard from './component/quizcard';



function App() {
  const startTrivia = async () => {


  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App"> 
        <h1>Quizo</h1>
        <button className='start' onClick={startTrivia}>
          Start
        </button>
        <p className='score'> score</p>
        <p>Loading question ....</p>
        <QuizCard />
        <button className='next' onClick={nextQuestion}>
          Next Question
        </button>
     </div>
  );
}

export default App;
