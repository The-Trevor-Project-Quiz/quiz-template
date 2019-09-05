import React, { Component } from 'react'

import BgImage from './BgImage';
import Form from './Form';

class Splash extends Component {

    render() {
        const { backgroundImage, buttonText, emailRequired, header, intro } = this.props.splash;
    return (
        <>
            <BgImage fluid={ backgroundImage } overlayColor="#04040454">
                <h1>{header}</h1>
                <p>{intro}</p>
                <button>{buttonText}</button>
                <Form email={ emailRequired } name={ this.props.title }/>
            </BgImage>
        </>
    );
    }
  }
  export default Splash;