import React, { Component } from 'react'

import BgImage from './BgImage';
import { serialize } from './utility';

import mail from '../img/mail.svg';
import twitter from '../img/twitter.svg';
import facebook from '../img/facebook.svg'

class FinalPage extends Component {


    componentDidMount() {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: serialize({
                "form-name": this.props.title,
                "Total Donated": (this.props.totalDonated / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}),
                ...this.props.formData
            })
        }).then(() => console.log("Success!"))
          .catch(error => console.log(error));
    }

    render() {
        const { backgroundImage, cta, outro } = this.props.data;
    return (
        <>
            <BgImage fluid={ backgroundImage.childImageSharp.fluid }
                    overlayColor="#04040454"
                    height='100vh'
                    mobileHeight='100vh'>
                <div className='final-page'>
                    <h2 className='final-page__heading'>You got {this.props.correct}/{this.props.questionNum}!</h2>
                    <h3 className='final-page__donated'>You've unlocked { (this.props.totalDonated / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }</h3>
                    <p className='final-page__outro'>{outro}</p>
                    <a className='final-page__btn' href={cta.url} target='_blank' rel="noopener noreferrer">{cta.text}</a>
                    <div className='final-page__socials'>
                        <p>Share</p>
                        <a href={ `https://www.facebook.com/sharer/sharer.php?u=https://confident-archimedes-ed555e.netlify.com${this.props.path}` }>
                            <img src={ facebook } alt='Share Facebook' />
                        </a>
                        <a href={ `https://twitter.com/home?status=https://confident-archimedes-ed555e.netlify.com${this.props.path}` }>
                            <img src={ twitter } alt='Share Twitter' />
                        </a>
                        <a href={ `mailto:info@example.com?&subject=&body=https://confident-archimedes-ed555e.netlify.com${this.props.path}` }>
                            <img src={ mail } alt='Share Mail' />
                        </a>
                    </div>
                </div>
            </BgImage>
        </>
    );
    }
  }
  export default FinalPage;