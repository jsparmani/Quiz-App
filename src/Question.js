import React from 'react'

export const Question = ({questions, options}) => {
    return (
        <div>
            <p>Question: {questions}</p>
            <p>Options:{options}</p>
        </div>
    )
}

export default Question;