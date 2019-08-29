import React, { Component } from "react";
import Img from "gatsby-image";


class Image extends Component {

    render() {
      return (
        <div>
            <Img
                title=""
                alt=""
                fluid={this.props.data.childImageSharp.fluid}
            />
        </div>
      );
    }
  }
  export default Image;
