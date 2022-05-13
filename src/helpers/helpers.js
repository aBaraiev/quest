export const cleanEmptyAnswers = answers => {
    for (let answer in answers) {
        answers[answer] = answers[answer].trim();
        if (!answers[answer]) {
            delete answers[answer];
        }
    }
}

export const getRequiredQuestions = questions => {
    const requiredQuestions = [];
    for (let q of questions) {
        if (q.isRequired) {
            requiredQuestions.push(q.questionId);
        }
    }
    return requiredQuestions;
}