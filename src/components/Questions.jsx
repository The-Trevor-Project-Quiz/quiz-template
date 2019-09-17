import React, { useState, useEffect } from 'react'

import BgImage from './BgImage';
import Images from './Images';

function Questions(props){

    const [status, setStatus] = useState('question');
    const [showAnswer, setShowAnswer] = useState();
    const [totalDonated, setTotalDonated] = useState(0);
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const { answers, options, questionimage, questionimagemobile, questiontext } = props.data;
    const imageWidth = windowWidth >= 768 ? 'desktopImage' : 'mobileImage';

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    const selectOption = (answer, q, a) => {
        if(answer) {
            setStatus('answer');
            setShowAnswer(answers.correctanswer)
            setTotalDonated(prev => prev  + props.value);
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
        <BgImage fluid={ props.bimage.childImageSharp.fluid }
                 height='100%'
                 mobileHeight='100%'>
            <div className={ 'questions-container' + (questionimage && answers.answerimage? '--image' : questionimage && !answers.answerimage  && status === 'question' ? '--image' :  !questionimage && answers.answerimage  && status === 'answer' ? '--image' : '' )}>
                {status === 'question' ?
                <div className={ questionimage && imageWidth === 'desktopImage' ? 'question--image' : questionimagemobile && imageWidth === 'mobileImage' ? 'question--image__mobile' : 'question' }>
                    <div className='q-text'>
                        <p className='question__progress'>Question { props.start[0] + 1 } of { props.questionNum }</p>
                        <h2 className='question__txt'>{ questiontext }</h2>
                        { questionimagemobile && imageWidth === 'mobileImage' ?
                    <div className='q-image__mobile'>
                        <Images data={ questionimagemobile } />
                    </div>
                    : null
                    }
                        <ul className='question__options'>
                        {options.slice(0, 4).map(option => {
                            return (
                                <li className='option-item'>
                                    <button className='quiz-btn' onClick={() => selectOption(option.iscorrect, questiontext, option.optiontext)}>{ option.optiontext }</button>
                                </li>
                            )
                        })}
                        </ul>
                        { props.value && questionimage && props.value && imageWidth === 'desktopImage' ? 
                    <div className='question__donation'>
                        <p>Total Donated: <span className='total'>{ (totalDonated / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }</span></p>
                    </div>
                    : null }
                    </div>
                    { questionimage && imageWidth === 'desktopImage' ?
                    <div className='q-image'>
                        <Images data={ questionimage } />
                    </div>
                    : null
                    }
                    { props.value && !questionimage || props.value && imageWidth === 'mobileImage' ? 
                    <div className='question__donation'>
                        <p>Total Donated: <span className='total'>{ (totalDonated / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }</span></p>
                    </div>
                    : null }
                </div>
                :
                <div className={ (answers.answerimage && imageWidth === 'desktopImage' ? 'question--image' : answers.answerimagemobile && imageWidth === 'mobileImage' ? 'question--image__mobile' : 'question') + ' answer' }>
                    <div className='q-text'>
                        <p className='question__progress'>Question { props.start[0] + 1 } of { props.questionNum }</p>
                        <h2 className='answer__heading'>{ showAnswer.heading }</h2>
                        { answers.answerimagemobile && imageWidth === 'mobileImage' ?
                            <div className='q-image__mobile'>
                                <Images data={ answers.answerimagemobile } />
                            </div>
                            : null
                        }
                        <p className='answer__description'> { showAnswer.description }</p>
                        <button className='quiz-btn' onClick={() => changeQuestion()}>{ props.start[0] + 1 === props.questionNum ? 'Find Out Your Score' : 'Next' }</button>
                        </div>
                        { answers.answerimage && imageWidth === 'desktopImage' ?
                            <div className='q-image'>
                                <Images data={ answers.answerimage } />
                            </div>
                            : null
                        }
                    </div>
                }
            </div>
        </BgImage>
    );
  }
  export default Questions;