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
                <Form email={ emailRequired } name={ this.props.title }/>
                <button onClick={() => this.props.start[1](this.props.start[0] + 1)}>{buttonText}</button>
            </BgImage>
        </>
    );
    }
  }
  export default Splash;