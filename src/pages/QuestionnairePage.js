import React from 'react';
import QuestionnaireForm from "../components/QuestionnaireForm/QuestionnaireForm";
import {useParams} from "react-router-dom";
import {useFetchQuestionnaireData} from "../hooks/useFetchQuestionnaireData";
import {BASE_URL} from "../constants/baseURL";

const QuestionnairePage = () => {

    const {id} = useParams();
    const {data, isLoading, error} = useFetchQuestionnaireData(`${BASE_URL}/${id}`);
    const {questName, questInfo, questions} = data;

    return (
        error
            ?
            <h1>{error.message}</h1>
            :
            <section className='w-50 p-3 m-auto bg-info min-vh-100 position-relative'>
                {
                    isLoading
                    ?
                        <div>Loading...</div>
                        :
                        <>
                            <div className='card mb-3 p-4'>
                                <h1>{questName}</h1>
                                <p>{questInfo}</p>
                                <p className='text-danger mb-0'>* Required</p>
                            </div>
                            <QuestionnaireForm questions={questions}/>
                        </>
                }
            </section>
    );
};

export default QuestionnairePage;