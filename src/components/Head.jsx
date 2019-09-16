import React from 'react';
import Helmet from 'react-helmet';

import("../scss/style.scss")

function Head(props){

    const { description, shareImage } = props.metadata;
    return (
      <>
        <Helmet>
          {/* General tags */}
          <title>{props.title}</title>
          <meta name="description" content={ description } />
          <meta name="image" content={ `https://confident-archimedes-ed555e.netlify.com${shareImage.childImageSharp.fixed.src }`} />
          <link rel="canonical" href={ `https://confident-archimedes-ed555e.netlify.com${props.path}`} />

          {/* OpenGraph tags */}
          <meta property="og:url" content={ `https://confident-archimedes-ed555e.netlify.com${props.path}`} />
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={ `https://confident-archimedes-ed555e.netlify.com${shareImage.childImageSharp.fixed.src }`} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content={ description } />
          <meta name="twitter:image" content={ `https://confident-archimedes-ed555e.netlify.com${shareImage.childImageSharp.fixed.src }`} />
        </Helmet>
        <div>{props.children}</div>
      </>
      );
    }

export default Head;