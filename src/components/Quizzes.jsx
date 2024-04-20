import React from "react";


function Quizzes (props) {
    const multipleChoices = props.choices.map(choice => {
        return <button dangerouslySetInnerHTML={{ __html: choice  }}/>
    });
    return (
        <div className="quiz">
            <h1 dangerouslySetInnerHTML={{ __html: props.question  }} />
            <div className="choices">
                {multipleChoices}
            </div>
        </div>
    );
}

export default Quizzes;