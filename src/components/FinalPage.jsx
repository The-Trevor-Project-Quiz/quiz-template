import React, { Component } from 'react'
import axios from 'axios';

import BgImage from './BgImage';
import { serialize } from './utility';

class FinalPage extends Component {


    componentDidMount() {
        axios.post('/', serialize(this.props.formData),
                {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    },
                }).then(console.log('Success'));
    }

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