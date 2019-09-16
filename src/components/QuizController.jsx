import React, { useState }from "react"
import { graphql } from "gatsby"

import Head from './Head';
import Header from './Header';
import Layout from "./Layout";

export default function QuizController({
  data, path// this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  const quizName = frontmatter.title.replace(/\s+/g, '-').toLowerCase();
  const [status, setStatus] = useState(true);
  console.log(data)
  return (
    <Head metadata={ frontmatter.siteMetadta }
          title={ frontmatter.title }
          path={ path } >
      <div className={`${quizName}`}>
        <div className='quiz-template'>
          <Header data={frontmatter.splash.cta} started={status}/>
          <Layout splash={ frontmatter.splash }
                  title={ frontmatter.title }
                  question={ frontmatter.questions }
                  final={ frontmatter.finalpage}
                  setStatus={setStatus} />
        </div>
      </div>
    </Head>
  )
}

export const pageQuery = graphql`
  query QuizByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        siteMetadta {
          description
          shareImage {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
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
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          questionvalue
          question {
            questiontext
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
            questionimage {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            questionimagemobile {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        finalpage {
          outro
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          cta {
            text
            url
          }
        }
      }
    }
  }
`