import React, { Component } from 'react'
import logo from '../img/logo.svg';
import logoW from '../img/logo-white.svg';

class Header extends Component {

    render() {
        const { text, url } = this.props.data;
      return (
        <header className={'main-header ' + (this.props.started ? 'quiz-started': '')}>
            <div className='main-header__logo'>
              <a href='https://www.thetrevorproject.org/' target='_blank' rel="noopener noreferrer">
                <img src={( this.props.started ? logoW : logo)} />
              </a>
            </div>
            <div className='main-header__cta'>
                <a className='main-header__link cta-button' href={ url } target='_blank' rel="noopener noreferrer">{ text }</a>
            </div>
        </header>
      );
    }
  }
  export default Header;