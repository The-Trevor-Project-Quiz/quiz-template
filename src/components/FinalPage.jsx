import React, { Component } from 'react'

import BgImage from './BgImage';

class FinalPage extends Component {

    render() {
        const { backgroundImage, cta, outro } = this.props.data;
    return (
        <>
            <BgImage fluid={ backgroundImage } overlayColor="#04040454">
                <p>{outro}</p>
                <a href={cta.url} target='_blank' rel="noopener noreferrer">{cta.text}</a>
            </BgImage>
        </>
    );
    }
  }
  export default FinalPage;