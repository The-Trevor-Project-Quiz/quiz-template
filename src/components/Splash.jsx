import React, { Component } from 'react'

import BgImage from './BgImage';

class Splash extends Component {

    render() {
        const { backgroundImage, buttonText, emailRequired, header, intro } = this.props.splash;
    return (
        <>
            <BgImage fluid={ backgroundImage } overlayColor="#04040454">
                <h1>{header}</h1>
                <p>{intro}</p>
                <button>{buttonText}</button>
            </BgImage>
        </>
    );
    }
  }
  export default Splash;