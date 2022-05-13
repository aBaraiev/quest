import React from 'react';
import UserTextInput from "./AnswerOptions/UserTextInput";
import Radio from "./AnswerOptions/Radio";

const AnswerOption = ({option, questionId}) => {

    switch (option.type) {
        case 'text':
            return <UserTextInput questionId={questionId}/>
        case 'radio':
            return <Radio questionId={questionId} {...option}/>
        default:
            return null;
    }
};

export default AnswerOption;