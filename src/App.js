import React, {useEffect, useState} from "react";
import Question from "./Question";
import "./App.css";

const App = () => {
    // const [ difficulty, setDifficulty] = useState("easy");
    // const [ search, setSearch ] = useState("");
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        const response = await fetch(
            `https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple`
        );
        const data = await response.json();
        setQuestions(data.results);
        console.log(data.results);
    };

    //const updateSearch = e => {
    //setSearch(e.target.value);
    // }

    // const getSearch = e => {
    //   e.preventDefault();
    //   setDifficulty(search);
    //   setSearch('');
    // }

    
    return (
        <div className="App">
            <form className="difficulty-form">
                <input className="difficulty-level" type="text" />
                <button className="search-button" type="submit">
                    {" "}
                    Search{" "}
                </button>
            </form>
            {questions.map(question => (
                <Question
                    questions={question.question}
                    correctAnswer={question.correct_answer}
                    incorrectAnswer={question.incorrect_answers}
                />
            ))}
            ;
        </div>
    );
};

export default App;
