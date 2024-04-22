import React from "react";


function StartPage (props) {

    function startQuiz () {
        props.changeDisplay();
    }

    return (
            <div className="start-page">
                <h1>Quizzical</h1>
                <h4>Test your knowledge with these awesome questions!</h4>
                <button onClick={startQuiz}>Start Quiz</button>
            </div>
    );
           
        }
        
    


export default StartPage;