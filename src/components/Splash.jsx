import React from 'react'

import BgImage from './BgImage';
import Form from './Form';

function Splash(props) {

    const { backgroundImage, buttonText, emailRequired, header, intro } = props.splash;
    return (
        <>
            <BgImage fluid={ backgroundImage } overlayColor="#04040454">
                <h1>{header}</h1>
                <p>{intro}</p>
                <Form email={ emailRequired }
                      name={ props.title }
                      start={props.start}
                      buttonText={buttonText}
                      setFormData={props.setFormData}
                      formData={props.formData}
                      questionList={props.questions} />
                { !emailRequired ? 
                    <button onClick={() => props.start[1](props.start[0] + 1)}>{buttonText}</button>
                : 
                <button onClick={() => props.start[1](props.start[0] + 1)}>No Thanks, Let's start the quiz.</button> }
            </BgImage>
        </>
    );
    }
  export default Splash;