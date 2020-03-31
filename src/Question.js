import React, {useEffect} from "react";

export const Question = ({questions, correctAnswer, incorrectAnswer}) => {
    // useEffect(() => {
       
    // }, []);

    var arr = [{incorrectAnswer}]
    var options = arr.push({correctAnswer}, " ")
    //console.log(options)
    //shuffle(options)
    return (
        <div>
            <p>Question: {questions}</p>
            <p>Options:{options}</p>
        </div>
    );
};

export default Question;
