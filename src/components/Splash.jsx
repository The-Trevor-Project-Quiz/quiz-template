import React from 'react'

import BgImage from './BgImage';
import Form from './Form';

function Splash(props) {

    const { backgroundImage, buttonText, emailRequired, header, intro } = props.splash;
    return (
        <>
            <BgImage fluid={ backgroundImage.childImageSharp.fluid }
                    overlayColor="#04040454"
                    height='100vh'
                    mobileHeight='100vh'>
                <div className='splash-screen'>
                    <h1 className='splash-screen__heading'>{header}</h1>
                    <p className='splash-screen__intro'>{intro}</p>
                    <Form email={ emailRequired }
                        name={ props.title }
                        start={props.start}
                        buttonText={buttonText}
                        setFormData={props.setFormData}
                        formData={props.formData}
                        questionList={props.questions} />
                    { !emailRequired ? 
                        <button className='splash-screen__btn' onClick={() => props.start[1](props.start[0] + 1)}>{buttonText}</button>
                    : 
                    <button className='splash-screen__pass' onClick={() => props.start[1](props.start[0] + 1)}>No Thanks, Let's start the quiz.</button> }
                </div>
            </BgImage>
        </>
    );
    }
  export default Splash;