import React, {useState} from 'react';

function Quizzes({ id, question, choices, selected, onOptionSelect }) {
  function handleButtonClick(choice) {
        onOptionSelect(id, choice);
    }

    const multipleChoices = choices.map(choice => (
        <button
            key={choice}
            value={choice}
            onMouseEnter={(e) => { e.target.style.backgroundColor = '#D6DBF5'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = selected === choice ? '#D6DBF5' : '#F5F7FB'; }}
            onClick={() => handleButtonClick(choice)}
            style={selected === choice ? { backgroundColor: '#D6DBF5' } : { backgroundColor: '#F5F7FB' }}
            dangerouslySetInnerHTML={{ __html: choice }}
        />
    ));

    return (
        <div className="quiz">
            <h1 dangerouslySetInnerHTML={{ __html: question }} />
            <div className="choices">
                {multipleChoices}
            </div>
        </div>
    );
}

export default Quizzes;
