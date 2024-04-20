import React, { useState } from 'react';
import YellowShape from './assets/yellow-shape.png';
import GrayShape from './assets/gray-shape.png';
import StartPage from './components/StartPage';
import Quizzes from './components/Quizzes';
function App() {
      return (
          <div className="container">
             <img src={ YellowShape } className="yellow-background"/>
             <Quizzes />
             <Quizzes />
             <Quizzes />
             <Quizzes />
             <Quizzes />
             <button className="check-answers">Check answers</button>
             <img src={ GrayShape } className="gray-background"/>   
          </div>  
      );  
}

export default App
