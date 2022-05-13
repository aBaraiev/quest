import React from 'react';
import AnswerBlock from "./AnswerBlock";

const Question = ({wording, isRequired, ...rest}) => {

    return (
        <div className='card mb-3 p-4 text-start'>
            <p>
                {wording} {isRequired && <span className='text-danger'>*</span>}
            </p>
            <AnswerBlock {...rest}/>
        </div>
    );
};

export default Question;