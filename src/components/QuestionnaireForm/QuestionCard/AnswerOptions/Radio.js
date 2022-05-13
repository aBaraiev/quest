import React, {useContext, useEffect, useRef, useState} from 'react';
import {useId} from "react-id-generator";
import {QuestionnaireFormContext} from "../../../../contexts/QuestionnaireFormContext";
import Question from "../Question";

const Radio = ({questionId, wording, hasUserInput, conditionalQuestion}) => {

    const radioId = useId();
    const [answers, updateAnswers] = useContext(QuestionnaireFormContext);
    const isThisOptionSelected = !!(answers[questionId] && answers[questionId].split(':')[0] === wording);
    const [isSelected, setIsSelected] = useState(isThisOptionSelected);
    const userInputField = useRef();

    useEffect(() => {
        setIsSelected(isThisOptionSelected);
    }, [answers])

    useEffect(() => {
        if(!isSelected && conditionalQuestion)
            updateAnswers(conditionalQuestion.questionId, '');
    }, [isSelected])

    const handleChange = () => {
        let answer = wording;
        if (hasUserInput) {
            userInputField.current.focus();
            const userText = userInputField.current.value;
            answer = userText ? `${wording}:${userText}` : wording;
        }
        updateAnswers(questionId, answer);
    }

    const handleUserInput = (e) => {
        const currentInput = e.target.value
        updateAnswers(questionId, `${wording}:${currentInput}`);
    }

    return (
        <>
            <div className='form-check d-flex align-items-center'>
                <input className='form-check-input'
                       type='radio'
                       name={questionId}
                       value={wording}
                       id={radioId}
                       checked={isSelected}
                       onChange={handleChange}
                />
                <label className='form-check-label m-2'
                       htmlFor={radioId}
                >
                    {wording}
                </label>
                {
                    hasUserInput
                    &&
                    <input className='p-1 form-control border-0 border-bottom'
                           ref={userInputField}
                           type='text'
                           value={answers[questionId]?.split(':')[1] || ''}
                           onChange={handleUserInput}
                    />
                }
            </div>
            {
                conditionalQuestion && isSelected
                &&
                <Question {...conditionalQuestion}/>
            }
        </>
    );
};

export default Radio;