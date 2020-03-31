import React, {useEffect} from "react";

export const Question = ({questions, correctAnswer, incorrectAnswers}) => {
    // useEffect(() => {
    //     console.log(correctAnswer, incorrectAnswers);
    // }, []);

    let options = [...incorrectAnswers, correctAnswer];

    return (
        <div>
            <p>Question: {questions}</p>
            <p>Options:{options}</p>
        </div>
    );
};

export default Question;
