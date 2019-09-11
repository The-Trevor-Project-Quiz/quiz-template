import React, { Component } from 'react'

import BgImage from './BgImage';
import { serialize } from './utility';

class FinalPage extends Component {


    componentDidMount() {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: serialize({ "form-name": this.props.title, ...this.props.formData })
            })
            .then(() => console.log("Success!"))
            .catch(error => console.log(error));
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