import React, {useContext} from 'react';
import {QuestionnaireFormContext} from "../../../../contexts/QuestionnaireFormContext";

const UserTextInput = ({questionId}) => {

    const [answers, updateAnswers] = useContext(QuestionnaireFormContext);

    const handleInput = (e) => {
        const input = e.target.value;
        updateAnswers(questionId, input);
    }

    return (
        <input className='p-1 form-control border-0 border-bottom'
               type='text'
               placeholder='Your answer'
               value={answers[questionId] || ''}
               onChange={handleInput}
        />
    );
};

export default UserTextInput;