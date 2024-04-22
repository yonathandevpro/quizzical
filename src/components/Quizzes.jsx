import React from 'react';

function Quizzes({ id, question, choices, selected, onOptionSelect }) {
    function handleButtonClick(choice) {
        onOptionSelect(id, choice);
    }

    const multipleChoices = choices.map(choice => (
        <button
            key={choice}
            value={choice}
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
