import React from "react"
import { graphql } from "gatsby"

import Header from './Header';
import Layout from "./Layout";

import("../scss/style.scss")

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  const quizName = frontmatter.title.replace(/\s+/g, '-').toLowerCase();
  console.log(data)
  return (
    <div className={`${quizName}`}>
      <div className="blog-post">
        <Header data={frontmatter.splash.cta} />
        <Layout splash={ frontmatter.splash }
                title={ frontmatter.title }
                question={ frontmatter.questions } />
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
        questions {
          question {
            questiontext
            questionvalue
            options {
              optiontext
              iscorrect
            }
            answers {
              correctanswer {
                heading
                description
              }
              incorrectanswer {
                heading
                description
              }
            }
          }
        }
      }
    }
  }
`