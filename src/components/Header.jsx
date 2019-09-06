import React, { Component } from 'react'

class Header extends Component {

    render() {
        const { text, url } = this.props.data;
      return (
        <header>
            <div>LOGO</div>
            <div>
                <a href={ url } target='_blank' rel="noopener noreferrer">{ text }</a>
            </div>
        </header>
      );
    }
  }
  export default Header;