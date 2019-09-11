import React, { Component } from 'react'
import Img from "gatsby-image";
import styled from "styled-components";

const Parent = styled.div`
  position: relative;
  background-color: ${({ bc }) => bc};
  height: 100vh;
`;

const FakeBgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

class BgImage extends Component {

  render() {
    const {overlayColor, fluid, children} = this.props;
    return (
      <Parent bc={overlayColor}>
        <FakeBgImage
          title=""
          alt=""
          fluid={fluid.childImageSharp.fluid}
        />
        <Content>{children}</Content>
      </Parent>
    );
  }
}

export default BgImage;