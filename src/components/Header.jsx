import React, { Component } from 'react'
import logo from '../img/logo.svg';

class Header extends Component {

    render() {
        const { text, url } = this.props.data;
      return (
        <header className='main-header'>
            <div className='main-header__logo'>
              <a href=''>
                <img src={ logo} />
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