import React, {useState} from 'react';
import {QuestionnaireFormContext} from "../../contexts/QuestionnaireFormContext";
import Question from "./QuestionCard/Question";
import {useId} from "react-id-generator";
import {cleanEmptyAnswers, getRequiredQuestions} from "../../helpers/helpers";

const QuestionnaireForm = ({questions}) => {

    const [answers, setAnswers] = useState({});
    const questionIds = useId(questions.length);

    const updateAnswers = (questionId, answer) => {
        setAnswers(prevAnswers => ({...prevAnswers, [questionId]: answer}))
    }

    const checkRequiredAnswers = (requiredAnswersIds) => {
        cleanEmptyAnswers(answers);
        const answeredQuestionsIds = Object.keys(answers);
        return answeredQuestionsIds.filter(answer => requiredAnswersIds.includes(answer)).length
            === requiredAnswersIds.length
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        const requiredQuestions = getRequiredQuestions(questions);
        if (checkRequiredAnswers(requiredQuestions)) {
            //proceed w/ sending answers to the server
            console.log(answers);
            alert('Submitted!');
            setAnswers({});
        } else {
            alert('Please, answer all required questions first');
        }
    }

    return (
        <QuestionnaireFormContext.Provider value={[answers, updateAnswers]}>
            <form className='text-end'
                  onSubmit={handleFormSubmit}
            >
                {
                    questions.map((question, i) =>
                        <Question key={questionIds[i]} {...question}/>)
                }
                <button className='btn btn-primary'
                        type='submit'
                >
                    Submit
                </button>
            </form>
        </QuestionnaireFormContext.Provider>
    );
};

export default QuestionnaireForm;