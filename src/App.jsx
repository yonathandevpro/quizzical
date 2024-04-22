import React, { useState, useEffect } from 'react';
import YellowShape from './assets/yellow-shape.png';
import GrayShape from './assets/gray-shape.png';
import StartPage from './components/StartPage';
import Quizzes from './components/Quizzes';
import { nanoid } from 'nanoid';

const API_URL = 'https://opentdb.com/api.php?amount=5';

function App() {
    const [quizzes, setQuizzes] = useState([]);
    const [selected, setSelected] = useState({});

    console.log(selected);
    useEffect(() => {
        async function getQuestions() {
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
            if (data.response_code === 0) {
                const shuffledQuizzes = data.results.map(quiz => {
                    const randomIndex = Math.floor(Math.random() * 4); 
                    const id = nanoid();
                    const multipleChoices = [...quiz.incorrect_answers];
                    multipleChoices.splice(randomIndex, 0, quiz.correct_answer);
                    return {
                        id: id,
                        question: quiz.question,
                        choices: multipleChoices
                    };
                });
                setQuizzes(shuffledQuizzes);
            }
        }

        getQuestions();
    }, []);

    const handleOptionSelect = (id, choice) => {
        setSelected(prevSelected => ({
            ...prevSelected,
            [id]: choice
        }));
        
    };

    const questions = quizzes.map(quiz => (
        <Quizzes 
            key={quiz.id}
            id={quiz.id}
            question={quiz.question}
            choices={quiz.choices}
            selected={selected[quiz.id] || ''} // Pass down selected option for this quiz
            onOptionSelect={handleOptionSelect}
        />
    ));

  
    return (
        <div className="container">
            <img src={YellowShape} className="yellow-background" alt="yellow shape" />
            <div className="box">
                {questions}
            </div>
            {Object.keys(selected).length === 5 && <button className="check-answers">Check answers</button>}
            <img src={GrayShape} className="gray-background" alt="gray shape" />
        </div>
    );  
}

export default App;
