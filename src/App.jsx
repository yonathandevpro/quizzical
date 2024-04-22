import React, { useState, useEffect } from 'react';
import YellowShape from './assets/yellow-shape.png';
import GrayShape from './assets/gray-shape.png';
import StartPage from './components/StartPage';
import Quizzes from './components/Quizzes';
import { nanoid } from 'nanoid';
import he from 'he'

const API_URL = 'https://opentdb.com/api.php?amount=5';

function App() {
    const [quizzes, setQuizzes] = useState([]);
    const [selected, setSelected] = useState([]);
    const [ checkedAnswers, setCheckedAnswers ] = useState(false);

    useEffect(() => {
        async function getQuestions() {
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
            if (data.response_code === 0) {
                const shuffledQuizzes = data.results.map(quiz => {
                    const randomIndex = Math.floor(Math.random() * (quiz.incorrect_answers.length + 1)); 
                    const id = nanoid();
                    const incomingQuestion = he.decode(quiz.question);
                    const multipleChoices = [...quiz.incorrect_answers];
                    multipleChoices.splice(randomIndex, 0, quiz.correct_answer);
                    let parsedChoices = multipleChoices.map(choice => he.decode(choice));
                    return {
                        id: id,
                        question: incomingQuestion,
                        choices: parsedChoices,
                        correctAnswer: quiz.correct_answer
                    };
                });
                setQuizzes(shuffledQuizzes);
            }
        }

        getQuestions();
    }, []);

    function checkAnswer () {
        setCheckedAnswers(true);
    }


    const handleOptionSelect = (id, choice, correctAnswer) => {
     
        setSelected(prevSelected => {
            const index = prevSelected.findIndex(quiz => quiz.ID === id);
            if (index !== -1) {
                const updateSelected = [ ...prevSelected ];
                updateSelected[index] = { ID: id, userAnswer: choice, correctAnswer: correctAnswer }
                return updateSelected;
            } else {
                return [ ...prevSelected, { ID: id, userAnswer: choice, correctAnswer: correctAnswer } ];
            }
        });
        
    };

    const questions = quizzes.map(quiz => {
        const index = selected.findIndex(quest => quest.ID === quiz.id);
        return (
            <Quizzes 
                key={quiz.id}
                id={quiz.id}
                correctAnswer={quiz.correctAnswer}
                checked={checkedAnswers}
                allAnswers={selected || ''}
                question={quiz.question}
                choices={quiz.choices}
                selected={index !== -1 ? selected[index].userAnswer : '' } // Pass down selected option for this quiz
                onOptionSelect={handleOptionSelect}
        />);
    });

  
    return (
        <div className="container">
            <img src={YellowShape} className="yellow-background" alt="yellow shape" />
            <div className="box">
                {questions}
            </div>
            {selected.length === 5 && <button className="check-answers" onClick={checkAnswer}>Check answers</button>}
            <img src={GrayShape} className="gray-background" alt="gray shape" />
        </div>
    );  
}

export default App;