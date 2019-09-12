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
            props.setCorrect(prev => prev + 1);
        }
        else {
            setStatus('answer');
            setShowAnswer(answers.incorrectanswer)
        }

        props.setFormData({ ...props.formData, [q]: a });
    }

    const changeQuestion = () => {
        props.start[1](prev => prev + 1);
        setStatus('question');
    }

    return (
        <BgImage fluid={ props.bimage }>
            <div className='questions-container'>
                {status === 'question' ?
                <div className='question'>
                    <div>
                        <p className='question__progress'>Question { props.start[0] + 1 } of { props.questionNum }</p>
                        <h2 className='question__txt'>{ questiontext }</h2>
                        <ul className='question__options'>
                        {options.map(option => {
                            return (
                                <li className='option-item'>
                                    <button className='quiz-btn' onClick={() => selectOption(option.iscorrect, questiontext, option.optiontext)}>{ option.optiontext }</button>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                    <div className='question__donation'>
                        <p>Total Donated: <span className='total'>{ totalDonated }</span></p>
                    </div>
                </div>
                :
                    <div className='answer'>
                        <p className='question__progress'>Question { props.start[0] + 1 } of { props.questionNum }</p>
                        <h2 className='answer__heading'>{ showAnswer.heading }</h2>
                        <p className='answer__description'> { showAnswer.description }</p>
                        <button className='quiz-btn' onClick={() => changeQuestion()}>Next</button>
                    </div>
                }
            </div>
        </BgImage>
    );
  }
  export default Questions;