import React, { useState, useEffect } from 'react';
import YellowShape from './assets/yellow-shape.png';
import GrayShape from './assets/gray-shape.png';
import StartPage from './components/StartPage';
import Quizzes from './components/Quizzes';
import { nanoid } from 'nanoid'

const API_URL = 'https://opentdb.com/api.php?amount=5';
function App() {

      const [ quizzes, setQuizzes ] = useState([]);
      

      useEffect(() => {
          async function getQuestions () {
                const response = await fetch(API_URL);
                const data = await response.json();
                console.log(data);
                if (data.response_code == 0) {
                    setQuizzes(data.results);
                }
          }

          getQuestions();
      }, []);  


      const questions = quizzes.map(quiz => {
          const randomIndex = Math.floor(Math.random() * 4); 
          const id = nanoid();
          const multipleChoices = [...quiz.incorrect_answers];
          multipleChoices.splice(randomIndex, 0, quiz.correct_answer);
          return <Quizzes 
                    key={id}
                    id={id}
                    question={quiz.question}
                    choices={multipleChoices}
                  />  
      });
     
      return (
          <div className="container">
             <img src={ YellowShape } className="yellow-background"/>
             <div className="box">
                {questions}
             </div>
             <button className="check-answers">Check answers</button>
             <img src={ GrayShape } className="gray-background"/>   
          </div>  
      );  
}

export default App
