import React from 'react';
import AnswerOption from "./AnswerOption";
import {useId} from "react-id-generator";

const AnswerBlock = ({options, ...rest}) => {

    const optionIds = useId(options.length);

    return (
        <>
            {
                options.map((option, i) =>
                    <AnswerOption key={optionIds[i]} option={option} {...rest}/>)
            }
        </>
    );
};

export default AnswerBlock;