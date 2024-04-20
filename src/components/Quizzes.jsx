import React, {useState} from "react";
import { nanoid } from 'nanoid';

function Quizzes (props) {

    

    const [ selected, setSelected ] = useState([]);

    function findSelected (id, choice) {
        const index = selected.findIndex(answer => answer.id === id);
        if (index !== -1 && selected[index].selectedOption === choice) {
            return { backgroundColor: '#D6DBF5' };
        } else {
            return { backgroundColor: '#F5F7FB' };
        }
    }

    function handleButtonClick (event, id) {
        const choice = event.target.value;

        const index = selected.findIndex(answer => answer.id === id);

        if (index !== -1) {
            setSelected (prevState => {
                const updatedSelected = [...prevState];
                updatedSelected[index] = {id: id, selectedOption: choice}
                return updatedSelected;
            });
        } else {
            setSelected(prevState => [...prevState, {id: id, selectedOption: choice}]);
        }
    }


    const multipleChoices = props.choices.map(choice => {
        const identifier = nanoid();
        return <button 
                    key={identifier}
                    id={props.id}
                    value={choice}
                    onClick={(event) => handleButtonClick(event, props.id)} 
                    style={findSelected(props.id, choice)} 
                    dangerouslySetInnerHTML={{ __html: choice  }}
                />
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