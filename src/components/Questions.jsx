import React, { useState } from 'react'

import BgImage from './BgImage';

function Questions(props){

    const [status, setStatus] = useState('question');
    const [showAnswer, setShowAnswer] = useState();
    const [totalDonated, setTotalDonated] = useState(0);
    const { answers, options, questiontext, questionvalue } = props.data;

    const selectOption = (answer, q, a) => {
        if(answer) {
            setStatus('answer');
            setShowAnswer(answers.correctanswer)
            setTotalDonated((totalDonated + questionvalue / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) );
        }
        else {
            setStatus('answer');
            setShowAnswer(answers.incorrectanswer)
        }

        props.setFormData({ ...props.formData, [q]: a });
    }

    const changeQuestion = () => {
        props.start[1](props.start[0] + 1);
        setStatus('question');
    }

    return (
        <BgImage fluid={ props.bimage }>
            <div className='questions-container'>
                {status === 'question' ?
                <div className='question'>
                    <p className='question__progress'>Question { props.start[0] + 1 } of { props.questionNum }</p>
                    <h2 className='question__txt'>{ questiontext }</h2>
                    <ul className='question__options'>
                    {options.map(option => {
                        return (
                            <li className='option-item'>
                                <button className='option-btn' onClick={() => selectOption(option.iscorrect, questiontext, option.optiontext)}>{ option.optiontext }</button>
                            </li>
                        )
                    })}
                    </ul>
                    <div className='question__donation'>
                        <p>Total Donated: <span className='total'>{ totalDonated }</span></p>
                    </div>
                </div>
                :
                    <div>
                        <h2>{ showAnswer.heading }</h2>
                        <p> { showAnswer.description }</p>
                        <button onClick={() => changeQuestion()}>Next</button>
                    </div>
                }
            </div>
        </BgImage>
    );
  }
  export default Questions;