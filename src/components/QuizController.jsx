import React from "react"
import { graphql } from "gatsby"

import Header from './Header';
import Splash from './Splash';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <Header data={frontmatter.splash.cta} />
        <Splash splash={ frontmatter.splash } />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query QuizByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        splash {
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          buttonText
          emailRequired
          header
          intro
          cta {
            text
            url
          }
        }
      }
    }
  }
`