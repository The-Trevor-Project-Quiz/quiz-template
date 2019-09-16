import React, { useState, useEffect } from 'react'

import BgImage from './BgImage';
import Images from './Images';

function Questions(props){

    const [status, setStatus] = useState('question');
    const [showAnswer, setShowAnswer] = useState();
    const [totalDonated, setTotalDonated] = useState(0);
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const { answers, options, questionimage, questionimagemobile, questiontext } = props.data;
    const imageUrl = windowWidth >= 768 ? 'desktopImage' : 'mobileImage';

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
            console.log(totalDonated);
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
                 mobileHeight='100vh'>
            <div className={ questionimage && imageUrl === 'desktopImage' ? 'questions-container--image' : questionimagemobile && imageUrl === 'mobileImage' ? 'questions-container--image__mobile' : 'questions-container' }>
                {status === 'question' ?
                <div className={ questionimage && imageUrl === 'desktopImage' ? 'question--image' : questionimagemobile && imageUrl === 'mobileImage' ? 'question--image__mobile' : 'question' }>
                    <div className='q-text'>
                        <p className='question__progress'>Question { props.start[0] + 1 } of { props.questionNum }</p>
                        <h2 className='question__txt'>{ questiontext }</h2>
                        { questionimagemobile && imageUrl === 'mobileImage' ?
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
                        { props.value && questionimage && props.value && imageUrl === 'desktopImage' ? 
                    <div className='question__donation'>
                        <p>Total Donated: <span className='total'>{ (totalDonated / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }</span></p>
                    </div>
                    : null }
                    </div>
                    { questionimage && imageUrl === 'desktopImage' ?
                    <div className='q-image'>
                        <Images data={ questionimage } />
                    </div>
                    : null
                    }
                    { props.value && !questionimage || props.value && imageUrl === 'mobileImage' ? 
                    <div className='question__donation'>
                        <p>Total Donated: <span className='total'>{ (totalDonated / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }</span></p>
                    </div>
                    : null }
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