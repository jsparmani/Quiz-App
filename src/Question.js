import React, {useEffect} from "react";

export const Question = ({questions, options}) => {
    useEffect(() => {
        console.log(options);
    }, []);

    return (
        <div>
            <p>Question: {questions}</p>
            <p>Options:{options}</p>
        </div>
    );
};

export default Question;
