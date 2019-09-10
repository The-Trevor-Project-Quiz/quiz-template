import React, { Component } from "react";
import Img from "gatsby-image";


class Image extends Component {

    render() {
      return (
        <>
            <Img
                title=""
                alt=""
                fluid={this.props.data.childImageSharp.fluid}
            />
        </>
      );
    }
  }
  export default Image;
