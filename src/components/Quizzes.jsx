import React, {useState} from 'react';

function Quizzes({ id, question, choices, correctAnswer, allAnswers, selected, onOptionSelect, checked }) {
    function handleButtonClick(choice) {
        onOptionSelect(id, choice, correctAnswer);
    }
       
    
    const multipleChoices = choices.map(choice => {

      if ( checked ) {
          let style; 
          if ( selected === correctAnswer ) {
              if ( choice === correctAnswer ){
                 style = { backgroundColor: '#94D7A2' }
              } else {
                style = { backgroundColor: '#F5F7FB' }
              }     
          } else {
              if ( choice === correctAnswer ) {
                style = { backgroundColor: '#94D7A2' }
              }
              if ( selected === choice ) {
                style = { backgroundColor:  '#F8BCBC'}
              }
          }
              

          return (
            <button
                key={choice}
                value={choice}
                onClick={() => handleButtonClick(choice)}
                style={style}
            >
              {choice}
            </button>
          );
      } else {
            return (
              <button 
                 key={choice}
                value={choice}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#D6DBF5'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = selected === choice ? '#D6DBF5' : '#F5F7FB'; }}
                onClick={() => handleButtonClick(choice)}
                style={selected === choice ? { backgroundColor: '#D6DBF5' } : { backgroundColor: '#F5F7FB' }}
          >
            {choice}
          </button>);
      }
       
       
        
    });

    return (
        <div className="quiz">
            <h1>{question}</h1>
            <div className="choices">
                {multipleChoices}
            </div>
        </div>
    );
}

export default Quizzes;