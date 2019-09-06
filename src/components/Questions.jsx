import React, { useState } from 'react'

function Questions(props){

    const [status, setStatus] = useState('question');
    const [showAnswer, setShowAnswer] = useState();
    const [totalDonated, setTotalDonated] = useState(0);
    const { answers, options, questiontext, questionvalue } = props.data;
    
    const selectOption = (answer) => {
        if(answer) {
            setStatus('answer');
            setShowAnswer(answers.correctanswer)
            setTotalDonated((totalDonated + questionvalue / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) );
        }
        else {
            setStatus('answer');
            setShowAnswer(answers.incorrectanswer)
        }
    }

    const changeQuestion = () => {
        props.start[1](props.start[0] + 1);
        setStatus('question');
    }

    return (
    <div>
        {status === 'question' ?
        <div>
            <h2>{ questiontext }</h2>
            {options.map(option => {
                return (
                    <button onClick={() => selectOption(option.iscorrect)}>{ option.optiontext }</button>
                )
            })}
            <h3>Total Donated: { totalDonated }</h3>
        </div>
        :
            <div>
                <h2>{ showAnswer.heading }</h2>
                <p> { showAnswer.description }</p>
                <button onClick={() => changeQuestion()}>Next</button>
            </div>
        }
    </div>
    );
  }
  export default Questions;